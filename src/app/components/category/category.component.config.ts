export interface CategoryQuestionItem {
  position: number;
  question: string;
  actions: string[];
  answer?: string;
}

export const MOCK_DATA: CategoryQuestionItem[] = [
  {position: 1, question: 'Can you explain what a component was in Angular?', actions: []},
  {position: 2, question: 'How do you bind data in Angular?', actions: []},
  {position: 3, question: 'Can you explain the lifecycle hooks in Angular?', actions: []},
  {position: 4, question: 'Can you explain the concept of dynamic components in Angular?', actions: []},
  {position: 5, question: 'What are the best practices for structuring a large Angular application?', actions: []},
  {position: 6, question: 'What is a directive in Angular? Can you give an example?', actions: []},
  {position: 7, question: 'What is the difference between an attribute directive and a structural directive?', actions: []},
  {position: 8, question: 'How do you create custom directives in Angular?', actions: []},
  {position: 9, question: 'Can you explain the concept of Angular decorators like @HostListener and @HostB?', actions: []},
  {position: 10, question: 'What is the purpose of the Angular Render?', actions: []},
];