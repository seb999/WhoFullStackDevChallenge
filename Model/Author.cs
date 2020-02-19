using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WhoManageCourses.Model
{
    public class Author
    {
        public Author()
        {
            Course = new HashSet<Course>();
        }  
        [Key]
        public int authorId { get; set; }
        public string name { get; set; }
        public string dateAdded { get; set; }
        public ICollection<Course> Course { get; set; }
    }
}