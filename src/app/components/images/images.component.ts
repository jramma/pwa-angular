import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ImagesService } from '../../services/images.service';
import { Image } from '../../models/image.interface';
@Component({
  selector: 'app-images',
  imports: [CommonModule, RouterModule], // Importa módulos necesarios.
  templateUrl: './images.component.html',
  styleUrl: './images.component.css',
})
export class ImagesComponent implements OnInit {

  images: Image[] = [];


  constructor(private imagesService: ImagesService) {}
  ngOnInit(): void {
    this.imagesService
      .getAllImages()
      .subscribe((images) => this.images = images);
  }
}
