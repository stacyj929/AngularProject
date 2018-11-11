import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHItems } from '../shared/DISHItems';

@Injectable()
export class DishService {

  constructor() { }

  returnDishes(): Dish[] {
    return DISHItems;
  }

  returnDish(id: number): Dish {
    return DISHItems.filter((dish) => (dish.id === id))[0];
      }        

         }
