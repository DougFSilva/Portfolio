import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyiotComponent } from './myiot.component';

describe('MyiotComponent', () => {
  let component: MyiotComponent;
  let fixture: ComponentFixture<MyiotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyiotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyiotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
