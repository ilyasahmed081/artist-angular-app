import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IArtist } from '../../../interfaces/artists';
import { ArtistService } from '../../../services/artist/artist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing-artist',
  standalone: true,
  imports: [NgFor],
  templateUrl: './listing-artist.component.html',
  styleUrl: './listing-artist.component.scss',
})
export class ListingArtistComponent implements OnInit {
  artists: IArtist[] = [];

  constructor(private artistService: ArtistService, private router: Router) {}

  ngOnInit(): void {
    this.getAllArtists();
  }

  getAllArtists() {
    this.artists = this.artistService.getAllArtists();
  }

  onSearch(event: any) {
    const searchValue = event.target.value.trim();

    if (searchValue === '') {
      // If the search value is empty, load all artists
      this.artists = this.artistService.getAllArtists();
    } else {
      // If the search value is not empty, search for artists based on the search value
      this.artists = this.artistService.searchArtist(Number(searchValue));
    }
  }

  onDelete(id: number) {
    this.artistService.deleteArtist(id);
    this.getAllArtists();
  }

  onEditArtist(artist: IArtist) {
    this.router.navigate(['/add-edit-artist'], {state: {data: artist}});
  }
}
