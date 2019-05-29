package kr.co.oliveyoung.shopapp.feature.search;

import java.io.Serializable;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class OracleSearch implements Serializable {

    private static final long serialVersionUID = -3720356412776588306L;

    private String gdsCd;
    private String gdsNm;
    private String shrtGdsNm;
    private String gdsSclsCd;
    private String brndCd;
    private String brndNm;
    private String shrtBrndNm;
    private String sellPrc;
    private String dcRt;
    private String dcSellPrc;
    private String viewPrc;

}
