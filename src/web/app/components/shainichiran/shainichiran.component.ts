import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShainichiranService } from '../../services/shainichiran.service';
import { Shainichiran } from '../../models/shainichiran.model';

@Component({
  selector: 'app-shainichiran',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shainichiran.component.html',
  styleUrl: './shainichiran.component.css'
})
export class ShainichiranComponent implements OnInit {
  shainList: Shainichiran[] = []; // 最初は空っぽ

  constructor(private service: ShainichiranService) {}

  ngOnInit(): void {
    // Javaに「データちょうだい」と予約を入れる
    this.service.getShainList().subscribe({
      next: (data) => {
        this.shainList = data; // 届いたデータを変数にコピー！
        console.log('データ届いたよ！', data); // これがコンソールに出るか確認
      },
      error: (err) => {
        console.error('通信失敗...', err);
      }
    });
  }
}