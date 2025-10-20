import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YoPage } from './yo.page';

describe('YoPage', () => {
  let component: YoPage;
  let fixture: ComponentFixture<YoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(YoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
