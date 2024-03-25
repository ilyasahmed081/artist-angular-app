import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingArtistComponent } from './listing-artist.component';

describe('ListingArtistComponent', () => {
  let component: ListingArtistComponent;
  let fixture: ComponentFixture<ListingArtistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListingArtistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListingArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
