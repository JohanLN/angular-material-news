import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-news-select',
  standalone: true,
  imports: [MatFormFieldModule, MatOptionModule, MatSelectModule],
  templateUrl: './news-select.component.html',
  styleUrl: './news-select.component.scss',
})
export class NewsSelectComponent<T> {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) options!: T[];
  @Output() selectionChanged: EventEmitter<T> = new EventEmitter<T>();
  selectedOption!: T;

  onSelectionChange() {
    this.selectionChanged.emit(this.selectedOption);
  }
}
