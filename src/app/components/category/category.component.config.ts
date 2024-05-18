export interface QuestionItem {
  id: number;
  question: string;
  answer?: string;
}

export const MOCK_DATA: QuestionItem[] = [
  {id: 1, question: 'Can you explain what a component was in Angular?'},
  {id: 2, question: 'How do you bind data in Angular?'},
  {id: 3, question: 'Can you explain the lifecycle hooks in Angular?'},
  {id: 4, question: 'Can you explain the concept of dynamic components in Angular?'},
  {id: 5, question: 'What are the best practices for structuring a large Angular application?'},
  {id: 6, question: 'What is a directive in Angular? Can you give an example?'},
  {id: 7, question: 'What is the difference between an attribute directive and a structural directive?'},
  {id: 8, question: 'How do you create custom directives in Angular?'},
  {id: 9, question: 'Can you explain the concept of Angular decorators like @HostListener and @HostB?'},
  {id: 10, question: 'What is the purpose of the Angular Render?'},
];