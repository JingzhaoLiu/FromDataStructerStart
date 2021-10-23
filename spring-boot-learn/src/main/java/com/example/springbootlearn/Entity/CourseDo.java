package com.example.springbootlearn.Entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

/**
 * Course Class
 * @author Martin
 */
@Data
@ApiModel("CourseDo 课程基本信息")
public class CourseDo {
    /**
     * course id
     */
    private int id;

    /**
     * course name
     */
    @ApiModelProperty("课程名称")
    private String name;

    /**
     * course price
     */
    @ApiModelProperty("课程价格")
    private String price;

    /**
     * course pic
     */
    private String pic;

    public CourseDo(int id, String name, String price, String pic) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.pic = pic;
    }

    public CourseDo() {
        this(1, "Art", "1.3", "art.png");
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setPic(String pic) {
        this.pic = pic;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPrice(String price) {
        this.price = price;
    }
}
