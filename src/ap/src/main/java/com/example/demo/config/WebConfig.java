package com.example.demo.config; // ご自身のプロジェクトのパッケージ名に合わせてください

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * アプリケーション全体のCORS(Cross-Origin Resource Sharing)設定を行うクラス
 */
@Configuration // このクラスが設定用ファイルであることをSpringに伝えます
public class WebConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                // CORS設定を適用するパスのパターンを指定します
                // "/api/**" は "/api/" で始まるすべてのパスを対象にします
                registry.addMapping("/api/**")
                        // リクエストを許可するオリジン（AngularアプリのURL）を指定します
                        .allowedOrigins("http://localhost:4200")
                        // 許可するHTTPメソッドを指定します。DELETEとOPTIONSの許可が重要です
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                        // 許可するリクエストヘッダーをすべて許可します
                        .allowedHeaders("*")
                        // Cookieなどの認証情報を含むリクエストを許可するかどうか
                        .allowCredentials(true);
            }
        };
    }
}
