import { Component, Input, OnInit } from '@angular/core';
import { Resource } from '../resource';

@Component({
  selector: 'app-resources-details',
  templateUrl: './resources-details.component.html',
  styleUrls: ['./resources-details.component.css']
})
export class ResourcesDetailsComponent implements OnInit {
  @Input() resources: Resource[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
