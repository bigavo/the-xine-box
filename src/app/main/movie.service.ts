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
    12345,
    'This is first movie',
    'June 20, 2021',
    'https://www.themoviedb.org/t/p/w440_and_h660_face/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg',
    789, 'https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/4909/474909-h',
    ),
    
    new Movie('Your name',
    23645,
    'This is an anime movie',
    'June 20, 2021',
    'https://www.themoviedb.org/t/p/w440_and_h660_face/q719jXXEzOoYaps6babgKnONONX.jpg',
    4556, 'https://images.cdn.yle.fi/image/upload/w_1024,dpr_1.0,fl_lossy,f_auto,q_auto,d_yle-areena.jpg/v1627592392/13-1-4196183-1578477372879.jpg'
    ),
    new Movie('Game of throne',
    241423,
    'Winter is comming, bro',
    'June 20, 2021',
    'https://www.themoviedb.org/t/p/w440_and_h660_face/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg',
    352, 'https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/4909/474909-h'
    ),
    new Movie('Your name',
    4234234,
    'This is an anime movie',
    'June 20, 2021',
    'https://www.themoviedb.org/t/p/w440_and_h660_face/q719jXXEzOoYaps6babgKnONONX.jpg',
    4556, 'https://images.cdn.yle.fi/image/upload/w_1024,dpr_1.0,fl_lossy,f_auto,q_auto,d_yle-areena.jpg/v1627592392/13-1-4196183-1578477372879.jpg'
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
getYear(movie: Movie){
  return movie.premieredTime.substring(0,4);
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

