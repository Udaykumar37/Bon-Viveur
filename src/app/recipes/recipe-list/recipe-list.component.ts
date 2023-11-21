import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Test Receipe',
      'Test Receipe Desc',
      'https://www.cookipedia.co.uk/wiki/images/1/15/Boiled_chicken_fillets_recipe.jpg'
    ),
    new Recipe(
      'Test Receipe 2',
      'Test Receipe Desc 2',
      'https://upload.wikimedia.org/wikipedia/commons/0/0d/Indian_Recipes_Gajar_Ka_Halwa_A_Dessert_Recipe_from_Indian_Recipes_By_Sonia_Goyal.jpg'
    ),
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
