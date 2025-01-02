import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterModule } from '@angular/router'; // Importa RouterModule
import { Image } from '../../models/image.interface';
import { ImagesService } from '../../services/images.service';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatExpansionModule, RouterModule], // Asegúrate de importar RouterModule
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  image: Image | undefined;
  showDetails = false;

  constructor(
    private route: ActivatedRoute,
    private imagesService: ImagesService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.imagesService.getImageById(id).subscribe((image) => {
        this.image = image;
      });
    }
  }

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }
}
