import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistCatalogueComponent } from './artist-catalogue.component';

describe('ArtistCatalogueComponent', () => {
  let component: ArtistCatalogueComponent;
  let fixture: ComponentFixture<ArtistCatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistCatalogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
