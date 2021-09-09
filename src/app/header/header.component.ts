import { library } from '@fortawesome/fontawesome-svg-core';
import { Component, OnInit } from '@angular/core';
import { faSearch, faFilm } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  faSearch= faSearch;
  constructor() { 
    library.add(faSearch,faFilm);
  }

  ngOnInit(): void {
  }

}
