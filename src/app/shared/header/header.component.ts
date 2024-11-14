import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isHome: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    let links: any = document.querySelectorAll('.links ul li')
    let responsiveLinks: any = document.querySelector('.links.responsive')
    let togglerButton: any = document.querySelector('header.navbar button.toggler')
    let headerCloseButton: any = document.querySelector('header.navbar .links.responsive button.close')

    togglerButton?.addEventListener('click', function () {
      responsiveLinks?.classList.add('active')
    })
    
    headerCloseButton?.addEventListener('click', function () {
      responsiveLinks?.classList.remove('active')
    })
    
    // start header activation and scroll to top
    let header = document.querySelector('header.navbar')
    let scrollToTop: any = document.querySelector('button.scroll-to-top')
    window.addEventListener('scroll', () => {
      if (this.isHome) {
        window.scrollY > 100 ? header?.classList.add('active') : header?.classList.remove('active')
      }
    })
    
    scrollToTop?.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior:'smooth'
      })
    })

    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
      this.onRouteChange();
    });
  }

  goToView(event: any, toHome: boolean = false) {
    let links: any = document.querySelectorAll('.links ul li')
    this.removeActiveFromLinks(links);
    event.target.classList.add('active');
    document.querySelector('.' + event.target.dataset.page)?.scrollIntoView({behavior: 'smooth'})
    let responsiveLinks: any = document.querySelector('.links.responsive')
    responsiveLinks.classList.remove('active')

    if (toHome) {
      this.router.navigateByUrl('/home')
    }
  }

  onRouteChange() {
    
    this.isHome = this.router.url.includes('home')
    let header: any = document.querySelector('header.navbar')
    if (!this.isHome) {
      header.classList.add('active')
    }
    
  }

  removeActiveFromLinks(links: any) {
    links.forEach((link: any) => {
      link.classList.remove('active')
    })
  }

}
