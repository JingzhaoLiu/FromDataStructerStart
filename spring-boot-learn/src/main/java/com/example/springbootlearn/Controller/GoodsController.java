package com.example.springbootlearn.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 商品控制器
 * @author Martin
 */
@Controller
public class GoodsController {
    /**
     * 商品列表
     */
    @RequestMapping("/goods")
    public String goods(){
        return "good";
    }

}
