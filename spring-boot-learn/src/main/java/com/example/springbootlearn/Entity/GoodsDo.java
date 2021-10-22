package com.example.springbootlearn.Entity;

import lombok.Data;

/**
 * 商品数据对象
 * @author Martin
 */
@Data
public class GoodsDo{
  private String name;
  private String price;
  private String pic;

  public void setName(String name) {
    this.name = name;
  }
}
