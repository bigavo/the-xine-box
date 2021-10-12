import { movieCategory } from './../shared/movieCategory';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movieChanges = new Subject<Movie[]>();
  choosedMovie = new Subject<[movieCategory,Movie]>();
  
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
    new Movie('John Wick',
    241423,
    "Don't shoot my dog",
    'June 20, 2021',
    'https://m.media-amazon.com/images/I/41DpGdw+zkL._AC_.jpg',
    352, 'https://cdna.artstation.com/p/assets/images/images/016/582/904/large/edward-tapia-el-chivo-negro-johnwick-posterautos-rgb.jpg?1552680688'
    ),
    new Movie('Ricky and Morty',
    4234234,
    'This is an anime movie',
    'June 20, 2021',
    'https://www.themoviedb.org/t/p/w440_and_h660_face/8kOWDBK6XlPUzckuHDo3wwVRFwt.jpg',
    4556, 'http://ae01.alicdn.com/kf/Had552b92b8a141ed845c6ec6b6828ebe6.jpg'
    ),
  ];
getMovies() {
    return this.movies.slice();
}

getMovie(index: number) {
    return this.movies[index];
}

// addMovieToFavoriteList(index: number) {
//   this.choosedMovie.next(this.movies[index]);
// }
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

