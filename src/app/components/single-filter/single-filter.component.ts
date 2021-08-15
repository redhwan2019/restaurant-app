import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-single-filter',
  templateUrl: './single-filter.component.html',
  styleUrls: ['./single-filter.component.css'],
})
export class SingleFilterComponent implements OnInit {
  @Output() onTypeChanged: EventEmitter<String> = new EventEmitter();

  selectedType: string= "All";
  @Input() types: string[];
  constructor() {}

  ngOnInit(): void {}

  selectedTypechange(value:any){
    console.log(value);
    this.onTypeChanged.emit(this.selectedType);
  }
  
}
