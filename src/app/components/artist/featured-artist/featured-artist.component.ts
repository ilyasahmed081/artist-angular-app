import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { IArtist } from '../../../interfaces/artists';
import { ArtistService } from '../../../services/artist/artist.service';

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
    private artistService: ArtistService
  ) {}

  ngOnInit(): void {
    this.artists = this.artistService.getAllFeaturedArtists();
  }

}
