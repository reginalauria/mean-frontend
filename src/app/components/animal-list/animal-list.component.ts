import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AnimalService, Animal } from '../../../services/animal.service'; // <- revisá bien este path

@Component({
  selector: 'app-animal-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
  animales: Animal[] = [];

  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {
    this.animalService.getAnimales().subscribe((data: Animal[]) => {
      this.animales = data;
    });
  }
}

