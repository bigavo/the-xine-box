import { Movie } from './../main/movie.model';
import { MovieService } from './../main/movie.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent implements OnInit {
  movies: Movie[] = new Array<Movie>();
  subscription = Subscription;
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
      this.movieService.choosedMovie.subscribe(movie =>{
      this.movies.push(movie);
    })
  }

}
