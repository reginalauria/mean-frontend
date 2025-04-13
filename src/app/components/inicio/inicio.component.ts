import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalFormComponent } from '../animal-form/animal-form.component';
import { AnimalListComponent } from '../animal-list/animal-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AnimalService } from '../../../services/animal.service';


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    AnimalFormComponent,
    AnimalListComponent
  ],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  constructor(private animalService: AnimalService) {}
}

