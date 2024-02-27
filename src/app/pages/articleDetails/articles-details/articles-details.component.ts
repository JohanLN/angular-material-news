import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Article } from '../../../core/models/article.model';
import { NavigationComponent } from '../../../shared/components/navigation/navigation/navigation.component';

@Component({
  selector: 'app-articles-details',
  standalone: true,
  imports: [RouterModule, NavigationComponent, MatButtonModule, MatIconModule],
  templateUrl: './articles-details.component.html',
  styleUrl: './articles-details.component.scss',
})
export class ArticlesDetailsComponent {
  constructor(private activatedRoute: ActivatedRoute) {}

  article: Article = JSON.parse(
    this.activatedRoute.snapshot.paramMap.get('article') ?? ''
  );
}
