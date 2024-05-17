import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateAnswerModalComponent } from './generate-answer-modal.component';

describe('GenerateAnswerModalComponent', () => {
  let component: GenerateAnswerModalComponent;
  let fixture: ComponentFixture<GenerateAnswerModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateAnswerModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenerateAnswerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
