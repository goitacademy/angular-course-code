import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MOCK_DATA_ANSWERS, QuestionItem, findAnswerById } from '../category/category.component.config';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { TypingAnimationDirective } from '../../directives/typing-animation.directive';
import { OpenAiIntegrationService } from '../../services/open-ai-integration.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-generate-answer-modal',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    TypingAnimationDirective,
  ],
  templateUrl: './generate-answer-modal.component.html',
  styleUrl: './generate-answer-modal.component.scss',
})
export class GenerateAnswerModalComponent implements OnInit {
  isLoading = false;

  constructor(
    public dialogRef: MatDialogRef<GenerateAnswerModalComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: QuestionItem & {index: number},
    public openApi: OpenAiIntegrationService
  ) {}

  ngOnInit(): void {
    if (!this.data.answer) {
      if (this.data.index < 4) { // Remove this if statement compelely if you would like to connect OpenAPI 
        this.data.answer = findAnswerById(this.data.id, MOCK_DATA_ANSWERS);
        return;
      }
      this.regenerateAnswer();
    }
  }
  regenerateAnswer() {
    this.isLoading = true;
    this.openApi
      .generateAnswerForQuestion(this.data.question)
      .pipe(
        catchError((err) => {
          console.warn(err);
          this.isLoading = false;
          return of('Error with OpenAI integration');
        })
      )
      .subscribe((response) => {
        this.data.answer = response;
        this.isLoading = false;
      });
  }

  saveAnswer() {
    this.dialogRef.close(this.data.answer);
  }
}
