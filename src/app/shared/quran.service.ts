import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuranService {

  constructor(private httpclient: HttpClient) {}

  getAllReciters() {
    return this.httpclient.get('https://mp3quran.net/api/v3/reciters?language=ar&rewaya=1');
  }

  getQuranDefinitions() {
    return this.httpclient.get('https://api.alquran.cloud/v1/quran/ar.alafasy');
  }

  getSurahs(reciterId: any) {
    return this.httpclient.get(`https://www.mp3quran.net/api/v3/reciters?language=ar&reciter=${reciterId}&rewaya=1`);
  }
}
