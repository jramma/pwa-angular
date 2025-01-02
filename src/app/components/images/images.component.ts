import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table'; // Importa MatTableModule
import { ImagesService } from '../../services/images.service';
import { Image } from '../../models/image.interface';

@Component({
  selector: 'app-images',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule, MatTableModule], // Asegúrate de importar MatTableModule
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css'],
})
export class ImagesComponent implements OnInit {

  images: Image[] = [];
  viewMode = 'cards';
  displayedColumns: string[] = ['id', 'author', 'actions'];

  constructor(private imagesService: ImagesService) {}

  ngOnInit(): void {
    this.imagesService
      .getAllImages()
      .subscribe((images) => this.images = images);
  }
}
