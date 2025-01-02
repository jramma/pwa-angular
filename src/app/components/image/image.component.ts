import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ImagesService } from '../../services/images.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Image } from '../../models/image.interface';

@Component({
  imports: [CommonModule, RouterModule],
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'], // Corrige el nombre de la propiedad
})
export class ImageComponent implements OnInit {
  image: Image | undefined; // Inicializa correctamente

  constructor(
    private imagesService: ImagesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');
    if (identifier) {
      console.log('Identifier', identifier);
      this.imagesService.getImageById(identifier).subscribe((image) => {
        if (!image) {
          this.router.navigate(['/']);
        } else {
          this.image = image;
        }
      });
    } else {
      this.router.navigate(['/']);
    }
  }
}
