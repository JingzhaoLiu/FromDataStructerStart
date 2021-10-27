package com.example.springbootjdbctemplate.Service;

import com.example.springbootjdbctemplate.Dao.GoodsDao;
import com.example.springbootjdbctemplate.Entity.GoodsDo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 商品服务类
 * @author Martin
 */
@Service
public class GoodsService {
    @Autowired
    private GoodsDao goodsDao;

    /**
     * 新增商品
     */
    public void add(GoodsDo goods) {
        goodsDao.insert(goods);
    }

    /**
     * 删除商品
     */
    public void remove(Long id) {
        goodsDao.delete(id);
    }

    /**
     * 编辑商品信息
     */
    public void edit(GoodsDo goods) {
        goodsDao.update(goods);
    }

    /**
     * 按id获取商品信息
     */
    public GoodsDo getById(Long id) {
        return goodsDao.getById(id);
    }

    /**
     * 获取商品信息列表
     */
    public List<GoodsDo> getList() {
        return goodsDao.getList();
    }
}

