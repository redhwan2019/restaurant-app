import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Restaurant } from '../../interfaces/restaurant';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css'],
})
export class AddRestaurantComponent implements OnInit {
  @Output() onAddRestaurant: EventEmitter<Restaurant> = new EventEmitter();
  @Input() types: string[];
  restaurantImageFile: File;
  restaurantName: string;
  restaurantCoordinate: string;
  restaurantType: string = 'Fast Food';
  constructor() {}

  @ViewChild('imageInput')
  imageInputRef: ElementRef;

  ngOnInit(): void {}
  onFileSelect(event: any) {
    console.log(event.target.files[0]);
    this.restaurantImageFile = event.target.files[0];
  }
  onSubmit() {
    if (!this.restaurantName) {
      alert('Please enter a restaurant name!');
      return;
    }
    if (!this.restaurantCoordinate) {
      alert('Please enter a restaurant coordinates!');
      return;
    }
    try {
      this.restaurantCoordinate.split(',');
    } catch (error) {
      alert('Please enter a valid coordinates. eg: 123,123')
    }
    const newRestaurant = {
      name: this.restaurantName,
      coordinate: this.restaurantCoordinate.split(',').map((c) => Number(c)),
      type: this.restaurantType,
      image: this.restaurantImageFile,
    };
    console.log(newRestaurant);

    // emit
    this.onAddRestaurant.emit(newRestaurant);

    this.restaurantName = '';
    this.restaurantCoordinate = '';
    this.imageInputRef.nativeElement.value = '';
  }
}
