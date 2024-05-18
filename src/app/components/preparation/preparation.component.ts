import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationModalComponent } from '../delete-confirmation-modal/delete-confirmation-modal.component';
import { QuestionItem } from '../category/category.component.config';
import { ActivatedRoute } from '@angular/router';
import { Subject, switchMap, takeUntil } from 'rxjs';
import { PreparationService } from '../../services/preparation.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { GenerateAnswerModalComponent } from '../generate-answer-modal/generate-answer-modal.component';

@Component({
  selector: 'app-preparation',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatProgressSpinnerModule],
  templateUrl: './preparation.component.html',
  styleUrl: './preparation.component.scss',
})
export class PreparationComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['position', 'question', 'actions'];
  dataSource = new MatTableDataSource<QuestionItem>();
  category: string = '';
  isLoading = false;

  private destroy$ = new Subject<void>();

  constructor(
    public dialog: MatDialog,
    public preparationService: PreparationService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.queryParams
      .pipe(
        takeUntil(this.destroy$),
        switchMap((queryParams) => {
          this.category = queryParams['tabName'] || '';
          this.isLoading = true;
          return this.preparationService.getPreparationQuestionsByCategory(this.category);
        })
      )
      .subscribe((response) => {
        this.isLoading = false;
        this.dataSource = response.data as any;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  updateAnswer(
    categoryName: string,
    question: Partial<QuestionItem>,
    id: number
  ): void {
    this.preparationService
      .updatePreparationQuestionById(categoryName, question, id)
      .subscribe((response) => {
        console.log(response);
      });
  }

  
  openGenerateDialog(question: QuestionItem, index: number): void {
    const dialogRef = this.dialog.open(GenerateAnswerModalComponent, {
      width: '500px',
      data: {
        ...question,
        index
      },
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      console.log('The dialog was closed', result);
      if (result) {
        this.updateAnswer(this.category, { answer: result }, question.id);
      }
    });
  }

  openDeleteDialog(question: QuestionItem): void {
    const dialogRef = this.dialog.open(DeleteConfirmationModalComponent, {
      width: '333px',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      console.log('The dialog was closed', result);
      if (result) {
        console.log('Question would be deleted.', question);
        this.deleteAnswer(this.category, question.id);
      }
    });
  }

  deleteAnswer(
    categoryName: string,
    id: number
  ): void {
    this.preparationService
      .deletePreparationQuestionById(categoryName, id)
      .subscribe((response) => console.log(response));
  }
}
