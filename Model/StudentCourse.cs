using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WhoManageCourses.Model
{
    public class StudentCourse
    {
        [Key]
        public int studentcourse_id { get; set; }
        public int course_id { get; set; }
        public int student_id { get; set; }
    }
}