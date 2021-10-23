package com.example.springbootlearn.Service;

import com.example.springbootlearn.Entity.CourseDo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Course Service
 * @author Martin
 */
@Service
public class CourseService {
    /**
     * course list
     */
    public List<CourseDo> getCourseList(){
        List<CourseDo> list = new ArrayList<>();
        list.add(new CourseDo(1, "Art1", "1.31", "art.png"));
        list.add(new CourseDo(2, "Art2", "1.23", "art.png"));
        list.add(new CourseDo(3, "Art3", "1.13", "art.png"));
        list.add(new CourseDo(4, "Art4", "1.53", "art.png"));
        return list;
    }

    /**
     * course detail
     */
    public CourseDo getCourseById(int id){
//        CourseDo course = new CourseDo(1, "Art", "北京", "aaa@ccc.com");
//        course.setId(1);
//        course.setName("Art");
//        course.setPrice("150.00");
//        course.setPic("Art.png");
        return new CourseDo(1, "Art", "1.3", "art.png");
    }

    /**
     * add course
     */
    public int addCourse(CourseDo course){
        return 1;
    }

    /**
     * edit course
     */
     public int editCourse(CourseDo course){
         return 1;
     }
    /**
     * remove course
     */
    public int removeCourse(int id){
        return 1;
    }


}
