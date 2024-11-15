import { Component, OnInit } from '@angular/core';
import { HadithService } from '../shared/hadith.service';

@Component({
  selector: 'app-hadith-section',
  templateUrl: './hadith-section.component.html',
  styleUrls: ['./hadith-section.component.scss']
})
export class HadithSectionComponent implements OnInit {

  books: any;
  booksArabicNames: any 

  hadith: any

  hadithNumber: any

  constructor(private hadithService: HadithService) {
    this.booksArabicNames = [
      'صحيح البخاري',
      'صحيح مسلم',
      'جامع الترمذي',
      'سنن ابي داوود',
      'سنن ابن ماجه',
      'سنن النسائي',
      'مشكاة المصابيح'
    ]
    this.hadithNumber = Number(localStorage.getItem('hadithNumber')) || 1
  }

  ngOnInit(): void {
    this.getHadithBooks()
    this.getHadithDefinitions(this.hadithNumber)
  }

  getHadithBooks() {
    this.hadithService.getHadithBooks().subscribe((book: any) => {
      this.books = book.books.filter((book: any) => {
        return book.id != 9
          && book.id != 10;
      })
    })
  }
  
  getHadithDefinitions(page: any) {
    this.hadithService.getHadithDefinitions(Number(page)).subscribe((hadith: any) => {
      this.hadith = hadith.hadiths
    })
  }

  nextHadith() {
    if (this.hadithNumber == 40619 || this.hadithNumber == 0) this.hadithNumber = 1
    else this.hadithNumber += 1
  
    localStorage.setItem('hadithNumber', this.hadithNumber)
    this.getHadithDefinitions(localStorage.getItem('hadithNumber'))
  }

  prevHadith() {
    if (this.hadithNumber == 0 || this.hadithNumber == 1) this.hadithNumber = 40619
    else this.hadithNumber -= 1
  
    localStorage.setItem('hadithNumber', this.hadithNumber)
    this.getHadithDefinitions(localStorage.getItem('hadithNumber'))
  }

}
