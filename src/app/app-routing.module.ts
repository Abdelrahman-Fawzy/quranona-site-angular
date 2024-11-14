import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HadithChapterInfoComponent } from './hadith-chapter-info/hadith-chapter-info.component';
import { HadithInfoComponent } from './hadith-info/hadith-info.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'hadith-chapter-info/:bookSlug',
    component: HadithChapterInfoComponent
  },
  {
    path: 'hadith-info/:bookSlug/:chapter',
    component: HadithInfoComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
