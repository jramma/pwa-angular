import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-image',
  imports: [CommonModule, RouterModule], // Importa módulos necesarios.
  templateUrl: './image.component.html',
  styleUrl: './image.component.css',
})
export class ImageComponent {}
