import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-turismo-home',
  templateUrl: './turismo-home.component.html',
  styleUrls: ['./turismo-home.component.scss', './../../app.component.scss']
})
export class TurismoHomeComponent {

  constructor(private router: Router) {
    
  }

  navigateTo(path: string){
    this.router.navigateByUrl(path);
  }

}