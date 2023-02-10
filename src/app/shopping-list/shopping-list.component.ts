import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
 ingredients:Ingredient[]=[
  new Ingredient('pepper',2000),
  new Ingredient('tomatoes',500),
 ];


 onIngredientAdded(ingredient:Ingredient){
  this.ingredients.push(ingredient);

 }
}
