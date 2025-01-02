import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ImagesService } from '../../services/images.service';
@Component({
  selector: 'app-images',
  imports: [CommonModule, RouterModule], // Importa módulos necesarios.
  templateUrl: './images.component.html',
  styleUrl: './images.component.css',
})
export class ImagesComponent implements OnInit {
  constructor(private imagesService: ImagesService) {}
  ngOnInit(): void {
    this.imagesService
      .getAllImages()
      .subscribe((images) => console.log(images));
  }
}
