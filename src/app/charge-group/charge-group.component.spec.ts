import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargeGroupComponent } from './charge-group.component';

describe('ChargeGroupComponent', () => {
  let component: ChargeGroupComponent;
  let fixture: ComponentFixture<ChargeGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChargeGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargeGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
