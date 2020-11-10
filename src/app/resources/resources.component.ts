import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';
import { Resource } from '../resource';
import { ResourceService } from '../resource.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  physicsResources: Resource[] | undefined;
  chemistryResources: Resource[] | undefined;
  biologyResources: Resource[] | undefined;

  selectedResources: Resource[] | undefined;

  constructor(private resourceService: ResourceService, private contentService: ContentService) { }

  ngOnInit(): void {
    this.getResources();
    this.selectedResources = this.physicsResources;
  }

  onSelect(subject: string) {
    if (subject == 'Physik') {
      this.selectedResources = this.physicsResources;
    } else if (subject == 'Chemie') {
      this.selectedResources = this.chemistryResources;
    } else if (subject == 'Biologie') {
      this.selectedResources = this.biologyResources;
    }
    this.contentService.add('ResourceComponent: Select subject ${slectedSubject[0].subject}');
  }

  getResources(): void {
    this.resourceService.getResources('Physik').subscribe(resources => this.physicsResources = resources);
    this.resourceService.getResources('Chemie').subscribe(resources => this.chemistryResources = resources);
    this.resourceService.getResources('Biologie').subscribe(resources => this.biologyResources = resources);
  }
}
