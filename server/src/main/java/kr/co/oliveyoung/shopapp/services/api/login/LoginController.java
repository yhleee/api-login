package kr.co.oliveyoung.shopapp.services.api.login;

import kr.co.oliveyoung.shopapp.common.enums.ResponseResult;
import kr.co.oliveyoung.shopapp.common.model.ApiResponseMessage;
import kr.co.oliveyoung.shopapp.feature.login.Login;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@Slf4j
@RequestMapping("/login")
@RestController
public class LoginController {

    @Autowired
    private LoginService service;


    @GetMapping("/common")
    public ApiResponseMessage commonNotice(HttpServletResponse response) {
        List<Login> notice = service.getCommonNotice();
        if (notice == null) {
            response.setStatus(204);
            System.out.println("notice is null");
            return null;
        }
        ApiResponseMessage result = new ApiResponseMessage(ResponseResult.SUCCESS, null, null);
        result.setContents(notice);
        return result;
    }

    @GetMapping("/common/{noticeId}")
    public ApiResponseMessage commonNoticeDetail(HttpServletResponse response, @PathVariable("noticeId" ) String noticeId) {
        Login notice = service.getCommonNoticeDetail(noticeId);
        if (notice == null) {
            response.setStatus(204);
            return null;
        }
        ApiResponseMessage result = new ApiResponseMessage(ResponseResult.SUCCESS, null, null);
        result.setContents(notice);
        return result;
    }
}
