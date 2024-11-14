import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'quranona-site';

  ngOnInit(): void {
    let scrollToTop: any = document.querySelector('button.scroll-to-top')
    
    window.addEventListener('scroll', () => {
      let isThereAudio = document.querySelector('.show-player') != null ? true : false
      let showPlayer: any = document.querySelector('.show-player')
      
      window.scrollY > 500 ? (isThereAudio ? scrollToTop.style.bottom = showPlayer.offsetHeight + 10 + 'px' : scrollToTop.style.bottom = '20px') : scrollToTop.style.bottom = '-60px'
    })

    scrollToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior:'smooth'
      })
    })
  }

}
