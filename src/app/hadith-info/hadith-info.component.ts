import { Component, OnInit } from '@angular/core';
import { HadithService } from '../shared/hadith.service';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';

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

  constructor(private hadithService: HadithService, private activatedRoute: ActivatedRoute, private messageService: MessageService) {
    this.bookSlug = this.activatedRoute.snapshot.params['bookSlug']
    this.chapterId = Number(this.activatedRoute.snapshot.params['chapter'])
  }

  ngOnInit(): void {
    this.getHadithChapter(this.bookSlug)
    this.getHadith(this.bookSlug, this.chapterId)
  }

  getHadithChapter(bookSlug: any) {
    this.hadithService.getHadithChapters(bookSlug).subscribe((chapters: any) => {
      this.chapter = chapters.chapters.find((chapter: any) => Number(chapter.chapterNumber) === this.chapterId)
    })
  }

  getHadith(bookSlug: any, chapter: any) {
    this.hadithService.getHadiths(bookSlug, chapter, this.paginate, this.page).subscribe((hadiths: any) => {
      this.hadiths = hadiths.hadiths.data
      this.totalItems = hadiths.hadiths.total
    })
  }

  onPageChange(event: any) {
    this.first = event.first;
    this.paginate = event.rows;
    this.page = event.page + 1;

    
    this.getHadith(this.bookSlug, this.chapterId)
  }

  copyHadith(hadith: string) {
    if (hadith) {
      let hadithBox = document.createElement('input')
      hadithBox.style.position = 'fixed'
      hadithBox.style.top = '0'
      hadithBox.style.left = '0'
      hadithBox.style.opacity = '0'
      hadithBox.value = hadith
      document.body.appendChild(hadithBox)
      hadithBox.focus()
      hadithBox.select()
      document.execCommand('copy')
      document.body.removeChild(hadithBox);
      this.messageService.add({ 
        severity: 'success', 
        // summary: 'Success', 
        detail: 'تم النسخ'
      });
    }
  }

}
