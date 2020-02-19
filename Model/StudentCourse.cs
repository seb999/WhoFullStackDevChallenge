using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WhoManageCourses.Model
{
    public class StudentCourse
    {
        [Key]
        public int studentcourseId { get; set; }
        public int courseId { get; set; }
        public int studentId { get; set; }
    }
}