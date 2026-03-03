import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsSection } from './documents-section';

describe('DocumentsSection', () => {
  let component: DocumentsSection;
  let fixture: ComponentFixture<DocumentsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentsSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentsSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
