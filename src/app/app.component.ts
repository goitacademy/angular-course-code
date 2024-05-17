import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { LeftSideMenuComponent } from './components/left-side-menu/left-side-menu.component';
import { CategoryComponent } from './components/category/category.component';
import { DeleteConfirmationModalComponent } from './components/delete-confirmation-modal/delete-confirmation-modal.component';
import { GenerateAnswerModalComponent } from './components/generate-answer-modal/generate-answer-modal.component';
import { PreparationComponent } from './components/preparation/preparation.component';
import { QuestionItemComponent } from './components/question-item/question-item.component';
import { QuestionsListComponent } from './components/questions-list/questions-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CategoryComponent,
    DeleteConfirmationModalComponent,
    GenerateAnswerModalComponent,
    LeftSideMenuComponent,
    PreparationComponent,
    QuestionItemComponent,
    QuestionsListComponent,
    TopMenuComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-course-code';
}
