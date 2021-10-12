import { faList, faHeart, faSave,faStar, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { Movie } from '../main/movie.model';
import { MovieService } from '../main/movie.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { movieCategory } from '../shared/movieCategory';
import { library} from '@fortawesome/fontawesome-svg-core' 

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent implements OnInit {
  movies: Movie[] = new Array<Movie>();
  subscription = Subscription;
  
  constructor(private movieService: MovieService) { }
  faList = faList;
  faHeart = faHeart;
  faSave = faSave;
  faStar = faStar;
  faBookMark = faBookmark;
  ngOnInit(): void {
      library.add(faList,faHeart,faStar, faSave, faBookmark);
      this.movieService.choosedMovie.subscribe(data => {
      if(data[0]==2)
      {this.movies.push(data[1]);}
    })
  }

}
