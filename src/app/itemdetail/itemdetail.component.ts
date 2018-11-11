import { Component, OnInit, Input } from '@angular/core';
import {Dish} from '../shared/dish'
import { DishService } from '../services/dish.service';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-itemdetail',
  templateUrl: './itemdetail.component.html',
  styleUrls: ['./itemdetail.component.css']
})
export class ItemdetailComponent implements OnInit {
  item: Dish;

  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    console.log('id-');
    console.log(id);
    this.item = this.dishservice.returnDish(id);
  }

  goBack(): void {
    this.location.back();
  } 
    ReviewCount(count: number) {
      return new Array(count);
    }
          }
