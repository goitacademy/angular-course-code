import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { QuestionItem } from '../category/category.component.config';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { TypingAnimationDirective } from '../../directives/typing-animation.directive';

@Component({
  selector: 'app-generate-answer-modal',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatProgressSpinnerModule, TypingAnimationDirective],
  templateUrl: './generate-answer-modal.component.html',
  styleUrl: './generate-answer-modal.component.scss',
})
export class GenerateAnswerModalComponent implements OnInit {
  isLoading = false;

  constructor(
    public dialogRef: MatDialogRef<GenerateAnswerModalComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: Pick<QuestionItem, 'question' | 'answer'>
  ) {}

  ngOnInit(): void {
    if (!this.data.answer) {
      this.regenerateAnswer();
    }
  }
  regenerateAnswer() {
    // TODO - call the service 
    this.isLoading = true;
    // Simulate an API call or any asynchronous operation
    setTimeout(() => {
      this.data.answer = "New generated answer based on some API call or logic";
      this.isLoading = false;  // Set to false once the data is updated
    }, 2000);
  }

  saveAnswer() {
    this.dialogRef.close(this.data.answer);
  }
}
