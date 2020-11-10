import { analyzeNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Age } from './age';
import { AGES } from './mock-timeline';
import { Observable, of } from 'rxjs';
import { ContentService } from './content.service';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  constructor(private contentService: ContentService) { }

  getAges(): Observable<Age[]>{
    this.contentService.add('TimelineService: Fetched Ages');
    return of(AGES);
  }
}
