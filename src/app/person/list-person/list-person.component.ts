import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {

  persons: any;
  constructor(http: Http) {
    http.get('http://localhost:8080/api/persons')
      .subscribe(response => {
        // console.log(response.json());
        this.persons = response.json();
      });
  }


  ngOnInit() {}

}
