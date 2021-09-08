import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movieChanges = new Subject<Movie[]>();
  choosedMovie = new Subject<Movie>();
  
  constructor() { }

  private movies: Movie[] = [
   
    new Movie('Game of throne',
    'This is first movie',
    'June 20, 2021',
    'https://www.themoviedb.org/t/p/w440_and_h660_face/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg'
    ),
    
    new Movie('Your name',
    'This is an anime movie',
    'June 20, 2021',
    'https://www.themoviedb.org/t/p/w440_and_h660_face/q719jXXEzOoYaps6babgKnONONX.jpg'
    ),
    new Movie('Game of throne',
    'Winter is comming, bro',
    'June 20, 2021',
    'https://www.themoviedb.org/t/p/w440_and_h660_face/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg'
    ),
    
    new Movie('Your name',
    'This is a Japenese movie',
    'June 20, 2021',
    'https://www.themoviedb.org/t/p/w440_and_h660_face/q719jXXEzOoYaps6babgKnONONX.jpg'
    ),
  ];
getMovies() {
    return this.movies.slice();
}

getMovie(index: number) {
    this.choosedMovie.next(this.movies[index]);
}

// addIngredienttoShoppingList(ingredients:Ingredient[]){
//     this.sLService.addIngredients(ingredients);
// }

addMovieToFavoriteList(index: number) {
  this.choosedMovie.next(this.movies[index]);
}

// updateRecipe(index:number, newRecipe: Recipe){
//   this.recipes[index] = newRecipe;
//   this.recipesChanged.next(this.recipes.slice());
// }

// deleteRecipe(index: number){
//   this.recipes.splice(index, 1);
//   this.recipesChanged.next(this.recipes.slice());
// }

// setRecipes(recipes: Recipe[]){
//   this.recipes = recipes;
//   this.recipesChanged.next(this.recipes.slice());
// }


}

