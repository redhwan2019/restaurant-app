import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.css'],
})
export class SearchFieldComponent implements OnInit {
  @Output() onSearchChanged: EventEmitter<String> = new EventEmitter();

  searchText: string;
  constructor() {}

  ngOnInit(): void {}
  onSearch(value: any) {
    this.onSearchChanged.emit(this.searchText);
  }
}
