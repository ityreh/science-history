import { Component, OnInit } from '@angular/core';
import { Age } from '../age';
import { AGES } from '../mock-timeline';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  ages = AGES;
  selectedAge: Age | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(age: Age){
    this.selectedAge = age;
  }

}
