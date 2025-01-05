import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ImagesService } from '../../services/images.service';
import { Image } from '../../models/image.interface';
import { CardComponent } from '../card/card.component';
import { GridComponent } from '../grid/grid.component';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule, MatProgressSpinnerModule, CardComponent, GridComponent],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ListComponent implements OnInit {

  images: Image[] = [];
  viewMode = 'cards';
  isLoading = true;

  constructor(private imagesService: ImagesService) {}

  ngOnInit(): void {
    this.imagesService
      .getAllImages()
      .subscribe((images) => {
        this.images = images;
        this.isLoading = false;
      });
  }
}
