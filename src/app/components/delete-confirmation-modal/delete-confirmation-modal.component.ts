import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-confirmation-modal',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './delete-confirmation-modal.component.html',
  styleUrl: './delete-confirmation-modal.component.scss',
})
export class DeleteConfirmationModalComponent {
  constructor(public dialogRef: MatDialogRef<DeleteConfirmationModalComponent>) {}

  cancel() {
    this.dialogRef.close(false);
  }

  deleteQuestion() {
    this.dialogRef.close(true);
  }
}
