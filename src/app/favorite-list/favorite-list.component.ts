import { MovieService } from './../main/movie.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../main/movie.model';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent implements OnInit {
  savedMovies: Movie[];
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }

}
