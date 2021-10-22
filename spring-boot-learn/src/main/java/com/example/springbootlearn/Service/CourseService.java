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
        CourseDo course = new CourseDo();
        course.setId(1);
        course.setName("Art");
        course.setPrice("150.00");
        course.setPic("Art1.png");
        list.add(course);
        return list;
    }

    /**
     * course detail
     */
    public CourseDo getCourseById(int id){
        CourseDo course = new CourseDo();
        course.setId(1);
        course.setName("Art");
        course.setPrice("150.00");
        course.setPic("Art.png");
        return course;
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
