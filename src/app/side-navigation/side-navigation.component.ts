import { faAward, faFilm, faGlobeAsia, faHeart } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Component, OnInit } from '@angular/core';
import { faHotjar } from '@fortawesome/free-brands-svg-icons';
import { faEye, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.css']
})
export class SideNavigationComponent implements OnInit {
  faHeart = faHeart;
  faEye = faEye;
  faThumbsUp = faThumbsUp;
  faAward = faAward;
  faGlobeAsia = faGlobeAsia;

  constructor() { 
    library.add(faHeart, faEye, faThumbsUp, faAward, faGlobeAsia);
  }

  ngOnInit(): void {
  }

}
