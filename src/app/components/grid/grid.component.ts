import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { Image } from '../../models/image.interface';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [CommonModule, MatTableModule, RouterModule],
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  @Input() images: Image[] = [];
  displayedColumns: string[] = ['id', 'author', 'actions'];
}
