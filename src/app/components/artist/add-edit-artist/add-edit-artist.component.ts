import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArtistService } from '../../../services/artist/artist.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IArtist } from '../../../interfaces/artists';

@Component({
  selector: 'app-add-edit-artist',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-edit-artist.component.html',
  styleUrl: './add-edit-artist.component.scss'
})
export class AddEditArtistComponent {

  artist: IArtist | null = null;
  addEditArtistForm: any = FormGroup;

  constructor(
    private fb: FormBuilder,
    private artistService: ArtistService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.artist = history?.state?.data;
    this.formInit();

    if (this.artist?.id) {
      this.addEditArtistForm.setValue(this.artist);
    }
  }

  formInit() {
    this.addEditArtistForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      artworkType: ['', Validators.required],
      contactInfo: ['', Validators.required],
      exhibitionDate: ['', Validators.required],
      specialNotes: ['', Validators.required],
      featured: [false, Validators.required]
    });
  }

  addArtist() {
    if (this.artist?.id) {
      this.artistService.editArtist(this.addEditArtistForm.value);
      this.router.navigate(['/listing-artist']);
    } else {
      this.artistService.addArtist(this.addEditArtistForm.value);
    }
  }

}
