import { Injectable } from '@angular/core';
import { IArtist } from '../../interfaces/artists';

@Injectable({
  providedIn: 'root',
})
export class ArtistService {
  constructor() {}

  addArtist(artist: IArtist) {
    // Retrieve artists from sessionStorage
    let existingArtists = JSON.parse(sessionStorage.getItem('artists') || '[]');

    // If no artists are stored yet, initialize an empty array
    if (!existingArtists) {
      existingArtists = [];
    }

    // Check if the ID of the new artist is distinct and unique
    if (
      existingArtists.some((existingArtist: any) => existingArtist.id === artist.id)
    ) {
      console.error('Artist with the same ID already exists.');
      return; // Exit the function without adding the artist
    }

    // Add the new artist to the existing array
    existingArtists.push(artist);

    // Save the updated array back to sessionStorage
    sessionStorage.setItem('artists', JSON.stringify(existingArtists));
  }

  getAllArtists() {
    return JSON.parse(sessionStorage.getItem('artists') || '[]');
  }

  getAllFeaturedArtists() {
    let allArtists = JSON.parse(sessionStorage.getItem('artists') || '[]');
    return allArtists.filter((a: IArtist) => a.featured == true);
  }
}
