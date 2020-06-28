import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InCreateModeService {

  constructor() { }

  public value: boolean = false;
}

