import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageComponent } from './components/image/image.component';
import { ImagesComponent } from './components/images/images.component';
import { CommonModule } from '@angular/common';
export const routes: Routes = [
  { path: '', component: ImagesComponent },
  { path: 'image/:id', component: ImageComponent },
  { path: '**', redirectTo: '' },
];
@NgModule({

  imports: [CommonModule, RouterModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
