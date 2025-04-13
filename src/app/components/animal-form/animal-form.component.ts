import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AnimalService } from '../../../services/animal.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-animal-form',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.css']
})
export class AnimalFormComponent {
  nombreComun: string = '';
  nombreCientifico: string = '';
  descripcion: string = '';

  constructor(private animalService: AnimalService) {}

  onSubmit() {
    const nuevoAnimal = {
      nombreComun: this.nombreComun,
      nombreCientifico: this.nombreCientifico,
      descripcion: this.descripcion
    };

    this.animalService.addAnimal(nuevoAnimal).subscribe((animal) => {
      console.log('Animal agregado:', animal);

    }, (error) => {
      console.error('Error al agregar el animal:', error);
    });
  }

}
