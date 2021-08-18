import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/core/people.service';
import { Person } from 'src/app/models/Person';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['Gender', 'Name', 'Email', 'Location', 'Address'];
  dataSource:Person[] = [];

  constructor(
    private peopleService: PeopleService
  ) { }

  ngOnInit(): void {
    this.dataSource = this.peopleService.getPeople();
  }

}
