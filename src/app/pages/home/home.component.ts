import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { News } from '../../core/models/news.model';
import { NewsService } from '../../core/services/news/news.service';
import { ArticleCardComponent } from '../../shared/components/article-card/article-card.component';
import { FilterComponent } from '../../shared/components/filter/filter/filter.component';
import { NavigationComponent } from '../../shared/components/navigation/navigation/navigation.component';
import { WeatherComponent } from '../../shared/components/weather/weather/weather.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ArticleCardComponent,
    MatGridListModule,
    NavigationComponent,
    FilterComponent,
    WeatherComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  news: News | undefined = undefined;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.getHeadlines();
    console.log('coucou', this.news);
  }

  getEverything() {
    this.newsService.getEverything().subscribe({
      next: (newsResponse: News) => {
        this.news = newsResponse;
      },
    });
  }

  getHeadlines() {
    this.newsService.getHeadlines().subscribe({
      next: (newsResponse: News) => {
        this.news = newsResponse;
      },
    });
  }
}
