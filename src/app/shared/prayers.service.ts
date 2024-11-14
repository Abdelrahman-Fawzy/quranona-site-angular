import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrayersService {

  constructor(private httpclient: HttpClient) {}

  getPrayers(today: any) {
    return this.httpclient.get(`https://api.aladhan.com/v1/timingsByAddress/${today}?address=Cairo,Suez&method=5`)
  }
}
