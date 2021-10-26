package com.example.springbootmybatis.Dao;

import com.example.springbootmybatis.Entity.GoodsDo;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author Martin
 */
@Repository
public interface GoodsDao {
    /**
     * add
     * @param goods
     * @return
     */
    public int insert(GoodsDo goods);

    /**
     * remove
     * @param id
     * @return
     */
    public int delete(Long id);

    /**
     * edit
     * @param goods
     * @return
     */
    public int update(GoodsDo goods);

    /**
     * select one
     * @param id
     * @return
     */
    public GoodsDo selectOne(Long id);

    /**
     * select all list
     * @return
     */
    public List<GoodsDo> selectAll();

}
