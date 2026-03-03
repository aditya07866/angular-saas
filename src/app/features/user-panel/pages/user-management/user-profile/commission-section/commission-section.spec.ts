import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommissionSection } from './commission-section';

describe('CommissionSection', () => {
  let component: CommissionSection;
  let fixture: ComponentFixture<CommissionSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommissionSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommissionSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
