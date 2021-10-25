package com.example.springbootjdbctemplate.Entity;

/**
 * good class
 * @author Martin
 */

public class GoodsDo {
    /**
     * id
     */
    private Long id;

    /**
     * name
     */
    private String name;

    /**
     * price
     */
    private String price;

    /**
     * pic
     */

    private String pic;



    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getPic() {
        return pic;
    }

    public void setPic(String pic) {
        this.pic = pic;
    }
}
