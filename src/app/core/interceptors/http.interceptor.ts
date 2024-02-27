import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const apiKeyReq = req.clone({
    setHeaders: {
      'X-Api-Key': environment.apiKey,
    },
  });
  return next(apiKeyReq);
};
