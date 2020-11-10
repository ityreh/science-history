import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContentService } from './content.service';
import { RESOURCES } from './mock-resources';
import { Resource } from './resource';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor(private contentService: ContentService) { }

  getResources(subject: string): Observable<Resource[]> {
    if (subject == 'Physik') {
      RESOURCES.filter(this.physicsFilter);
    } else if (subject == 'Chemie') {
      RESOURCES.filter(this.chemistryFilter);
    } else if (subject == 'Biologie') {
      RESOURCES.filter(this.biologyFilter);
    }
    this.contentService.add('ResourceService: Fetch resources for ' + subject);

    return of(RESOURCES);
  }

  private physicsFilter(value: Resource, index: any, array: any) {
    return value.subject == 'Physik';
  }

  private chemistryFilter(value: Resource, index: any, array: any) {
    return value.subject == 'Chemie';
  }

  private biologyFilter(value: Resource, index: any, array: any) {
    return value.subject == 'Biologie';
  }
}
