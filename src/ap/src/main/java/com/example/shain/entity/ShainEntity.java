package com.example.shain.entity;

import jakarta.persistence.Entity; // これが必要
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table; // これが必要

@Entity
@Table(name = "shain") // DockerのDBで作ったテーブル名に合わせてください
public class ShainEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // IDを自動採番する場合
    private Integer id;

    private String name;
    private String department;
    private String email;

    // ゲッターとセッター（省略せずに書いてあるか確認してください）
    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }
    
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDepartment() { return department; }
    public void setDepartment(String department) { this.department = department; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
}