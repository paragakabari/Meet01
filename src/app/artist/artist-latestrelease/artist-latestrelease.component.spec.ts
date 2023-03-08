import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistLatestreleaseComponent } from './artist-latestrelease.component';

describe('ArtistLatestreleaseComponent', () => {
  let component: ArtistLatestreleaseComponent;
  let fixture: ComponentFixture<ArtistLatestreleaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistLatestreleaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistLatestreleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
