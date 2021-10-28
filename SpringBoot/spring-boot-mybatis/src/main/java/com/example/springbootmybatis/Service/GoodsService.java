package com.example.springbootmybatis.Service;

import com.example.springbootmybatis.Dao.GoodsDao;
import com.example.springbootmybatis.Entity.GoodsDo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Martin
 */
@Service
public class GoodsService {

    @Autowired
    private GoodsDao goodsDao;

    /**
     * add goods
     * @param goods
     */
    public void add(GoodsDo goods){
        goodsDao.insert(goods);
    }

    /**
     * delete goods
     * @param id
     */
    public void remove(Long id){
        goodsDao.delete(id);
    }

    /**
     * edit goods
     * @param goods
     * @return
     */
    public void edit(GoodsDo goods){
        goodsDao.update(goods);
    }

    /**
     * find good by id
     * @param id
     * @return
     */
    public GoodsDo getGoodsById(Long id){
       return goodsDao.selectOne(id);
    }

    /**
     * find list
     * @return
     */
    public List<GoodsDo> getList(){
        return goodsDao.selectAll();
    }


}
