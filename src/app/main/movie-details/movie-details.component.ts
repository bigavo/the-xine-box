import { movieCategory } from './../../shared/movieCategory';
import { library } from '@fortawesome/fontawesome-svg-core'
import { MovieService } from './../movie.service';
import { Movie } from './../movie.model';
import { Component, OnInit } from '@angular/core';
import { faList, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faBookmark, faSave, faStar } from '@fortawesome/free-regular-svg-icons';
import { ActivatedRoute, Params } from '@angular/router';
import { keyframes } from '@angular/animations';
import { NgLocalization } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private movieService: MovieService, private route: ActivatedRoute) { }
  
  movie: Movie
  id: number;
  year: string;
  faList = faList;
  faHeart = faHeart;
  faSave = faSave;
  faStar = faStar;
  faBookMark = faBookmark;
  ngOnInit(): void {
    library.add(faList,faHeart,faStar, faSave, faBookmark);
    // this.route.params.subscribe(
    //   (params: Params)=> {
    //     this.id = +params['id'];
    //     this.movie = this.movieService.getMovie(this.id);
    //   }
    // );
    this.movieService.choosedMovie.subscribe(data => {
      if (data[0] == 0)  {
        // {this.movie = data[1]} 
          localStorage.setItem('movie', JSON.stringify(data[1]));
        }
        this.year = this.movieService.getYear(this.movie);
      }
    )
    this.movie = JSON.parse(localStorage.getItem('movie'));
  }
}
