import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistNewreleaseComponent } from './artist-newrelease.component';

describe('ArtistNewreleaseComponent', () => {
  let component: ArtistNewreleaseComponent;
  let fixture: ComponentFixture<ArtistNewreleaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistNewreleaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistNewreleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
