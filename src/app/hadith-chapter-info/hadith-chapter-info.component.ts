import { Component, OnInit } from '@angular/core';
import { HadithService } from '../shared/hadith.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hadith-chapter-info',
  templateUrl: './hadith-chapter-info.component.html',
  styleUrls: ['./hadith-chapter-info.component.scss']
})
export class HadithChapterInfoComponent implements OnInit {

  hadithChapters: any;
  bookSlug: string = '';
  
  hadithBooks: any

  bookDetails: any;

  constructor(private hadithService: HadithService, private route: ActivatedRoute) {
    this.bookSlug = this.route.snapshot.params['bookSlug']
    this.hadithBooks = [
      {
        bookNameAr: 'صحيح البخاري',
        bookNameEn: 'Sahih al-Bukhari',
        bookSlug: 'sahih-bukhari',
        bookDescription: 'صحيح البخاري هو مجموعة من الأحاديث جمعها الإمام محمد البخاري (ت 256 هـ/870 م) (رحمه الله). وتعتبر مجموعته من قبل الغالبية العظمى من العالم الإسلامي هي المجموعة الأكثر موثوقية لروايات سنة النبي محمد (صلى الله عليه وسلم). ويحتوي على أكثر من 7500 حديث (مع التكرار) في 97 كتابًا. الترجمة المقدمة هنا من قبل الدكتور محسن خان.'
      },
      {
        bookNameAr: 'صحيح مسلم',
        bookNameEn: 'Sahih Muslim',
        bookSlug: 'sahih-muslim',
        bookDescription: 'صحيح مسلم هو مجموعة من الأحاديث جمعها الإمام مسلم بن الحجاج النيسابوري رحمه الله. ويعتبر مجموعته من أصح كتب السنة النبوية، ويشكل مع صحيح البخاري "الصحيحين". ويحتوي على ما يقرب من 7500 حديث (مع التكرار) في 57 كتابًا.'
      },
      {
        bookNameAr: 'جامع الترمذي',
        bookNameEn: `Jami' Al-Tirmidhi`,
        bookSlug: 'al-tirmidhi',
        bookDescription: 'جامع الترمذي هو مجموعة أحاديث جمعها الإمام أبو عيسى محمد الترمذي رحمه الله، ويعتبر جامعه بالإجماع أحد الكتب الستة المعتمدة في السنة النبوية، ويحتوي على ما يقارب 4400 حديث (مع المكرر) في 46 كتابًا.'
      },
      {
        bookNameAr: 'سنن أبي داوود',
        bookNameEn: 'Sunan Abu Dawood',
        bookSlug: 'abu-dawood',
        bookDescription: 'سنن أبي داود هو مجموعة من الأحاديث جمعها الإمام أبو داود سليمان بن الأشعث السجستاني رحمه الله، وهو من الكتب الستة المشهورة في سنة النبي صلى الله عليه وسلم، ويتكون من 5274 حديثاً موزعة على 43 كتاباً.'
      },
      {
        bookNameAr: 'سنن ابن ماجه',
        bookNameEn: 'Sunan Ibn-e-Majah',
        bookSlug: 'ibn-e-majah',
        bookDescription: 'سنن ابن ماجه هو مجموعة من الأحاديث جمعها الإمام محمد بن يزيد بن ماجه القزويني رحمه الله. ويعتبر على نطاق واسع الكتاب السادس من الكتب الستة للسنة النبوية. ويتكون من 4341 حديثاً موزعة على 37 كتاباً.'
      },
      {
        bookNameAr: 'سنن النسائي',
        bookNameEn: 'Sunan An-Nasa`i',
        bookSlug: 'sunan-nasai',
        bookDescription: 'سنن النسائي هو مجموعة أحاديث جمعها الإمام أحمد النسائي رحمه الله، ويعتبر مجموع سننه بالإجماع أحد الكتب الستة المعتمدة في السنة النبوية، ويحتوي على ما يقرب من 5700 حديث (مع المكرر) في 52 كتابًا.'
      },
      {
        bookNameAr: 'مشكاة المصابيح',
        bookNameEn: 'Mishkat Al-Masabih',
        bookSlug: 'mishkat',
        bookDescription: 'مشكاة المصابيح هي مجموعة مختارة من الأحاديث جمعها الإمام الخطيب التبريزي. وقد توسع الإمام التبريزي في مجموعة سابقة من الأحاديث تسمى مصابيح السنة للإمام البغوي. تحتوي مشكاة المصابيح على ما يقرب من 6000 حديث مختارة من الكتب الستة ومسند أحمد ومختلف الكتب الأخرى. إنها مجموعة شاملة من الأحاديث تغطي جميع جوانب العقيدة الإسلامية والفقه والفضائل تقريبًا. الترجمة المقدمة هنا من قبل جيمس روبسون.'
      }
    ]
  }

  ngOnInit(): void {
    this.getHadithChapters()
    this.bookDetails = this.hadithBooks.filter((hadithBook: any) => hadithBook.bookSlug == this.bookSlug)[0]
  }

  getHadithChapters(): void {

    this.hadithService.getHadithChapters(this.bookSlug).subscribe((hadithChapters: any) => {
      this.hadithChapters = hadithChapters.chapters
    });
  }

}
