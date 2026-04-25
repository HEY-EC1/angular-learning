package com.example.shain.dao;

import com.example.shain.entity.ShainEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public class ShainichiranDao {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    /**
     * 社員一覧を全件取得するSQLを実行します
     */
    public List<ShainEntity> findAll() {
        // 直接SQLを書く「現場感」あふれるスタイルです
        String sql = "SELECT id, name, department, email FROM shain";
        
        // SQLを実行し、結果をEntityにマッピングしてリストで返却
        return jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(ShainEntity.class));
    }
}