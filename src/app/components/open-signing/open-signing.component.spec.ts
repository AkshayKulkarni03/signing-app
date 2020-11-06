import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenSigningComponent } from './open-signing.component';

describe('OpenSigningComponent', () => {
  let component: OpenSigningComponent;
  let fixture: ComponentFixture<OpenSigningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenSigningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenSigningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
