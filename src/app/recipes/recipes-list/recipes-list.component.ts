import { Component, EventEmitter,Output } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {
  @Output() recipeWasSelected= new EventEmitter<Recipe>();

 recipes: Recipe[] =[
  new Recipe('name of a recipe','description of the recipe','https://sf2.viepratique.fr/wp-content/uploads/sites/2/2015/03/Tagliatelles-au-bacon-Recette-TagliatelleChampignon.jpg'),
  new Recipe('name of a recipe','description of the recipe','https://sf2.viepratique.fr/wp-content/uploads/sites/2/2015/03/Tagliatelles-au-bacon-Recette-TagliatelleChampignon.jpg'),
 ];


 onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe)
  }

}
