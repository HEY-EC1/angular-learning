package com.example.shain.dao;

import com.example.shain.entity.ShainEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShainichiranDao extends JpaRepository<ShainEntity, Integer> {
    // ここは空っぽで大丈夫です！
    // JpaRepositoryを継承するだけで、save() や findAll() が自動で使えるようになります。
}