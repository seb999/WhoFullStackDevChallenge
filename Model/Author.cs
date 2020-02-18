using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WhoManageCourses.Model
{
    public class Author
    {
        [Key]
        public int author_id { get; set; }
        public string name { get; set; }
    }
}