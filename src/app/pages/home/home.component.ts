import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { News } from '../../core/models/news.model';
import { NewsService } from '../../core/services/news/news.service';
import { ArticleCardComponent } from '../../shared/components/article-card/article-card.component';
import { NavigationComponent } from '../../shared/components/navigation/navigation/navigation.component';
import { SearchComponent } from '../../shared/components/search/search/search.component';
import { WeatherComponent } from '../../shared/components/weather/weather/weather.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ArticleCardComponent,
    MatGridListModule,
    NavigationComponent,
    WeatherComponent,
    SearchComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  news: News | undefined = undefined;
  selectedCategory?: string;
  selectedCountry?: string;
  searchParam?: string;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.getHeadlines();
  }

  getHeadlines() {
    this.newsService
      .getHeadlines(
        this.searchParam,
        this.selectedCategory,
        this.selectedCountry
      )
      .subscribe({
        next: (newsResponse: News) => {
          this.news = newsResponse;
        },
      });
  }

  onSearchSubmited(searchInput: string) {
    this.searchParam = searchInput;
    this.getHeadlines();
  }

  onCategorySelectionChange(selectedOption: string) {
    this.selectedCategory = selectedOption;
    this.getHeadlines();
  }
  onCountrySelectionChange(selectedOption: string) {
    this.selectedCountry = selectedOption;
    this.getHeadlines();
  }
}
