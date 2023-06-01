import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmListComponentComponent } from './farm-list-component.component';

describe('FarmListComponentComponent', () => {
  let component: FarmListComponentComponent;
  let fixture: ComponentFixture<FarmListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmListComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
