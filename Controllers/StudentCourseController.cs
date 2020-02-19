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
        [Route("/api/[controller]/{courseId}/{studentId}")]
        public List<Student> Add(int courseId, int studentId)
        {
            StudentCourse newEnroll = new StudentCourse();
            newEnroll.courseId = courseId;
            newEnroll.studentId = studentId;

            DbContext.Add(newEnroll);
            DbContext.SaveChanges();
            
             return DbContext.Student
           .Include(p => p.StudentCourse)
           .ThenInclude(p => p.Course).ToList();
        }
    }
}
