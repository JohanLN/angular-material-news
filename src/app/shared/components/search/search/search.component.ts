import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Category } from '../../../../core/models/enum/category.enum';
import { Country } from '../../../../core/models/enum/country.enum';
import { enumToSelectOptions } from '../../../../lib/converter';
import { NewsSelectComponent } from '../../select/news-select/news-select.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    NewsSelectComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  searchInput: FormControl = new FormControl('');
  @Output() searchSubmited: EventEmitter<string> = new EventEmitter<string>();
  countryOptionList = enumToSelectOptions(Country);
  @Output() countrySelectionChange: EventEmitter<Country> =
    new EventEmitter<Country>();
  categoryOptionList = enumToSelectOptions(Category);
  @Output() categorySelectionChange: EventEmitter<Category> =
    new EventEmitter<Category>();

  constructor() {}

  onCountrySelectionChange(selectedOption: any) {
    this.countrySelectionChange.emit(selectedOption);
  }

  onCategorySelectionChange(selectedOption: any) {
    this.categorySelectionChange.emit(selectedOption);
  }

  onSubmitSearch() {
    this.searchSubmited.emit(this.searchInput.value);
  }
}
