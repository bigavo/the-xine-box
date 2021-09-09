import { library } from '@fortawesome/fontawesome-svg-core';
import { Component, OnInit } from '@angular/core';
import { faSearch, faFilm, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faHotjar } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  faSearch= faSearch;
  faCaretDown = faCaretDown;
  
  constructor() { 
    library.add(faSearch,faFilm,faCaretDown);
  }

  ngOnInit(): void {
  }

}
