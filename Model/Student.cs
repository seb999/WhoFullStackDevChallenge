using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WhoManageCourses.Model
{
    public class Student
    {
        public Student()
        {
            StudentCourse = new HashSet<StudentCourse>();
        }
        [Key]
        public int studentId { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string dateAdded { get; set; }
        public ICollection<StudentCourse> StudentCourse { get; set; }
    }
}