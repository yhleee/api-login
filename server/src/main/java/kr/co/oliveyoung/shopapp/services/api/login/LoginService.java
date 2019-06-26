package kr.co.oliveyoung.shopapp.services.api.login;

import kr.co.oliveyoung.shopapp.feature.login.Login;
import kr.co.oliveyoung.shopapp.feature.login.LoginMapper;


import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class LoginService {



    @Autowired
    private LoginMapper cMapper;



    List<Login> getCommonNotice() {
        Login params = new Login();
        return cMapper.selectCommNotice_login(params);
    }

    Login getCommonNoticeDetail(String noticeId) {
        Login params = new Login();
        params.setItemId(noticeId);
        return cMapper.selectCommonNoticeDetail(params);
    }




}
