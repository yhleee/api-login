package kr.co.oliveyoung.shopapp.feature.login;

import kr.co.oliveyoung.shopapp.config.mybatis.OracleMapper;
import kr.co.oliveyoung.shopapp.feature.login.Login;

import java.util.List;

@OracleMapper
public interface LoginMapper {

    List<Login> selectCommNotice_login(Login params);
    Login selectCommonNoticeDetail(Login params);
}
