import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Snitchzel',
      imageUrl: 'https://bit.ly/33dyOF3',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://bit.ly/3uiyikR',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
    }
  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => recipe.id === recipeId)};
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => recipe.id !== recipeId);
  }
}
