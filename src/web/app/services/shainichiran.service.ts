import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // 追加
import { Observable } from 'rxjs';
import { Shainichiran } from '../models/shainichiran.model'; // 以前作ったインターフェース

@Injectable({
  providedIn: 'root'
})
export class ShainichiranService {
  // JavaのURLを指定
  private apiUrl = 'http://localhost:8080/api/shain';

  constructor(private http: HttpClient) { }

  getShainList(): Observable<Shainichiran[]> {
    // HttpClientを使ってJavaのAPIを叩く！
    return this.http.get<Shainichiran[]>(this.apiUrl);
  }
}