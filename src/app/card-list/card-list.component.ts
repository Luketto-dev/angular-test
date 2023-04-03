import { Component, OnInit, Input} from '@angular/core';
import { RestaurantServiceService } from '../restaurant-service.service';
import { Restaurant, RestaurantsService } from 'src/models/restaurant.type';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  restaurantsArr : Restaurant [] | undefined = [];
  count : number | undefined = 0
  totalCount : number | undefined = 0;
  take = 0;
  skip = 9;

  constructor(private restaurants: RestaurantServiceService) { }

  ngOnInit(){
    this.restaurants.fetchRestaurants(0,9).subscribe((response: Partial<RestaurantsService>) => {
      this.restaurantsArr = response.array;
      this.count = response.count;
      this.totalCount = response.totalCount;
    })
  }

  
}
