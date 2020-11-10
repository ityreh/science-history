import { Component, OnInit } from '@angular/core';
import { Age } from '../age';
import { TimelineService } from '../timeline.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  ages: Age[] | undefined;
  selectedAge: Age | undefined;

  constructor(private timelineService: TimelineService) { }

  ngOnInit(): void {
    this.getAges();
  }

  onSelect(age: Age) {
    this.selectedAge = age;
  }

  getAges(): void {
    this.timelineService.getAges().subscribe(ages => this.ages = ages);
  }

}
