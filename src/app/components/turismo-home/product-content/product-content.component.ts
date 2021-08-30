import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-product-content',
  templateUrl: './product-content.component.html',
  styleUrls: ['./product-content.component.scss', './../../../app.component.scss']
})
export class ProductContentComponent implements OnInit {

  //options: string[] = ['Argentina', 'España', 'Italia', 'México', 'Puerto Rico'];
  myControl = new FormControl();
  options: string[] = ['Delhi', 'Mumbai', 'Banglore'];
  filteredOptions: Observable<string[]>;

  notPaid: boolean = true;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  navigateToVideo(videoId: number) {
    this.router.navigateByUrl(`/video/${videoId}`);
  }

}
