import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./components/artist/listing-artist/listing-artist.component').then(m => m.ListingArtistComponent) },
    { path: 'add-edit-artist', loadComponent: () => import('./components/artist/add-edit-artist/add-edit-artist.component').then(m => m.AddEditArtistComponent) },
    { path: 'listing-artist', loadComponent: () => import('./components/artist/listing-artist/listing-artist.component').then(m => m.ListingArtistComponent) },
    { path: 'featured-artist', loadComponent: () => import('./components/artist/featured-artist/featured-artist.component').then(m => m.FeaturedArtistComponent) },
];
