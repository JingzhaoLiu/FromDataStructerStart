package com.example.springbootlearn.Controller;

import com.example.springbootlearn.Entity.CourseDo;
import com.example.springbootlearn.Service.CourseService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

/**
 * RestController
 * 1. 将CourseController 注册为控制器 2. 控制器中的方法返回值序列化为json格式
 *
 * @author Martin
 */


@Api(tags="课程管理")
@RestController
public class CourseController {

    @Resource
    private CourseService courseService;

    /**
     * get course detail
     * GetMapping表示使用get方法
     * "/goods/{id}"表示请求路径为/goods/{id}的形式，其中{id}为占位符
     * PathVariable("id")表示将占位符{id}的值传递给id
     * 也就是说/course/7请求的话，会将7传递给参数id
     */
    @ApiOperation("课程详情")
    @GetMapping("/course/{id}")
    public CourseDo getDetail(@PathVariable("id") int id){
        return courseService.getCourseById(id);
    }


    /**
     * get course list
     */
    @ApiOperation("课程列表")
    @GetMapping("/course/list")
    public List<CourseDo> getList(){
        return courseService.getCourseList();
    }

    /**
     * add course
     * PostMapping表示使用post方法
     * RequestBody表示将请求中的body中信息转换为CourseDo类型的对象信息，该转换也是由SpringMVC自动完成的
     */
    @ApiOperation("添加课程")
    @PostMapping("/course")
    public void add(@RequestBody CourseDo course) {
        courseService.addCourse(course);
    }

    /**
     * edit course
     * PutMapping表示使用put方法
     */
    @ApiOperation("编辑课程")
    @PutMapping("/course/{id}")
    public void update(@PathVariable("id") int id, @RequestBody CourseDo course){
        course.setId(id);
        courseService.editCourse(course);
    }

    /**
     * remove course
     * DeleteMapping表示使用delete方法
     */
    @ApiOperation("删除课程")
    @DeleteMapping("/course/{id}")
    public void delete(@PathVariable("id") int id){
        courseService.removeCourse(id);
    }
}
