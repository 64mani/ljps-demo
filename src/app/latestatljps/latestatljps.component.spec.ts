import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestatljpsComponent } from './latestatljps.component';

describe('LatestatljpsComponent', () => {
  let component: LatestatljpsComponent;
  let fixture: ComponentFixture<LatestatljpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestatljpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestatljpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
