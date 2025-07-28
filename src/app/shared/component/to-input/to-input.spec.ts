import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToInput } from './to-input';

describe('ToInput', () => {
  let component: ToInput;
  let fixture: ComponentFixture<ToInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
