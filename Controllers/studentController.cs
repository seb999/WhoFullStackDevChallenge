using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WhoManageCourses.Model;
using Microsoft.AspNetCore.Mvc;

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
            return DbContext.Student.ToList();
        }

        [HttpGet]
        [Route("/api/[controller]/{id}")]
        public List<Student> Get(int id)
        {
            return DbContext.Student.Where(p => p.student_id == id).ToList();
        }

        [HttpPost]
        [Route("/api/[controller]")]
        public List<Student> Add([FromBody] Student student)
        {
            Student newStudent = new Student();
            newStudent.first_name = student.first_name;
            newStudent.last_name = student.last_name;
            DbContext.SaveChanges();
            return DbContext.Student.ToList();
        }
    }
}
