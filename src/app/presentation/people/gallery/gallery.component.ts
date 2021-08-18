import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PeopleService } from 'src/app/core/people.service';
import { Person } from 'src/app/models/Person';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html'
})
export class GalleryComponent implements OnInit {
  peopleList: Person[] = [];
  constructor(
    private peopleService: PeopleService,
    public modal: MatDialog
  ) { }

  ngOnInit(): void {
    this.peopleList = this.peopleService.getPeople();
    console.log(this.peopleList)
  }

  onModalOpen(id:string): void {
    const dialogRef = this.modal.open(ModalComponent, {
      width: '20rem',
      data: {person: this.peopleService.getPeopleById(id)}
    });
  }

}
