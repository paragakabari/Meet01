import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistSalestrendsComponent } from './artist-salestrends.component';

describe('ArtistSalestrendsComponent', () => {
  let component: ArtistSalestrendsComponent;
  let fixture: ComponentFixture<ArtistSalestrendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistSalestrendsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistSalestrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
