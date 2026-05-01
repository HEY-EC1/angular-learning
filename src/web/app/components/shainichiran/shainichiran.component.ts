import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShainichiranService } from '../../services/shainichiran.service';
import { Shainichiran } from '../../models/shainichiran.model';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-shainichiran',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './shainichiran.component.html',
  styleUrl: './shainichiran.component.css'
})
/**
 * 社員一覧の表示と新規登録を行うコンポーネント
 */
export class ShainichiranComponent implements OnInit {
  /** 新規登録フォームで入力された社員情報を保持します */
  newShain: Omit<Shainichiran, 'id'> = {
    name: '',
    department: '',
    email: ''
  };

  /**
   * 社員一覧のリストを保持するSignal
   * Signalを利用することで、値の変更が自動的にテンプレートに反映されます。
   */
  shainList = signal<Shainichiran[]>([]);

  constructor(private service: ShainichiranService) {}

  /**
   * コンポーネントの初期化時に社員一覧を読み込みます。
   */
  ngOnInit(): void {
    this.loadShainList();
  }

  /**
   * 「登録」ボタンがクリックされた時の処理です。
   * 入力された社員情報を登録し、一覧を再読み込みします。
   */
  onRegister() {
    // addShainメソッドは `id` を含む Shainichiran 型を期待するため、
    // ダミーのidを設定して型を合わせます。
    // バックエンドでidが自動採番される場合、このidは無視されます。
    const shainToRegister: Shainichiran = { ...this.newShain, id: 0 };

    this.service.addShain(shainToRegister).subscribe(() => {
      console.log('登録しました！');
      this.loadShainList(); // 再読み込みして一覧を更新
      this.newShain = { name: '', department: '', email: '' }; // 登録後、フォームを空にする
    });
  }

  /**
   * 「削除」ボタンがクリックされた時の処理です。
   * 指定されたIDの社員情報を削除し、一覧を再読み込みします。
   * @param id 削除対象の社員ID
   */
  onDelete(id: number) {
    // 削除する前に確認ダイアログを表示
    if (confirm('この社員情報を削除してもよろしいですか？')) {
      this.service.deleteShain(id).subscribe({
        next: () => {
          this.loadShainList(); // 成功した場合、一覧を再読み込みして更新
        },
        error: (err) => {
          console.error('削除処理中にエラーが発生しました:', err); // 失敗した場合、コンソールにエラーを出力
        }
      });
    }
  }

  /**
   * 社員一覧を取得し、`shainList` Signalを更新します。
   */
  loadShainList() {
    this.service.getShainList().subscribe(data => this.shainList.set(data));
  }
}