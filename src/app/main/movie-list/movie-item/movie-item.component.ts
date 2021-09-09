import { library } from '@fortawesome/fontawesome-svg-core';
import { Subject } from 'rxjs';
import { MovieService } from './../../movie.service';
import { Movie } from './../../movie.model';
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { faFilm, faHeart} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  constructor(private movieSevice: MovieService){
    library.add(faFilm,faHeart)
  }
  @Input() movie: Movie;
  @Input() index: number;

  ngOnInit(): void {
  }
  onSeeDetails(){
    this.movieSevice.getMovie(this.index);
  }
  onAddtoFavoriteList(){
    this.movieSevice.addMovieToFavoriteList(this.index);
  }
}
