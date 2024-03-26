import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IArtist } from '../../../interfaces/artists';
import { ArtistService } from '../../../services/artist/artist.service';

@Component({
  selector: 'app-listing-artist',
  standalone: true,
  imports: [NgFor],
  templateUrl: './listing-artist.component.html',
  styleUrl: './listing-artist.component.scss'
})
export class ListingArtistComponent implements OnInit {

  artists: IArtist[] = [];

  constructor(
    private artistService: ArtistService
  ) {}

  ngOnInit(): void {
    this.artists = this.artistService.getAllArtists();
  }
}
