package com.example.shain.controller;

import com.example.shain.dao.ShainichiranDao;
import com.example.shain.entity.ShainEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin; // ← これが必要
import java.util.List;

@RestController
@RequestMapping("/api/shain")
@CrossOrigin(origins = "http://localhost:4200") // ← 【重要】ここに Angular の URL を書く
public class ShainichiranController {

    @Autowired
    private ShainichiranDao shainichiranDao;

    @GetMapping
    public List<ShainEntity> getShainList() {
        return shainichiranDao.findAll();
    }
}