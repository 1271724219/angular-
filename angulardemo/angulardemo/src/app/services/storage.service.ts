import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  set(val: string, list:Array<any>) {
    localStorage.setItem(val, JSON.stringify(list))
  }
  get(val: string) {
   return JSON.parse(localStorage.getItem(val)||'{}') 
  }
  remove(val: string) {
    localStorage.removeItem(val)
  }
}
