import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedArtistComponent } from './featured-artist.component';

describe('FeaturedArtistComponent', () => {
  let component: FeaturedArtistComponent;
  let fixture: ComponentFixture<FeaturedArtistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedArtistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeaturedArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
