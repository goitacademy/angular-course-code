import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { QuestionItem } from '../category/category.component.config';
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
    public data: Pick<QuestionItem, 'question' | 'answer'>,
    public openApi: OpenAiIntegrationService
  ) {}

  ngOnInit(): void {
    if (!this.data.answer) {
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
