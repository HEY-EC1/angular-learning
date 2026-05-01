package com.example.shain.controller;

import com.example.shain.dao.ShainichiranDao;
import com.example.shain.entity.ShainEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.DeleteMapping; // DELETE用にインポート
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable; // URLのIDを受け取るためにインポート
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/api/shain")
public class ShainichiranController {

    @Autowired
    private ShainichiranDao shainichiranDao;

    @GetMapping
    public List<ShainEntity> getShainList() {
        return shainichiranDao.findAll();
    }
    @PostMapping // 新規登録用の「POST」メソッド
    public ShainEntity addShain(@RequestBody ShainEntity shain) {
    // 送られてきた社員データをDBに保存して、保存後のデータを返す
    return shainichiranDao.save(shain);
}

    @DeleteMapping("/{id}") // 削除用の「DELETE」メソッド
    public void deleteShain(@PathVariable Integer id) {
        // URLに含まれるidを使って、該当する社員データをDBから削除します
        shainichiranDao.deleteById(id);
    }
}