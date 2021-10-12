import { Subscription } from 'rxjs';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { Movie } from './../movie.model';
import { Component, OnInit, Output, ViewChild} from '@angular/core';
import { MovieService } from '../movie.service';
import {EventEmitter} from '@angular/core'
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[];
  subscription: Subscription;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    // this.subscription = this.movieService.movieChanges.subscribe(
    //   (movies:Movie[]) => {
    //     this.movies = movies;
    //   }
    // );
    this.movies = this.movieService.getMovies();
  }

}
