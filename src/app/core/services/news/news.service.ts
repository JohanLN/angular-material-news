import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { urlFormatter } from '../../../lib';
import { News } from '../../models/news.model';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private httpClient: HttpClient) {}

  getHeadlines(
    search?: string,
    category?: string,
    country?: string
  ): Observable<News> {
    const formattedUrl = urlFormatter(search, category, country);
    console.log('formattedUrl', formattedUrl);

    return this.httpClient.get<News>(
      `${environment.urlTopHealines}${formattedUrl}`
    );
  }
}
