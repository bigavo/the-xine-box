import { MovieService } from './../movie.service';
import { Movie } from './../movie.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private movieService: MovieService) { }
  movie: Movie
  id: number;
  ngOnInit(): void {
    this.movieService.choosedMovie.subscribe(movie => {
      this.movie = movie;
    })
  }

}
