import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistPlanComponent } from './artist-plan.component';

describe('ArtistPlanComponent', () => {
  let component: ArtistPlanComponent;
  let fixture: ComponentFixture<ArtistPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
