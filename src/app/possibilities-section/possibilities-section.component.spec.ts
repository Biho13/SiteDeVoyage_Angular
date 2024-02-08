import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PossibilitiesSectionComponent } from './possibilities-section.component';

describe('PossibilitiesSectionComponent', () => {
  let component: PossibilitiesSectionComponent;
  let fixture: ComponentFixture<PossibilitiesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PossibilitiesSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PossibilitiesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
