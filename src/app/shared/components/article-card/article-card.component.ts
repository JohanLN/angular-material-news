import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterModule } from '@angular/router';
import { Article } from '../../../core/models/article.model';
import { compareArticleDateFromNow } from '../../../lib';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [MatCardModule, RouterModule],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.scss',
})
export class ArticleCardComponent {
  @Input() article!: Article;

  constructor(private router: Router) {}

  compareArticleDataFromNow(articleDate: string) {
    return compareArticleDateFromNow(articleDate);
  }

  navigateToArticleDetails(id: string | null) {
    if (id) {
      this.router.navigate([
        `/article/${id}`,
        { article: JSON.stringify(this.article) },
      ]);
    }
  }
}
