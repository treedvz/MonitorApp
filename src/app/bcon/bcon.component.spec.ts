import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BconComponent } from './bcon.component';

describe('BconComponent', () => {
  let component: BconComponent;
  let fixture: ComponentFixture<BconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
