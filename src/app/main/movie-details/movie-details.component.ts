import { library } from '@fortawesome/fontawesome-svg-core';
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
  faList = faList;
  faHeart = faHeart;
  faSave = faSave;
  faStar = faStar;
  faBookMark = faBookmark;
  ngOnInit(): void {
    this.movieService.choosedMovie.subscribe(movie => {
      library.add(faList,faHeart,faStar, faSave, faBookmark);
      this.movie = movie;
      this.year = this.movieService.getYear(this.movie);
    })
  }

}
