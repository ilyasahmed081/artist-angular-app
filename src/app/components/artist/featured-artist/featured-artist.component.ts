import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { IArtist } from '../../../interfaces/artists';
import { ArtistService } from '../../../services/artist/artist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-featured-artist',
  standalone: true,
  imports: [NgFor],
  templateUrl: './featured-artist.component.html',
  styleUrl: './featured-artist.component.scss'
})
export class FeaturedArtistComponent {

  artists: IArtist[] = [];

  constructor(
    private artistService: ArtistService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllFeatArtists();
  }

  getAllFeatArtists() {
    this.artists = this.artistService.getAllFeaturedArtists();
  }

  onSearch(event: any) {
    const searchValue = event.target.value.trim();

    if (searchValue === '') {
      // If the search value is empty, load all artists
      this.artists = this.artistService.getAllFeaturedArtists();
    } else {
      // If the search value is not empty, search for artists based on the search value
      this.artists = this.artistService.searchFeaturedArtist(Number(searchValue));
    }
  }

  onDelete(id: number) {
    this.artistService.deleteArtist(id);
    this.getAllFeatArtists();
  }

  onEditArtist(artist: IArtist) {
    this.router.navigate(['/add-edit-artist'], {state: {data: artist}});
  }

}
