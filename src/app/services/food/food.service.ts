import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id: number): Food{
    return this.getAll().find(food => food.id == id)!;
  }

  getAll():Food[]{
    return [
      {
        id: 1,
        name: 'Baklava',
        price: 12,
        favorite: false,
        stars: 4.5,
        imageUrl: './assets/images/baklava.jpg',
      },

      {
        id: 2,
        name: 'Cheesecake',
        price: 22,
        favorite: true,
        stars: 4.9,
        imageUrl: './assets/images/cheesecake.jpg',
      },

      {
        id: 3,
        name: 'Clatite',
        price: 16,
        favorite: false,
        stars: 4.0,
        imageUrl: './assets/images/clatite.jpg',
      },

      {
        id: 4,
        name: 'Cremsnit',
        price: 20,
        favorite: false,
        stars: 4.6,
        imageUrl: './assets/images/cremsnit.jpg',
      },

      {
        id: 5,
        name: 'Lava Cake',
        price: 25,
        favorite: true,
        stars: 5,
        imageUrl: './assets/images/lava-cake.jpg',
      },

      {
        id: 6,
        name: 'Macarons',
        price: 33,
        favorite: false,
        stars: 3.9,
        imageUrl: './assets/images/macarons.jpg',
      },

      {
        id: 7,
        name: 'Papanasi',
        price: 15,
        favorite: false,
        stars: 4.5,
        imageUrl: './assets/images/papanasi.jpg',
      },

      {
        id: 8,
        name: 'Tiramisu',
        price: 19,
        favorite: true,
        stars: 4.8,
        imageUrl: './assets/images/tiramisu.jpg',
      },
    ]
  }
}
