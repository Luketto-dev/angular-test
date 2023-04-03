import { Component, Input, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card'
import { Restaurant } from 'src/models/restaurant.type';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input () restaurants : Restaurant [] | undefined = [];

  constructor() {
    
  }

  ngOnInit(): void{
    
    
  }
}
