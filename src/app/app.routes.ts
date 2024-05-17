import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { PreparationComponent } from './components/preparation/preparation.component';

export const routes: Routes = [
  { path: 'categories/:categoryId', component: CategoryComponent },
  { path: 'preparation/:categoryId', component: PreparationComponent },
  { path: '', redirectTo: '/categories/angular', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }