import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsignAccountComponent } from './consign-account.component';

describe('ConsignAccountComponent', () => {
  let component: ConsignAccountComponent;
  let fixture: ComponentFixture<ConsignAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsignAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsignAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
