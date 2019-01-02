import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsResourceComponent } from './details-resource.component';

describe('DetailsResourceComponent', () => {
  let component: DetailsResourceComponent;
  let fixture: ComponentFixture<DetailsResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
