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
    public class StudentController : Controller
    {
        private readonly ApplicationDbContext DbContext;

        public StudentController([FromServices] ApplicationDbContext appDbContext)
        {
            DbContext = appDbContext;
        }

        [HttpGet]
        [Route("/api/[controller]")]
        public List<Student> Get()
        {
            return DbContext.Student
            .Include(p => p.StudentCourse)
            .ThenInclude(p => p.Course).ToList();
        }

        [HttpGet]
        [Route("/api/[controller]/{id}")]
        public List<Student> Get(int id)
        {
            return DbContext.Student.Include(p => p.StudentCourse).ThenInclude(p => p.Course).Where(p => p.studentId == id).ToList();
        }

        [HttpPost]
        [Route("/api/[controller]/Add")]
        public List<Student> Add([FromBody] Student student)
        {
            Student newStudent = new Student();
            newStudent.firstName = student.firstName;
            newStudent.lastName = student.lastName;
            newStudent.dateAdded = DateTime.Now.ToString();

            DbContext.Add(newStudent);
            DbContext.SaveChanges();

            return DbContext.Student
           .Include(p => p.StudentCourse)
           .ThenInclude(p => p.Course).ToList();
        }
    }
}
