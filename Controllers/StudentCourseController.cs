using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WhoManageCourses.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace WhoManageCourses.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class StudentCourseController : Controller
    {
        private readonly ApplicationDbContext DbContext;

        public StudentCourseController([FromServices] ApplicationDbContext appDbContext)
        {
            DbContext = appDbContext;
        }

        [HttpPut]
        [Route("/api/[controller]/{course_id}/{student_id}")]
        public List<StudentCourse> Add(int course_id, int student_id)
        {
            StudentCourse newEnroll = new StudentCourse();
            newEnroll.courseId = newEnroll.courseId;
            newEnroll.studentId = newEnroll.studentId;
            DbContext.SaveChanges();
            return DbContext.StudentCourse.ToList();
        }
    }
}
