import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomLoginModalComponent } from './custom-login-modal.component';

describe('CustomLoginModalComponent', () => {
  let component: CustomLoginModalComponent;
  let fixture: ComponentFixture<CustomLoginModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomLoginModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomLoginModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
