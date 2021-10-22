package com.example.springbootlearn.Controller;

import com.example.springbootlearn.Entity.GoodsDo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * @author Martin
 */
@Controller
public class ProductController {

    @ResponseBody
    @RequestMapping("/product")
    public GoodsDo getGoodsById(){
        GoodsDo good = new GoodsDo();
        good.setName("APP");
        good.setPrice("1.0");
        good.setPic("1.png");
        return good;
    }
}
