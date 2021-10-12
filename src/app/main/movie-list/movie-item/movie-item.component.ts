import { MovieService } from './../../movie.service';
import { movieCategory } from './../../../shared/movieCategory';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Subject } from 'rxjs';
import { Movie } from './../../movie.model';
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { faEllipsisH, faFilm, faHeart} from '@fortawesome/free-solid-svg-icons';
import {Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movie: Movie;


  // constructor(){}
  constructor(private movieService: MovieService){
    library.add(faFilm,faHeart, faEllipsisH)
  }
  faEllipsisH = faEllipsisH;
  faHeart = faHeart;
  ngOnInit(): void {
  }

  onSeeDetails(){
   this.movieService.choosedMovie.next([movieCategory.All, this.movie]);
  }
  onAddtoFavoriteList(){
    this.movieService.choosedMovie.next([movieCategory.Popular, this.movie]);
  }
}
