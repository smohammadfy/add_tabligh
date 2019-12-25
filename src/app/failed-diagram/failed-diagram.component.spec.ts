import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailedDiagramComponent } from './failed-diagram.component';

describe('FailedDiagramComponent', () => {
  let component: FailedDiagramComponent;
  let fixture: ComponentFixture<FailedDiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailedDiagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailedDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
