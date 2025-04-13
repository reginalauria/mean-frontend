import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Animal {
  _id?: string;
  nombreComun: string;
  nombreCientifico: string;
  descripcion: string;
}

@Injectable({
    providedIn: 'root'
  })
  export class AnimalService {
    private apiUrl = 'https://mean-backend-zpjy.onrender.com/api/animales';

  constructor(private http: HttpClient) {}

  getAnimales(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl);
  }

  addAnimal(animal: Animal): Observable<Animal> {
    return this.http.post<Animal>(this.apiUrl, animal);
  }
}
