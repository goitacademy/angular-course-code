import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationModalComponent } from '../delete-confirmation-modal/delete-confirmation-modal.component';
import { MOCK_DATA } from './preparation.component.config';
import { QuestionItem } from '../category/category.component.config';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { GenerateAnswerModalComponent } from '../generate-answer-modal/generate-answer-modal.component';

@Component({
  selector: 'app-preparation',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, TruncatePipe],
  templateUrl: './preparation.component.html',
  styleUrl: './preparation.component.scss',
})
export class PreparationComponent {
  displayedColumns: string[] = ['position', 'question', 'actions'];
  dataSource = new MatTableDataSource<QuestionItem>(MOCK_DATA);

  constructor(public dialog: MatDialog) {}

  openGenerateDialog(question: QuestionItem): void {
    const dialogRef = this.dialog.open(GenerateAnswerModalComponent, {
      width: '500px',
      data: {
        question: question.question,
        answer: question.answer,
      }
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      console.log('The dialog was closed', result);
      if (result) {
        // TODO - call the service for updating an answer
      }
    });
  }

  openDeleteDialog(question: QuestionItem): void {
    const dialogRef = this.dialog.open(DeleteConfirmationModalComponent, {
      width: '333px',
    });

    dialogRef.afterClosed().subscribe((result: boolean)=> {
      console.log('The dialog was closed', result);
      if (result) {
        console.log('Question would be deleted.', question);
        // TODO - call the service for deleting an answer
      }
    });
  }
}
