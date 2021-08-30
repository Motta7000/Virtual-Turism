import { Injectable } from '@angular/core';
import { updateLocale } from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //DEFAULT TOUR: (Puerto Madero) -> (Rosedal) -> (Obelisco)
  moment_0 = {uuid_video: 2000, order: 0, tour: 10001, url: 'https://www.youtube.com/embed/p7FHsHtKvT0', start: 0, end: 10, finished: false};
  moment_1 = {uuid_video: 3000, order: 0, tour: 10001, url: 'https://www.youtube.com/embed/aB8DnqQWFN0', start: 0, end: 10, finished: false};
  moment_2 = {uuid_video: 4000, order: 0, tour: 10001, url: 'https://www.youtube.com/embed/a8eWtSCIkvc', start: 0, end: 10, finished: false};
  
  suggestion = {uuid_video: 1111,order: 0, tour:10005, url: 'https://www.youtube.com/embed/eQTPCo-2vss',start: 60,end: 100,finished: true};

  desc_pm = 'Puerto Madero es uno de los cuarenta y ocho barrios en los que se divide la Ciudad Autónoma de Buenos Aires (CABA), capital de la República Argentina. Su ubicación cercana a la zona este de la ciudad, lo extenso de su área y su vista al río hacen que este distrito sea uno de los más valorados de Buenos Aires.';
  desc_r = 'El Rosedal, un punto icónico de la Ciudad de Buenos Aires que alberga 93 especies diferentes de rosas que crecen dentro de un jardín diseñado por el paisajista y agrónomo Benito Carrasco.';
  dec_o = 'El Obelisco de Buenos Aires es un monumento histórico considerado un ícono de la Ciudad Autónoma de Buenos Aires, Argentina, construido en 1936 con motivo del cuarto centenario de la llamada primera fundación de Buenos Aires.'

  desc_pan_1 = 'Recorrido por Plaza de Mayo';
  desc_pan_2 = 'Recorrido por Ateneo';
  desc_pan_3 = 'Recorrido por el cementerio de Recoleta';

  options = [
    {uuid_video: 2000, id: 0,name: 'PUERTO MADERO',descripcion: this.desc_pm,icon: 'sentiment_very_satisfied',next: 2000,
      img: 'puerto_madero', top: '430px', left: '210px'},
    {uuid_video: 3000, id: 1,name: 'ROSEDAL',descripcion: this.desc_r,icon: 'sentiment_very_satisfied',next: 2001,
      img: 'rosedal', top: '-40px', left: '-230px'},
    {uuid_video: 4000, id: 2,name: 'OBELISCO',descripcion: this.dec_o,icon: 'sentiment_very_satisfied',next: 2002,
      img: 'obelisco', top: '200px', left: '35px'}
  ];

  // Puntos panoramicos fijos
  points = [
    {uuid_video: 2010, id: 0,name: 'PUNTO INMERSIVO',descripcion: this.desc_pan_2,next: 2000,
      img: 'point', top: '400px', left: '-55px', url: 'https://kuula.co/share/collection/7YBvj'},
    {uuid_video: 2011, id: 1,name: 'PUNTO INMERSIVO',descripcion: this.desc_pan_3,next: 2001,
      img: 'point', top: '290px', left: '-50px', url: 'https://kuula.co/share/collection/7YSXK'},
    {uuid_video: 2020, id: 2,name: 'PUNTO INMERSIVO',descripcion: this.desc_pan_1,next: 2002,
      img: 'point', top: '415px', left: '120px', url: 'https://kuula.co/share/collection/7YSXg'}
  ];

  //Options in TOUR
  options_0 = [
    {uuid_video: 2000, id: 10,name: 'ROSEDAL',descripcion: this.desc_r,icon: 'sentiment_very_satisfied',next: 2001,
      img: 'rosedal', top: '10px', left: '-232px'},
    {uuid_video: 2000, id: 11,name: 'OBELISCO',descripcion: this.dec_o,icon: 'sentiment_very_satisfied',next: 2002,
      img: 'obelisco', top: '260px', left: '40px'}
  ];
  options_1 = [
    {uuid_video: 3000, id: 21,name: 'PUERTO MADERO',descripcion: this.desc_pm,icon:'sentiment_very_satisfied',next: 3001,
      img: 'puerto_madero', top: '420px', left: '350px'},//no hay siguiente video que cargar!!!
    {uuid_video: 3000, id: 22,name: 'OBELISCO',descripcion: this.dec_o,icon:'sentiment_very_satisfied',next: 3002,
      img: 'obelisco', top: '240px', left: '280px'}
  ];
  options_2 = [
    {uuid_video: 4000, id: 31,name: 'PUERTO MADERO',descripcion: this.desc_pm,icon:'sentiment_very_satisfied',next: 4001,
      img: 'puerto_madero', top: '420px', left: '350px'},//no hay siguiente video que cargar!!!
    {uuid_video: 4000, id: 32,name: 'ROSEDAL',descripcion: this.desc_r,icon:'sentiment_very_satisfied',next: 4002,
      img: 'rosedal', top: '180px', left: '140px'}
  ];

  //Last alternative
  options_00 = [{uuid_video: 4000, id: 21,name: 'OBELISCO',descripcion: this.dec_o,icon:'sentiment_very_satisfied',next: null,
    img: 'obelisco', top: '315px', left: '40px'}];
  options_01 = [{uuid_video: 3000, id: 21,name: 'ROSEDAL',descripcion: this.desc_r,icon:'sentiment_very_satisfied',next: null,
    img: 'rosedal', top: '240px', left: '140px'}];

  options_10 = [{uuid_video: 4000, id: 21,name: 'OBELISCO',descripcion: this.dec_o,icon:'sentiment_very_satisfied',next: null,
    img: 'obelisco', top: '315px', left: '40px'}];
  options_11 = [{uuid_video: 2000, id: 21,name: 'PUERTO MADERO',descripcion: this.desc_pm,icon:'sentiment_very_satisfied',next: null,
    img: 'puerto_madero', top: '500px', left: '350px'}];

  options_20 = [{uuid_video: 3000, id: 21,name: 'ROSEDAL',descripcion: this.desc_r,icon:'sentiment_very_satisfied',next: null,
    img: 'rosedal', top: '240px', left: '140px'}];
  options_21 = [{uuid_video: 2000, id: 21,name: 'PUERTO MADERO',descripcion: this.desc_pm,icon:'sentiment_very_satisfied',next: null,
    img: 'puerto_madero', top: '500px', left: '350px'}];

  options_rdm = [
    {id: 51,name: 'Y',descripcion: 'Me enamoré!!!',icon:'sentiment_very_satisfied',uuid_video: 1111,next: null},//no hay siguiente video que cargar!!!
    {id: 52,name: 'N',descripcion: 'No me gusta esto',icon:'sentiment_dissatisfied',uuid_video: 1111,next: null},//next = null
    {id: 53,name: 'N/A',descripcion: 'Saca esto :C', icon:'sentiment_neutral',uuid_video: 1111,next: null}
  ];

  constructor() { }

  public getOptionsByUUIDTour(uuid_tour: number):Array<{}>{
    return this.options;//ID by DEFAULT = 10001
  }

  public getPanoramicPoints():Array<{}>{
    return this.points;
  }

  public getOptionsByUUIDVideo(uuid_video: number, order: number):Array<{}>{
    if(uuid_video == 2000){
      if(order === 0)
        return this.options_0;
      else if(order === 1)
        return this.options_1;
    }
    if(uuid_video == 3000){
      if(order === 0)
        return this.options_0;
      else
        return this.options_2;
    }
    if(uuid_video == 4000){
      if(order === 0)
        return this.options_1;
      else
        return this.options_2;
    }

    if(uuid_video == 2001){
      if(order === 1)
        return this.options_00;
      else if(order === 1)
        return this.options_01;
    }
    if(uuid_video == 3001){
      if(order === 1)
        return this.options_10;
      else if(order === 1)
        return this.options_11;
    }
    if(uuid_video == 4001){
      if(order === 1)
        return this.options_20;
      else if(order === 1)
        return this.options_21;
    }

    return [];//this.options_rdm;
  }

  public getFinalOptionsByUUIDVideo(uuid_video: number, order: number):Array<{}>{
    
    if(uuid_video == 2000 && order == 0)
        return this.options_01;
    if(uuid_video == 2000 && order == 1)
        return this.options_01;
    
    if(uuid_video == 3000 && order == 0)
        return this.options_10;
    if(uuid_video == 3000 && order == 1)
        return this.options_11;
    
    if(uuid_video == 4000 && order == 0)
        return this.options_20;
    if(uuid_video == 4000 && order == 1)
        return this.options_00;
    
    return [];//this.options_rdm; // Dar reseña
  }

  public getRandomSuggestion(){
    return this.suggestion;
  }

  //0 : VATICANO -> https://youtu.be/fmPawUSRt7Q
  //1 : COLISEO -> https://youtu.be/HPTwzVShJSE
  //2 : Mercado de Trajano -> https://youtu.be/bCs1TpC3rKU

  public getMomentByUUIDVideo(uuid_video: number, order: number):any{
    if(uuid_video == 2000 && order == 0)
        return this.moment_0;
    if(uuid_video == 2000 && order == 1)
        return this.moment_1;
    if(uuid_video == 2000 && order == 2)
        return this.moment_2;
      
        if(uuid_video == 2001 && order == 1)
          return this.moment_2;
        if(uuid_video == 2002 && order == 1)
          return this.moment_1;
    
    if(uuid_video == 3000 && order == 0)
        return this.moment_0;
    if(uuid_video == 3000 && order == 1)
        return this.moment_2;
    if(uuid_video == 3000 && order == 2)
        return this.moment_1;
      
        if(uuid_video == 3001 && order == 1)
          return this.moment_1;
        if(uuid_video == 3002 && order == 1)
          return this.moment_2;
    
    if(uuid_video == 4000 && order == 0)
        return this.moment_0;
    if(uuid_video == 4000 && order == 1)
        return this.moment_1;
    if(uuid_video == 4000 && order == 2)
        return this.moment_2;
      
        if(uuid_video == 4001 && order == 1)
          return this.moment_1;
        if(uuid_video == 4002 && order == 1)
          return this.moment_2;
  }

  public getUserInfo(id: string):{}{
    return {name: 'Andrea', surname: 'Rojas', email: 'andrrojas@uade.edu.ar'};
  }

}