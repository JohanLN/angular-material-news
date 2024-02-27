import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Article } from '../../../core/models/article.model';
import { compareArticleDateFromNow } from '../../../lib';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.scss',
})
export class ArticleCardComponent {
  @Input() article!: Article;

  compareArticleDataFromNow(articleDate: string) {
    return compareArticleDateFromNow(articleDate);
  }
}
