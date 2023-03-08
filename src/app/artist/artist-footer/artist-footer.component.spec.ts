import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistFooterComponent } from './artist-footer.component';

describe('ArtistFooterComponent', () => {
  let component: ArtistFooterComponent;
  let fixture: ComponentFixture<ArtistFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
