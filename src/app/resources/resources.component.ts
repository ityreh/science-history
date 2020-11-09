import { Component, OnInit } from '@angular/core';
import { Resource } from '../resource';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  matter: Resource = {
    id: 1,
    name: 'Materie'
  };

  energy: Resource = {
    id: 2,
    name: 'Energie'
  };

  space: Resource = {
    id: 3,
    name: 'Raum'
  };

  time: Resource = {
    id: 4,
    name: 'Zeit'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
