import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaSectionComponent } from './vista-section.component';

describe('VistaSectionComponent', () => {
  let component: VistaSectionComponent;
  let fixture: ComponentFixture<VistaSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
