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
      existingArtists.some(
        (existingArtist: any) => existingArtist.id === artist.id
      )
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

  searchArtist(id: number) {
    let allArtists = JSON.parse(sessionStorage.getItem('artists') || '[]');
    return allArtists.filter((a: IArtist) => a.id == id);
  }

  searchFeaturedArtist(id: number) {
    let allArtists = JSON.parse(
      sessionStorage.getItem('artists') || '[]'
    ).filter((a: IArtist) => a.featured == true);
    return allArtists.filter((a: IArtist) => a.id == id);
  }

  deleteArtist(artistId: number) {
    // Retrieve artists from sessionStorage
    let existingArtistsJson = sessionStorage.getItem('artists');

    if (!existingArtistsJson) {
      console.error('No artists found in sessionStorage');
      return;
    }

    // Parse the JSON string to an array of artists
    let existingArtists: IArtist[] = JSON.parse(existingArtistsJson);

    // Find the index of the artist with the given ID
    const index = existingArtists.findIndex((artist) => artist.id === artistId);

    if (index === -1) {
      console.error('Artist not found');
      return;
    }

    // Remove the artist from the array
    existingArtists.splice(index, 1);

    // Save the updated array back to sessionStorage
    sessionStorage.setItem('artists', JSON.stringify(existingArtists));
  }

  editArtist(artist: IArtist) {
    // Retrieve artists from sessionStorage
    let existingArtistsJson = sessionStorage.getItem('artists');
    
    if (!existingArtistsJson) {
        console.error('No artists found in sessionStorage');
        return;
    }

    // Parse the JSON string to an array of artists
    let existingArtists: IArtist[] = JSON.parse(existingArtistsJson);

    // Find the index of the artist with the given ID
    const index = existingArtists.findIndex(a => a.id === artist.id);

    if (index === -1) {
        console.error('Artist not found');
        return;
    }

    // Update the artist in the array
    existingArtists[index] = artist;

    // Save the updated array back to sessionStorage
    sessionStorage.setItem('artists', JSON.stringify(existingArtists));
}

}
