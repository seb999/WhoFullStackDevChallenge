using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WhoManageCourses.Model
{
    public class Course
    {
        [Key]
        public int course_id { get; set; }
        public string name { get; set; }
         public string author_id { get; set; }

        public ICollection<StudentCourse> StudentCourse { get; set; }
    }
}