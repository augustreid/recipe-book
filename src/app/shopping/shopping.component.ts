import { Component, OnInit } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("apples", 5),
    new Ingredient("tomatoes", 10)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
