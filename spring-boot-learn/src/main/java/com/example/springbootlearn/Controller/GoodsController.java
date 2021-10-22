package com.example.springbootlearn.Controller;


import com.example.springbootlearn.Entity.GoodsDo;
import com.example.springbootlearn.Service.GoodsList;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.List;


/**
 * 商品控制器
 * @author Martin
 */
@Controller
public class GoodsController {
    /**
     * 商品列表
     */
    @Resource
    private GoodsList goodsList;


    @RequestMapping("/goods")
    public String goods(Model model){
        model.addAttribute("goodsList",goodsList.getGoodsList());
        return "good";
    }

    @ResponseBody
    @RequestMapping("/goodsList")
    public List<GoodsDo> goodsList(){
        return goodsList.getGoodsList();
    }

}
