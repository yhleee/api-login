package kr.co.oliveyoung.shopapp.feature.test;

import lombok.Data;

import java.io.Serializable;

@Data
public class MySqlTest implements Serializable {

    private static final long serialVersionUID = -3453296547783377099L;
    private Long id;
    private String message;
    private String storeId;
    private String title;
    private String subTitle;
    private String logo;
    private String linkUrl;

}
