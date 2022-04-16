import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FartherComComponent } from './farther-com.component';

describe('FartherComComponent', () => {
  let component: FartherComComponent;
  let fixture: ComponentFixture<FartherComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FartherComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FartherComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
