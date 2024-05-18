import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, map, of } from 'rxjs';
import { MOCK_DATA, QuestionItem } from '../components/category/category.component.config';
import { Response, ResponseArray } from '../models/response.models';
import { get } from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class PreparationService {
  public baseUrl = 'http://localhost:4200';

  constructor(private http: HttpClient) {}

  getPreparationQuestionsByCategory(
    categoryName: string
  ): Observable<ResponseArray<QuestionItem>> {
    return of(get(MOCK_DATA, categoryName)).pipe(
      map((questions) => ({
        data: [...questions],
      })),
      delay(500)
    );

    // return this.http.get<ResponseArray<QuestionItem>>(
    //   `${this.baseUrl}/preparation/${categoryName}`
    // );
  }

  updatePreparationQuestionById(
    categoryName: string,
    question: Partial<QuestionItem>,
    id: number
  ): Observable<Response<QuestionItem>> {
    return of(
      get(MOCK_DATA, categoryName).filter(
        (question: QuestionItem) => question.id === id
      )
    ).pipe(
      map((q) => {
        return {
          data: { ...q[0], ...question },
        };
      }),
      delay(500)
    );

    // return this.http.patch<Response<QuestionItem>>(
    //   `${this.baseUrl}/category/${categoryName}/${id}`,
    //   { ...question }
    // );
  }

  deletePreparationQuestionById(
    categoryName: string,
    id: number
  ): Observable<Response<QuestionItem>> {
    return of();

    // return this.http.delete<Response<QuestionItem>>(
    //   `${this.baseUrl}/preparation/${categoryName}/${id}`
    // );
  }
}
