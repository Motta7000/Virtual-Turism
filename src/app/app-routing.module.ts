import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TurismoHomeComponent} from "./components/turismo-home/turismo-home.component";
import {VideoContentComponent} from "./components/turismo-home/video-content/video-content.component";
import {ProductContentComponent} from "./components/turismo-home/product-content/product-content.component";
import {InteractionDosComponent} from "./components/turismo-home/video-content/interaction-dos/interaction-dos.component"
import {VideoContentDosComponent} from "./components/turismo-home/video-content-dos/video-content-dos.component"

const routes: Routes = [
  {
    path: 'home',
    component: TurismoHomeComponent
  },
  {
    path: 'video/:id',
    component: VideoContentComponent
  },
  {
    path: 'tours',
    component: ProductContentComponent
  },
  {
    path: 'interactivo/:id',
    component:InteractionDosComponent
  },
  {
    path:'videos/2',
    component:VideoContentDosComponent
  },
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
