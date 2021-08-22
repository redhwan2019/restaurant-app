import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  // restaurantName: string;
  // restaurantCoordinate: string;
  // restaurantType: string = 'Fast Food';
  constructor() {}
  addRestaurantForm = new FormGroup({
    restaurantName: new FormControl('', [Validators.required]),
    restaurantCoordinate: new FormControl('', [
      Validators.required,
      Validators.pattern('-?\\d+(\\.\\d+)?,\\s*-?\\d+(\\.\\d+)?'),
    ]),
    restaurantType: new FormControl('Fast Food', [Validators.required]),
    restaurantImage: new FormControl('', [Validators.required]),
  });

  @ViewChild('imageInput')
  imageInputRef: ElementRef;

  ngOnInit(): void {}
  onFileSelect(event: any) {
    console.log(event.target.files[0]);
    this.restaurantImageFile = event.target.files[0];
  }
  onSubmit() {
    if (this.addRestaurantForm.valid) {
      console.log('this.addRestaurantForm.valid', this.addRestaurantForm.valid);

      const newRestaurant = {
        name: this.addRestaurantForm.get('restaurantName')?.value,
        coordinate:
          this.addRestaurantForm
            .get('restaurantCoordinate')
            ?.value.split(',')
            .map((c: string) => Number(c)) ?? [],
        type: this.addRestaurantForm.get('restaurantType')?.value,
        image: this.addRestaurantForm.get('restaurantImageFile')?.value,
      };
      console.log(newRestaurant);

      // emit
      this.onAddRestaurant.emit(newRestaurant);

      this.addRestaurantForm.get('restaurantName')?.setValue('');
      this.addRestaurantForm.get('restaurantName')?.markAsPending();
      this.addRestaurantForm.get('restaurantName')?.markAsUntouched();

      this.addRestaurantForm.get('restaurantCoordinate')?.setValue('');
      this.addRestaurantForm.get('restaurantCoordinate')?.markAsPending();
      this.addRestaurantForm.get('restaurantCoordinate')?.markAsUntouched();

      this.imageInputRef.nativeElement.value = '';

      console.log(this.addRestaurantForm);
    }
  }
}
