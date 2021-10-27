package com.example.springbootlearn.Service;

import com.example.springbootlearn.Entity.GoodsDo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * 商品服务
 * @author Martin
 */
@Service
public class GoodsList {

    public List<GoodsDo> getGoodsList(){
        List<GoodsDo> list = new ArrayList<>();
        GoodsDo goods = new GoodsDo();
        goods.setName("Apple");
        goods.setPrice("3.5k");
        goods.setPic("Apple.png");
        list.add(goods);
        return list;
    }

    /**
     * 按id获取商品信息，模拟返回对应商品信息
     *
     * @return
     */

     public GoodsDo getGoodsById(int id){
         GoodsDo goods = new GoodsDo();
         goods.setName("Apple1");
         goods.setPrice("3.5k1");
         goods.setPic("Apple.png1");
         return goods;
     }



}
