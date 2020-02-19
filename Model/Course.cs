using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WhoManageCourses.Model
{
    public class Course
    {
        public Course()
        {
            StudentCourse = new HashSet<StudentCourse>();
        }
        [Key]
        public int courseId { get; set; }
        public int authorId { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public string dateAdded { get; set; }
        public Author author { get; set; }
        public ICollection<StudentCourse> StudentCourse { get; set; }
    }
}