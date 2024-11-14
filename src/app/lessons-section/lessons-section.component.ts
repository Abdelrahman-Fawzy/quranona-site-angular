import { Component } from '@angular/core';

@Component({
  selector: 'app-lessons-section',
  templateUrl: './lessons-section.component.html',
  styleUrls: ['./lessons-section.component.scss']
})
export class LessonsSectionComponent {
  lessons: any[] = [
    {
      lessonNumber: 1,
      lessonName: 'تذوق العبادات',
      url: 'https://www.youtube.com/playlist?list=PL5tyAOHO2ckcm6Coo4MbMPL7BfbBpom9_'
    },
    {
      lessonNumber: 2,
      lessonName: 'التجويد',
      url: 'https://www.youtube.com/playlist?list=PL1i_D1Vw3d5PrPubon8D1z9Cl3Hl8jJsX'
    },
    {
      lessonNumber: 3,
      lessonName: 'العقيدة',
      url: 'https://www.youtube.com/playlist?list=PL1i_D1Vw3d5OOCuGDrC-t3cBIrSmYRAsg'
    },
    {
      lessonNumber: 4,
      lessonName: 'الفقه الميسر',
      url: 'https://www.youtube.com/playlist?list=PL1i_D1Vw3d5P5Q6IHHW22JHrnLCwm60Bn'
    },
    {
      lessonNumber: 5,
      lessonName: 'القضاء و القدر',
      url: 'https://www.youtube.com/playlist?list=PLSUcSqxe9RhyS7_hi2I5D7CH2sACsPjFW'
    },
    {
      lessonNumber: 6,
      lessonName: 'أحسن القصص',
      url: 'https://www.youtube.com/playlist?list=PLCpK4282MCT80bGKKd_Ia8-y9HzKQcyOP'
    },
    {
      lessonNumber: 7,
      lessonName: 'صحة القلب',
      url: 'https://www.youtube.com/playlist?list=PLtYj0Vd8x6cOOoz0EmJCz6BxKqOcZqQMh'
    },
    {
      lessonNumber: 8,
      lessonName: 'السيرة النبوية',
      url: 'https://www.youtube.com/playlist?list=PLSSxr3Rf2_X2oKwiy4UhzIdj4ACzB6dee'
    },
    {
      lessonNumber: 9,
      lessonName: 'أصحاب رسول الله',
      url: 'https://www.youtube.com/playlist?list=PLSSxr3Rf2_X1KkCTVpfCVEVcoY16ACSuf'
    },
  ]
}
