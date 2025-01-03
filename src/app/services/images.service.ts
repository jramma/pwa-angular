import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Image } from '../models/image.interface';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  constructor(private http: HttpClient) {}

  getAllImages(): Observable<Image[]> {
    return of(
      Array.from({ length: 10 }, (_, i) => ({
        id: `${i}`,
        author: `Cat ${i}`,
        width: 400,
        height: 400,
        url: `https://cataas.com/cat?${i}`,
        download_url: `https://cataas.com/cat?${i}`,
      }))
    );
  }

  getImageById(id: string): Observable<Image> {
    return of({
      id,
      author: `Cat ${id}`,
      width: 400,
      height: 400,
      url: `https://cataas.com/cat?${id}`,
      download_url: `https://cataas.com/cat?${id}`,
    });
  }

}
