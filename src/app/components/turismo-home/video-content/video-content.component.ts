import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-video-content',
  templateUrl: './video-content.component.html',
  styleUrls: ['./video-content.component.scss', './../../../app.component.scss', './../../../theme/vc-theme.min.css']
})
export class VideoContentComponent implements OnInit, OnDestroy {

  viewReview: boolean = false;
  @ViewChild('tabs', {static: false}) tabs;
  selectedIndex: number;

  notPaid: boolean = true;
  popupTitle: string = '';
  label: string = '';

  private paramsSubscription: Subscription;
  private queryParamsSubscription: Subscription;

  constructor(private route: ActivatedRoute) {
    this.paramsSubscription = new Subscription();
    this.queryParamsSubscription = new Subscription();
  }

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe((params) => {
        if (params['id']) {
            this.loadVideo(params['id']);
        }
    });
    this.queryParamsSubscription = this.route.queryParams.subscribe((params) => {
        if (params['tab']) {
            this.viewReview = params['tab'] === 'review';
        }
    });

    
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
    this.queryParamsSubscription.unsubscribe();
  }

  onChange(index: number) {
      this.selectedIndex = index;
  }

  private loadVideo(id: string) {
  }

  clickBuyTour(){
    this.notPaid = false;
  }
  setPopupTitle(value: string, value2: string){
    this.popupTitle = value;
    this.label = value2;
  }

  navigateToSection(selector: string){
    let x = document.querySelector("#" + selector);
    if (x){
        x.scrollIntoView();
    }
  }

}