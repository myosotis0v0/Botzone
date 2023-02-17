package com.botzone.backend.pojo;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(value = {"hibernateLazyInitializer", "handler"})//会导致jackson序列化出错
public class User {
    private Integer id;

    private String username;

    private String password;
}
