import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
    let quranSection: any = document.querySelector('.quran-section')
    let browsing: any = document.querySelector('button.browsing');
    browsing.addEventListener('click', () => {
      quranSection.scrollIntoView({
        behavior:'smooth'
      })
    })
  }

}
