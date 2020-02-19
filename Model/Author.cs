using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WhoManageCourses.Model
{
    public class Author
    {
        [Key]
        public int authorId { get; set; }
        public string name { get; set; }
    }
}