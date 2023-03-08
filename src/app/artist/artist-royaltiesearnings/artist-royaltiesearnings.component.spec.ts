import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistRoyaltiesearningsComponent } from './artist-royaltiesearnings.component';

describe('ArtistRoyaltiesearningsComponent', () => {
  let component: ArtistRoyaltiesearningsComponent;
  let fixture: ComponentFixture<ArtistRoyaltiesearningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistRoyaltiesearningsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistRoyaltiesearningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
