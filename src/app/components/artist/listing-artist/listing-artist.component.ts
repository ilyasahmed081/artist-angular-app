import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { IArtist } from '../../../interfaces/artists';

@Component({
  selector: 'app-listing-artist',
  standalone: true,
  imports: [NgFor],
  templateUrl: './listing-artist.component.html',
  styleUrl: './listing-artist.component.scss'
})
export class ListingArtistComponent {

  artists: IArtist[] = [
    {
      id: 1,
      name: "Awais",
      dob: "17-11-1995",
      gender: "Male",
      artworkType: "Painting",
      contactInfo: "+923312737076",
      exhibitionDate: "05-04-2024",
      specialNotes: "no any",
    },
    {
      id: 2,
      name: "Awais",
      dob: "17-11-1995",
      gender: "Male",
      artworkType: "Painting",
      contactInfo: "+923312737076",
      exhibitionDate: "05-04-2024",
      specialNotes: "no any",
    },
    {
      id: 3,
      name: "Awais",
      dob: "17-11-1995",
      gender: "Male",
      artworkType: "Painting",
      contactInfo: "+923312737076",
      exhibitionDate: "05-04-2024",
      specialNotes: "no any",
    },
    {
      id: 4,
      name: "Awais",
      dob: "17-11-1995",
      gender: "Male",
      artworkType: "Painting",
      contactInfo: "+923312737076",
      exhibitionDate: "05-04-2024",
      specialNotes: "no any",
    },
    {
      id: 5,
      name: "Awais",
      dob: "17-11-1995",
      gender: "Male",
      artworkType: "Painting",
      contactInfo: "+923312737076",
      exhibitionDate: "05-04-2024",
      specialNotes: "no any",
    }
  ];

}
