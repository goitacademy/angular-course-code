import { Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { PreparationComponent } from './components/preparation/preparation.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: 'categories/:categoryId', component: CategoryComponent },
  { path: 'preparation', component: PreparationComponent },
  { path: '', redirectTo: '/categories/angular', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
