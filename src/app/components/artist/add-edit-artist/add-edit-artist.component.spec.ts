import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditArtistComponent } from './add-edit-artist.component';

describe('AddEditArtistComponent', () => {
  let component: AddEditArtistComponent;
  let fixture: ComponentFixture<AddEditArtistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditArtistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEditArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
