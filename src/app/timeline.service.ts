import { analyzeNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Age } from './age';
import { AGES } from './mock-timeline';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  constructor() { }

  getAges(): Observable<Age[]>{
    return of(AGES);
  }
}
