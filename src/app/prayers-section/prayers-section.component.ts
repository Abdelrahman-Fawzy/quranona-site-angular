import { Component, OnInit } from '@angular/core';
import { PrayersService } from '../shared/prayers.service';

@Component({
  selector: 'app-prayers-section',
  templateUrl: './prayers-section.component.html',
  styleUrls: ['./prayers-section.component.scss']
})
export class PrayersSectionComponent implements OnInit {

  prayerSectionTitle: string = '';
  prayers: any;
  Hours24Format: boolean = false;

  constructor(private prayersService: PrayersService) {}

  ngOnInit(): void {
    this.getPrayerDefinitions()
    
    if (!localStorage.getItem('Hours24Format')) {
      localStorage.setItem('Hours24Format', JSON.stringify(false))
    }
    
    this.Hours24Format = JSON.parse(localStorage.getItem('Hours24Format')!) || false
    
  }

  getPrayerDefinitions() {
    let currentDate = new Date()
    let today = `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`

    this.prayersService.getPrayers(today).subscribe((prayers: any) => {
      this.prayerSectionTitle = `مواقيت الصلاة بتاريخ اليوم ${prayers.data.date.hijri.weekday.ar} ${prayers.data.date.hijri.day} ${prayers.data.date.hijri.month.ar} ${prayers.data.date.hijri.year} | ${prayers.data.date.readable}`
      this.prayers = prayers
    })
  }

  transformTo24Hour(time: any) {
    let [hour, minutes] = time.split(':').map(Number)
    
    let period = hour > 12 ? 'PM' : 'AM';
    
    hour = hour > 12 ? hour - 12 : hour

    let transformedTime = [
      hour >= 10 
        ? hour.toString() 
        : hour.toString().padStart(2, '0'), 
      minutes >= 10 
      ? minutes.toString()
      : minutes.toString().padStart(2, '0')
    ]

    return `${transformedTime.join(':')} ${period}`
  }

  changeFormat() {
    localStorage.setItem('Hours24Format', this.Hours24Format.toString())
  }

}
