import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HadithService {

  ApiKey = environment.apiKey

  constructor(private httpclient: HttpClient) {}

  getHadithBooks() {
    return this.httpclient.get(`https://www.hadithapi.com/api/books?apiKey=${this.ApiKey}`)
  }

  getHadithChapters(bookSlug: any) {
    return this.httpclient.get(`https://www.hadithapi.com/api/${bookSlug}/chapters?apiKey=${this.ApiKey}`)
  }

  getHadiths(book: any, chapter: any, paginate: any, page: any) {
    return this.httpclient.get(`https://www.hadithapi.com/api/hadiths?apiKey=${this.ApiKey}&book=${book}&chapter=${chapter}&paginate=${paginate}&page=${page}`)
  }

  getHadithDefinitions(page: any) {
    let apiKey = '$2y$10$gGgZbggF7BToRq3kdHoEwOlGHgASrtQXc0TyTNlkHxONnPJKhH2W'
    return this.httpclient.get(`https://www.hadithapi.com/api/hadiths?apiKey=${this.ApiKey}&paginate=1&page=${page}`)
  }
}
