import { movieCategory } from './../../shared/movieCategory';
import { library } from '@fortawesome/fontawesome-svg-core'
import { MovieService } from './../movie.service';
import { Movie } from './../movie.model';
import { Component, OnInit } from '@angular/core';
import { faList, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faBookmark, faSave, faStar } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private movieService: MovieService) { }
  
  movie: Movie
  id: number;
  year: string;
  
  ngOnInit(): void {
    this.movieService.choosedMovie.subscribe(data => {
      library.add(faList,faHeart,faStar, faSave, faBookmark);

      if (data[0] == 0)  
        {this.movie = data[1]}

      this.year = this.movieService.getYear(this.movie);
    })
  }

}
