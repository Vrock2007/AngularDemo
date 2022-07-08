import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieserviceService {
  Display(name: string): string {
    return 'Hello ' + name;
  }
  constructor() {}
}
