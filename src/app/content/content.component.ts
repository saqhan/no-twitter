import { Component, OnInit } from '@angular/core';
import { StoreTwitterService } from '../store-twitter.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor( private service: StoreTwitterService ) { }

  getMessages(){
    return this.service.getMessage();
  }

  toggleOnlyFavorite(){
    this.service.toggleOnlyFavorite();
  }
  isOnlyFavorite(){
    return  this.service.onlyFavorite;
  }

  toggleFavorite(id){
    this.service.toggleFavorite(id);
  }



  ngOnInit(): void {
  }

}
