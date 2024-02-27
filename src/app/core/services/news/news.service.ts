import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { DEFAULT_COUNTRY } from '../../constants/constants';
import { News } from '../../models/news.model';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private httpClient: HttpClient) {}

  getEverything(): Observable<News> {
    return this.httpClient.get<News>(
      `${environment.urlEverything}country=${DEFAULT_COUNTRY}`
    );
  }

  getHeadlines(): Observable<News> {
    return this.httpClient.get<News>(
      `${environment.urlTopHealines}country=${DEFAULT_COUNTRY}`
    );
  }
}
