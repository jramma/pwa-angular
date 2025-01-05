import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { ListComponent } from './components/list/list.component';
import { CommonModule } from '@angular/common';
export const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'image/:id', component: DetailComponent },
  { path: '**', redirectTo: '' },
];
@NgModule({

  imports: [CommonModule, RouterModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
