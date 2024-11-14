import { Component, OnInit } from '@angular/core';
import { HadithService } from '../shared/hadith.service';
import { ActivatedRoute } from '@angular/router';

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'app-hadith-info',
  templateUrl: './hadith-info.component.html',
  styleUrls: ['./hadith-info.component.scss']
})
export class HadithInfoComponent implements OnInit {

  chapter: any
  chapterId: any;
  bookSlug: any;

  hadiths: any;

  first: number = 0;
  paginate: number = 10;
  totalItems: number = 0;
  page: number = 1

  constructor(private hadithService: HadithService, private activatedRoute: ActivatedRoute) {
    this.bookSlug = this.activatedRoute.snapshot.params['bookSlug']
    this.chapterId = Number(this.activatedRoute.snapshot.params['chapter'])
  }

  ngOnInit(): void {
    this.getHadithChapter(this.bookSlug)
    this.getHadith(this.bookSlug, this.chapterId)
  }

  getHadithChapter(bookSlug: any) {
    this.hadithService.getHadithChapters(bookSlug).subscribe((chapters: any) => {
      console.log(chapters.chapters);
      console.log(this.chapterId);
      
      this.chapter = chapters.chapters.find((chapter: any) => Number(chapter.chapterNumber) === this.chapterId)
      console.log(bookSlug);
      console.log(this.chapter);
      
    })
  }

  getHadith(bookSlug: any, chapter: any) {
    this.hadithService.getHadiths(bookSlug, chapter, this.paginate, this.page).subscribe((hadiths: any) => {
      console.log(hadiths);
      this.hadiths = hadiths.hadiths.data
      this.totalItems = hadiths.hadiths.total
    })
  }

  onPageChange(event: any) {
    console.log(event);
    
    this.first = event.first;
    this.paginate = event.rows;
    this.page = event.page + 1;

    
    this.getHadith(this.bookSlug, this.chapterId)
}

}
