import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  content: string[] = [];

  add(message: string) {
    this.content.push(message);
  }

  clear() {
    this.content = [];
  }
}
