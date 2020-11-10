import { Component, Input, OnInit } from '@angular/core';
import { Age } from '../age';

@Component({
  selector: 'app-timeline-details',
  templateUrl: './timeline-details.component.html',
  styleUrls: ['./timeline-details.component.css']
})
export class TimelineDetailsComponent implements OnInit {
  @Input() age: Age | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
