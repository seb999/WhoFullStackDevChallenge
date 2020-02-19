using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WhoManageCourses.Model
{
    public class Student
    {
        [Key]
        public int studentId { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
    }
}