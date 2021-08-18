import { Injectable } from '@angular/core';
import { Person } from '../models/Person';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private personList: Person[] = [];
  constructor(
    private httpService: HttpService
  ) { }

  retrieveAllPeople() {
    return new Promise((resolve, reject) => {
      this.httpService.getPeople().subscribe(response => {
        this.personList = response.results;
        resolve(true)
      }, error => { 
        console.log(error); 
        reject(true) 
    });
    })

  };

  getPeople() {
    return this.personList;
  }

  getPeopleById(id:string):Person{
    return this.personList.filter( person => person.id.value === id)[0];
  }
}

