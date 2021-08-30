import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { interval } from 'rxjs';
import { DataService } from '../../../../app-service';
import { NavigationEnd, Router } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-interaction-dos',
  templateUrl: './interaction-dos.component.html',
  styleUrls: ['./interaction-dos.component.scss', './../../../../app.component.scss'],
  animations: [
    trigger('expand', [
      state('in', style({ height: '*' })),
      transition(':leave', [
        style({ height: '*' }),
        animate(250, style({ height: 0 }))
      ]), 
      transition(':enter', [
        style({ height: 0 }),
        animate(250, style({ height: '*' }))
      ])
    ])
  ]
})
export class InteractionDosComponent implements OnInit {

  URL: string = '';
  PARAMS : string = '?mute=1&autoplay=1&enablejsapi=1&';
  safeSrc: SafeResourceUrl;

  KUULA_PARAM : string = '?fs=1&vr=0&sd=1&thumbs=1&info=1&logo=1';
  kuulaSafeSrc: SafeResourceUrl;

  showBtn: boolean;
  continueVideo: boolean = false;
  reproductorVideo: boolean = false;

  title = 'Demo';

  titlePopup = 'UNDEFINED';
  descriptionPopup = "...";
  expanded = false;

  kuulaTitle = 'UNDEFINED';

  user: any;
  welcome: boolean = false;

  options: any;
  points: any;
  moment: any;
  order: number = -1;

  DELAY: number = 6;
  UUID_video: number = 0;
  tour_finished: boolean = false;
  redirectHome: boolean = false;

  constructor(private sanitizer: DomSanitizer, public dataService: DataService, 
    private router: Router, public dialog: MatDialog) {

    /*this.router.events.pipe(filter((route: any) => route instanceof NavigationEnd), pairwise()).subscribe((e: any) => {
        sessionStorage.setItem('_previousUrl', e[0].urlAfterRedirects);
    });*/
    this.showBtn = true;

    //TODO: add method for load tours on demand when "tour_finished" is FALSE adn set params: moment and options
    //this.moment = this.dataService.getMomentByUUIDVideo(2000, this.order);
    //this.order = this.moment.order;
    //this.options = this.dataService.getOptionsByUUIDVideo(this.moment.uuid_video);
    this.options = this.dataService.getOptionsByUUIDTour(10001);
    this.points = this.dataService.getPanoramicPoints();

    //this.UUID_video = this.moment.uuid_video;
    //this.URL = this.moment.url;
    this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl('');
    this.kuulaSafeSrc = this.sanitizer.bypassSecurityTrustResourceUrl('');

    //TOUR: VATICANO > COLISEO > TRAJANO + final review!

    /*this.podCommonService.showMessageDialog({
      showTitle: false,
      yesCallback: () => self._deleteAgreement(file.id),
      messages: [`${legend}`]
    });*/
  }

  ngOnInit(): void {

    this.welcome = true;
    this.user = this.dataService.getUserInfo('andrrojas');//TODO: mocked
    
    interval(10000).subscribe(x => {
      this.doRefresh();
    });
    /*if (!this.moment.finished){
        if(this.moment.start === 0){
          this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(this.URL + this.PARAMS + "&end=" + this.moment.end);
        }else{
          this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(this.URL + this.PARAMS + "&start=" + this.moment.start + "&end=" + this.moment.end);
        }
        setTimeout(() => { this.showBtn = true; }, ((this.moment.end)*1000));//1 seconds equals to 1000 milliseconds
    }*/
  }

  doRefresh(){
    this.welcome = false; 
  }

  onSelect(option: any){

    if(this.tour_finished){
      this.tourFinished();
    }else{
      this.options.forEach((opt: any) => {
        if(option.id === opt.id){
          this.order++;
  
          if(this.order < 2 && option.next != null){
            const entity = this.dataService.getMomentByUUIDVideo(option.next, this.order);
            this.UUID_video = entity.uuid_video;
            this.URL = entity.url;
            this.showBtn = false;
            this.continueVideo = false;
            this.getNextMoment();
          }else if(opt.next === null && this.order > 3){ // El siguiente camino es el último!
            this.tourFinished();
          }else{
            this.getNextMoment();
          }  
          /*else if(this.UUID_video !== opt.next){ // el TOUR se interrumpió por otro LINK (redirect)
            const entity = this.dataService.getRandomSuggestion();
            this.UUID_video = entity.uuid_video;
            this.URL = entity.url;
            this.order = 0;
            this.getNextMoment();
          }else{ // el TOUR continua a la siguiente sección
            this.tour_finished = false;
            this.order++;
            this.URL = this.dataService.getMomentByUUIDVideo(option.next, this.order).uuid_video;
            this.getNextMoment();
          }*/
        }
      });
    }
  }

  private getNextMoment(){
    this.showBtn = false;
    this.continueVideo = false;
    if(this.order < 1){
      this.moment = this.dataService.getMomentByUUIDVideo(this.UUID_video, this.order);
      this.options = this.dataService.getOptionsByUUIDVideo(this.moment.uuid_video, this.order);
      this.reproductorVideo = true;
      this.URL = this.moment.url;

      var tmp: Array<{}> = this.options.filter( (opt:any) => { return opt.next === null});
      this.tour_finished = (tmp.length > 0 ? true : false);

      if (!this.moment.finished || !this.tour_finished){

        this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.URL + this.PARAMS + "&start=" + this.moment.start + "&end=" + this.moment.end);

        setTimeout(() => { this.showBtn = true; this.continueVideo = true; }, ((this.moment.end+this.DELAY)*10));//1 second equals to 1000 milliseconds

      }
    }else{
      if(this.order === 2){
        this.moment = this.dataService.getMomentByUUIDVideo(this.UUID_video, this.order);
        this.options = [];
        const options = this.dataService.getFinalOptionsByUUIDVideo(this.UUID_video, this.order);

        var tmp: Array<{}> = options.filter( (opt:any) => { return opt.next === null});
        this.tour_finished = (tmp.length === 3 ? true : false);

        this.reproductorVideo = true;
        this.URL = this.moment.url;
        this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.URL + this.PARAMS + "&start=" + this.moment.start + "&end=" + this.moment.end);

        setTimeout(() => { this.showBtn = false; this.continueVideo = true; this.redirectHome = true; this.expanded = true }, ((this.moment.end+this.DELAY)*10));//1 second equals to 1000 milliseconds
      }else{

        this.moment = this.dataService.getMomentByUUIDVideo(this.UUID_video, this.order);
        //this.showBtn = false;
        this.options = this.dataService.getFinalOptionsByUUIDVideo(this.UUID_video, this.order);
        this.reproductorVideo = true;
        this.URL = this.moment.url;
        this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.URL + this.PARAMS + "&start=" + this.moment.start + "&end=" + this.moment.end);
        setTimeout(() => { this.showBtn = true; this.continueVideo = true; }, ((this.moment.end+this.DELAY)*10));//1 second equals to 1000 milliseconds

      }
    }
    //this.options.map( (opt:any) => ({...opt, descripcion: opt.descripcion.toUpperCase()}));
  }

  private tourFinished(){
    this.reproductorVideo = false;
    this.showBtn = false;
    this.continueVideo = false;
    this.redirectHome = true;
  }

  navigateToVideo(videoId: number) {
    this.router.navigateByUrl(`/video/${videoId}`);
  }

  setParamsToModal(option){
    this.titlePopup = option.name;
    this.descriptionPopup = option.descripcion;
  }

  setParamsToKuulaModal(point){
    this.kuulaTitle = point.descripcion;
    this.kuulaSafeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(point.url + this.KUULA_PARAM);
  }

  showFullVideo(){
    this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.URL + this.PARAMS + "&start=" + this.moment.end);
  }
}
