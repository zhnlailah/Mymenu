import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatakuliahPage } from './matakuliah.page';

describe('MatakuliahPage', () => {
  let component: MatakuliahPage;
  let fixture: ComponentFixture<MatakuliahPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MatakuliahPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
