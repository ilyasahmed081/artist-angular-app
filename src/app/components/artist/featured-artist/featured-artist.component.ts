import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { IArtist } from '../../../interfaces/artists';

@Component({
  selector: 'app-featured-artist',
  standalone: true,
  imports: [NgFor],
  templateUrl: './featured-artist.component.html',
  styleUrl: './featured-artist.component.scss'
})
export class FeaturedArtistComponent {

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
