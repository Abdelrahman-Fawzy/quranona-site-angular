import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { HomeComponent } from './home/home.component';
import { QuranSectionComponent } from './quran-section/quran-section.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HadithSectionComponent } from './hadith-section/hadith-section.component';
import { PrayersSectionComponent } from './prayers-section/prayers-section.component';
import { HadithChapterInfoComponent } from './hadith-chapter-info/hadith-chapter-info.component';
import { HadithInfoComponent } from './hadith-info/hadith-info.component';
import { PaginatorModule } from 'primeng/paginator';
import { InputSwitchModule } from 'primeng/inputswitch';
import { LessonsSectionComponent } from './lessons-section/lessons-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuranSectionComponent,
    HadithSectionComponent,
    PrayersSectionComponent,
    HadithChapterInfoComponent,
    HadithInfoComponent,
    LessonsSectionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    PaginatorModule,
    InputSwitchModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
