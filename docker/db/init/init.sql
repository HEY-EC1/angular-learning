-- テーブルの作成
CREATE TABLE IF NOT EXISTS shain (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    department VARCHAR(100),
    email VARCHAR(255)
);

-- 初期データの投入
INSERT INTO shain (name, department, email) VALUES
('工藤 太郎', '開発部', 'kudo@example.com'),
('山田 花子', '人事部', 'yamada@example.com'),
('佐藤 次郎', '営業部', 'sato@example.com');