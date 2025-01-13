import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = 'https://my-portfolio-fz6o.onrender.com/api/send-email';

  constructor(private http: HttpClient) { }

  sendContactForm(contactData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, contactData, { responseType: 'text' as 'json' });
  }
}
