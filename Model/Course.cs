using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WhoManageCourses.Model
{
    public class Course
    {
        [Key]
        public int courseId { get; set; }
        public string authorId { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public string dateAdded { get; set; }

        public ICollection<StudentCourse> StudentCourse { get; set; }
    }
}