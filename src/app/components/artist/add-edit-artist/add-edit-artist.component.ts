import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArtistService } from '../../../services/artist/artist.service';

@Component({
  selector: 'app-add-edit-artist',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-edit-artist.component.html',
  styleUrl: './add-edit-artist.component.scss'
})
export class AddEditArtistComponent {

  addEditArtistForm: any = FormGroup;

  constructor(
    private fb: FormBuilder,
    private artistService: ArtistService
  ) { }

  ngOnInit(): void {
    this.formInit();
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
    this.artistService.addArtist(this.addEditArtistForm.value);
  }

}
