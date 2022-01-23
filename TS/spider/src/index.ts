import axios from 'axios';
import cheerio from 'cheerio';

import path from 'path';
import fs from 'fs';

interface Course {
  title: string;
  number: number;
  pic: string;
  href: string;
}

interface ICourseItem {
  time: number,
  data: Course[]
}




class Spider {
  private secret = 'secretKey';
  private url = `http://www.dell-lee.com/typescript/demo.html?secret=${this.secret}`;

  async getHtml() {
    // const result = await axios.get(this.url)
    const result = {
      data: `<div class="content">
            <div>
              <a href="https://coding.imooc.com/class/203.html" class="course-link" target="_blank">
                <div class="course-item">
                  <img class="course-img" src="https://serverless-project-static-files.oss-cn-beijing.aliyuncs.com/apiServerImages/vue.jpg" />
                  <p class="course-desc">Vue2.5开发去哪儿网App</p>
                  <p class="course-desc">当前课程学习人数：57</p>
                </div>
              </a>
              <a href="https://coding.imooc.com/class/229.html" class="course-link" target="_blank">
                <div class="course-item">
                  <img class="course-img" src="https://serverless-project-static-files.oss-cn-beijing.aliyuncs.com/apiServerImages/react.jpg" />
                  <p class="course-desc">React 16.4 开发简书项目</p>
                  <p class="course-desc">当前课程学习人数：55</p>
                </div>
              </a>
              <a href="https://coding.imooc.com/class/276.html" class="course-link" target="_blank">
                <div class="course-item">
                  <img class="course-img" src="https://serverless-project-static-files.oss-cn-beijing.aliyuncs.com/apiServerImages/ssr.jpg" />
                  <p class="course-desc">React服务器渲染原理解析与实践</p>
                  <p class="course-desc">当前课程学习人数：85</p>
                </div>
              </a>
              <a href="https://coding.imooc.com/class/316.html" class="course-link" target="_blank">
                <div class="course-item">
                  <img class="course-img" src="https://serverless-project-static-files.oss-cn-beijing.aliyuncs.com/apiServerImages/webpack.jpg" />
                  <p class="course-desc">手把手带你掌握新版Webpack4.0</p>
                  <p class="course-desc">当前课程学习人数：63</p>
                </div>
              </a>
            </div>
          </div>`,
    };
    return result.data;
  }

  getCourse(html: string) {
    const $ = cheerio.load(html);
    const course = $('.course-link');
    const courseList: Course[] = [];

    course.map((i, e) => {
      courseList.push({
        href: $(e).attr('href') || '',
        title: $(e).find('.course-desc').eq(0).text(),
        number: parseInt($(e).find('.course-desc').eq(1).text().split('：')[1], 10),
        pic: $(e).find('.course-img').attr('src') || '',
      });
    });
    return {
      time: new Date().getTime(),
      data: courseList,
    };
  }

  saveCourse(course: ICourseItem) {
    const filePath = path.resolve(__dirname, '../data/course.json');
    let courseJson: ICourseItem[] = [];
    if (fs.existsSync(filePath)) {
      const text = fs.readFileSync(filePath, 'utf-8');
      courseJson = JSON.parse(text);
    } else {
      fs.mkdir(path.join(__dirname, '../data'), (err) => {
        if (err) {
          return console.error(err);
        }
      })
    }

    courseJson.push(course);
    fs.writeFileSync(filePath, JSON.stringify(courseJson));
  }

  async start() {
    const html: string = await this.getHtml();
    const course = this.getCourse(html);
    this.saveCourse(course)
  }
}

const spider = new Spider();
spider.start();
