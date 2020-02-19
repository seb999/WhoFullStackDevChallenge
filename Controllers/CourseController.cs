﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WhoManageCourses.Model;
using Microsoft.AspNetCore.Mvc;

namespace WhoManageCourses.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CourseController : Controller
    {
        private readonly ApplicationDbContext DbContext;

         public CourseController([FromServices] ApplicationDbContext appDbContext)
        {
            DbContext = appDbContext;
        }

        [HttpGet]
        [Route("/api/[controller]")]
        public List<Course> Get()
        {
            return DbContext.Course.ToList();
        }

        [HttpGet]
        [Route("/api/[controller]/{id}")]
        public List<Course> Get(int id)
        {
            return DbContext.Course.Where(p=>p.courseId == id).ToList();
        }

        [HttpPost]
        [Route("/api/[controller]/Add")]
        public List<Course> Add([FromBody] Course course)
        {
            Course newCourse = new Course();
            newCourse.name = course.name;
            newCourse.description = course.description;
            newCourse.authorId = course.authorId;
            newCourse.dateAdded = DateTime.Now.ToString();

            DbContext.Add(newCourse);
            DbContext.SaveChanges();
            return DbContext.Course.ToList();
        }
    }
}
