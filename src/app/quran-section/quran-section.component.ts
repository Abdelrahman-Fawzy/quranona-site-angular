import { Component, OnInit } from '@angular/core';
import { QuranService } from '../shared/quran.service';

@Component({
  selector: 'app-quran-section',
  templateUrl: './quran-section.component.html',
  styleUrls: ['./quran-section.component.scss']
})
export class QuranSectionComponent implements OnInit {

  reciters: any;
  reciterId: any;

  surahs: any;
  ayahs: any

  currentAudio: any = null
  surahUrl: any;
  surahName: any

  constructor(private quranService: QuranService) {}

  ngOnInit(): void {
    if (!localStorage.getItem('reciterId')) localStorage.setItem('reciterId', '123')
    this.reciterId = Number(localStorage.getItem('reciterId'))
    console.log(this.reciterId);
  
    this.mainFunction()
  }

  mainFunction() {
    let surahsBox: any = document.querySelector('.surahs-box')
    let surahsBoxSurah: any = document.querySelector('.surahs-box .surah')
    let ayatBox: any = document.querySelector('.ayat-box');
    let close: any = document.querySelector('.ayat-box button.close');
    let closeResponsive: any = document.querySelector('.ayat-box button.close.responsive');
    let ayatBoxList: any = document.querySelector('.ayat-box ul')
    let ayatBoxListResponsive: any = document.querySelector('.ayat-box ul.responsive')
    const playAllButton: any = document.getElementById('play-all');
    const playAllButtonResponsive: any = document.querySelector('#play-all.responsive');

    let player: any = document.querySelector('.quran-section .current-surah-playing')
    let closeCurrentPlayer: any = document.querySelector('.quran-section .current-surah-playing .actions button.close-player')
    let recitersList: any = document.querySelector('.readers select.form-select')

    this.getAllReciters()
    this.getQuranDefinitions()
  }

  getAllReciters() {
    this.quranService.getAllReciters().subscribe((recitersList: any) => {
      console.log(recitersList);
      this.reciters = recitersList.reciters.filter((reciter: any) => {
        return reciter.id == 123 
              || reciter.id == 112
              || reciter.id == 118
              || reciter.id == 121
              || reciter.id == 102
              || reciter.id == 20
              || reciter.id == 217
              || reciter.id == 259
              || reciter.id == 286
              || reciter.id == 30
              || reciter.id == 5
              || reciter.id == 51
              || reciter.id == 54
              || reciter.id == 76
              || reciter.id == 92
      })

      console.log(this.reciters);
      this.reciters.forEach((reciter: any) => {
        if (reciter.id == localStorage.getItem('reciterId')) {
          recitersList.innerHTML += 
          `<option value="${reciter.id}" selected>${reciter.name}</option>`
        } else {
          recitersList.innerHTML += 
          `<option value="${reciter.id}">${reciter.name}</option>`
        }
      })
    })
  }

  changeReciter(event: any) {
    localStorage.setItem('reciterId', event.target.value)
  }

  removeTashkeel(text: string) {
    // Replace alif with wasla (ٱ) with a regular alif (ا)
    text = text.replace(/\u0671/g, 'ا');
    
    // Remove all Arabic diacritics (covering a broad range of Unicode values)
    return text.replace(/[\u064B-\u065F\u0670\u06D6-\u06ED]/g, "");
  }
  getQuranDefinitions() {
    this.quranService.getQuranDefinitions().subscribe((quranDefinition: any) => {
      console.log(quranDefinition);
      this.surahs = quranDefinition.data.surahs
    })
  }

  openAyatBox(surah: any) {
    let ayatBox: any = document.querySelector('.ayat-box');
    console.log(ayatBox);
    console.log(surah);
    
    ayatBox.classList.add('active')
    document.body.style.overflow = 'hidden';

    this.ayahs = surah.ayahs
  }

  closeAyatBox() {
    let ayatBox: any = document.querySelector('.ayat-box');
    ayatBox.classList.remove('active')
    document.body.style.overflow = '';
    this.currentAudio.pause();
    this.currentAudio = null;
  }

  playAudio(url: any, index: number) {
    let playButtons = document.querySelectorAll('.play-button')
    let playButtonsResponsive = document.querySelectorAll('.play-button.responsive')

    console.log(playButtonsResponsive);
    
    
    if (this.currentAudio && this.currentAudio.src === url) {
      this.currentAudio.pause();
      this.currentAudio = null;
      playButtons[index].children[0].classList.remove('fa-pause')
      playButtons[index].children[0].classList.add('fa-play')

      playButtonsResponsive[index].children[0].classList.remove('fa-pause')
      playButtonsResponsive[index].children[0].classList.add('fa-play')
    } else {
      if (this.currentAudio) {
        this.currentAudio.pause();
        playButtons.forEach(button => {
          button.children[0].classList.remove('fa-pause')
          button.children[0].classList.add('fa-play')
        })
        playButtonsResponsive.forEach(button => {
          button.children[0].classList.remove('fa-pause')
          button.children[0].classList.add('fa-play')
        })

        playButtons[index].children[0].classList.add('fa-play')
        playButtonsResponsive[index].children[0].classList.add('fa-play')
      }
      this.currentAudio = new Audio(url);
      this.currentAudio.play();
      playButtons[index].children[0].classList.remove('fa-play')
      playButtons[index].children[0].classList.add('fa-pause')

      playButtonsResponsive[index].children[0].classList.remove('fa-play')
      playButtonsResponsive[index].children[0].classList.add('fa-pause')
  
      this.currentAudio.addEventListener('ended', () => {
        this.currentAudio = null;
        playButtons[index].children[0].classList.remove('fa-pause')
        playButtons[index].children[0].classList.add('fa-play')

        playButtonsResponsive[index].children[0].classList.remove('fa-pause')
        playButtonsResponsive[index].children[0].classList.add('fa-play')
      })
    }
  }

  getSurahs(surahIndex: any, surahName: any) {
    let reciterId = Number(localStorage.getItem('reciterId')) || 123
    let player: any = document.querySelector('.quran-section .current-surah-playing')
    let audioPlayerBox: any = document.querySelector('.audio')
    console.log(reciterId);
    this.surahName = surahName
    this.quranService.getSurahs(reciterId).subscribe((surah: any) => {
      console.log(surah);
      
      let transformedSurahIndex
      if (surahIndex < 10) transformedSurahIndex = '00' + (surahIndex)
      else if (surahIndex == 10) transformedSurahIndex = '0' + (surahIndex)
      else if (surahIndex > 10 && surahIndex < 100) transformedSurahIndex = '0' + (surahIndex)
      else if (surahIndex >= 100) transformedSurahIndex = (surahIndex);
      this.surahUrl = surah.reciters[0].moshaf[0].server+`/${transformedSurahIndex}.mp3`;
      player.classList.add('show-player')
      audioPlayerBox.innerHTML =
      `
        <audio controls="" autoplay>
          <source src="${this.surahUrl}" type="audio/mpeg">
        </audio>
      `
      console.log(this.surahUrl);
      

      let audioPlayer: any = document.querySelector('.audio audio')
      audioPlayer.addEventListener('ended', function () {
        audioPlayer.pause();
      })
    })
  }

  closePlayer() {
    let player: any = document.querySelector('.quran-section .current-surah-playing')
    let audioPlayer: any = document.querySelector('.audio audio')
    player.classList.remove('show-player')
    this.surahUrl = null
    audioPlayer.pause()
  }

  filterSurahs(event: any) {
    console.log(this.surahs);
    let surahsBox: any = document.querySelector('.surahs-box')
    for (let index = 0; index < this.surahs.length; index++) {
      let arabicWord = this.removeTashkeel(this.surahs[index].name)
      let englishWord = this.surahs[index].englishName.toLowerCase()
      if (arabicWord.indexOf(event.target.value) > -1 || englishWord.indexOf(event.target.value) > -1) {
        surahsBox.children[index].style.display = '';
      } else {
        surahsBox.children[index].style.display = 'none';
      }
    }
  }
}
