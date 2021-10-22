package com.example.springbootlearn.Entity;

import lombok.Data;

/**
 * Course Class
 * @author Martin
 */
@Data
public class CourseDo {
    /**
     * course id
     */
    private int id;

    /**
     * course name
     */
    private String name;

    /**
     * course price
     */
    private String price;

    /**
     * course pic
     */
    private String pic;
}
