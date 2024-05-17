import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparationComponent } from './preparation.component';

describe('PreparationComponent', () => {
  let component: PreparationComponent;
  let fixture: ComponentFixture<PreparationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreparationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
