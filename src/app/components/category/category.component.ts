import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { QuestionItem, MOCK_DATA } from './category.component.config';
import { MatDialog } from '@angular/material/dialog';
import { GenerateAnswerModalComponent } from '../generate-answer-modal/generate-answer-modal.component';
import { DeleteConfirmationModalComponent } from '../delete-confirmation-modal/delete-confirmation-modal.component';
import { TruncatePipe } from '../../pipes/truncate.pipe';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, TruncatePipe],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent {
  displayedColumns: string[] = ['position', 'question', 'answer', 'actions'];
  dataSource = new MatTableDataSource<QuestionItem>(MOCK_DATA);

  constructor(public dialog: MatDialog) {}

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
