import { Component, OnInit } from '@angular/core';
import { RESOURCES } from '../mock-resources';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  matter = RESOURCES[0];
  energy = RESOURCES[1];
  space = RESOURCES[2];
  time = RESOURCES[3];

  constructor() { }

  ngOnInit(): void {
  }

}
