import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OpenAiIntegrationService {
  private apiUrl = 'https://api.openai.com/v1/chat/completions';
  private apiKey = 'YOUR_API_KEY';

  constructor(private http: HttpClient) {}

  generateAnswerForQuestion(question: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
    });

    const systemPrompt = `
      Ти — експерт з глибокими знаннями в JavaScript, RxJS, TypeScript та Angular. 
      Твоє завдання — надавати чіткі, докладні й зрозумілі відповіді на будь-які питання 
      у цих сферах. Твої пояснення повинні бути доступними для новачків, включати приклади 
      коду, аналогії зі світу розробки та реального життя. Структуруй свої відповіді так, 
      щоб кожен крок був зрозумілий і логічно зв'язаний з попереднім. Роз'яснюй складні 
      концепції простими словами, використовуючи аналогії та приклади, що допоможуть 
      слухачам з різним рівнем підготовки зрозуміти матеріал.`;

    const body = {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: systemPrompt,
        },
        {
          role: 'user',
          content: question,
        },
      ],
    };

    return this.http.post(this.apiUrl, body, { headers }).pipe(
      map((response: any) => {
        return response.choices[0].message.content;
      })
    );
  }
}
