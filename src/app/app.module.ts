import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
//import {MAT_DATE_LOCALE} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from './material.module';
import { TurismoHomeComponent } from './components/turismo-home/turismo-home.component';
import { VideoContentComponent } from './components/turismo-home/video-content/video-content.component';
import { ProductContentComponent } from "./components/turismo-home/product-content/product-content.component";
import { InteractionComponent } from "./components/turismo-home/video-content/interaction/interaction.component";
//import { AlertModule} from 'ngx-bootstrap/alert';
//import {Dialog} from './modal/dialog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { InteractionDosComponent } from './components/turismo-home/video-content/interaction-dos/interaction-dos.component';
import { VideoContentDosComponent } from './components/turismo-home/video-content-dos/video-content-dos.component';

@NgModule({
  declarations: [
    AppComponent,
    TurismoHomeComponent,
    VideoContentComponent,
    ProductContentComponent,
    InteractionComponent,
    InteractionDosComponent,
    VideoContentDosComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    AppRoutingModule,
    NgbModule,
    //AlertModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: []//Dialog,
})
export class AppModule { }
