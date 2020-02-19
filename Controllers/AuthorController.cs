using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WhoManageCourses.Model;
using Microsoft.AspNetCore.Mvc;

namespace WhoManageCourses.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthorController : Controller
    {
        private readonly ApplicationDbContext DbContext;

        public AuthorController([FromServices] ApplicationDbContext appDbContext)
        {
            DbContext = appDbContext;
        }

        [HttpGet]
        [Route("/api/[controller]")]
        public List<Author> Get()
        {
            return DbContext.Author.ToList();
        }

        [HttpGet]
        [Route("/api/[controller]/{id}")]
        public List<Author> Get(int id)
        {
            return DbContext.Author.Where(p => p.authorId == id).ToList();
        }

        [HttpPost]
        [Route("/api/[controller]/Add")]
        public List<Author> Add([FromBody] Author author)
        {
            Author newAuthor = new Author();
            newAuthor.name = author.name;
            newAuthor.dateAdded = DateTime.Now.ToString();

            DbContext.Add(newAuthor);
            DbContext.SaveChanges();
            return DbContext.Author.ToList();
        }

        [HttpPost]
        [Route("/api/[controller]/Update")]
        public List<Author> Update([FromBody] Author author)
        {
            Author myAuthor = DbContext.Author.Where(predicate => predicate.authorId == author.authorId).Select(p => p).FirstOrDefault();
            myAuthor.name = author.name;
            myAuthor.dateAdded = DateTime.Now.ToString();
            DbContext.SaveChanges();
            return DbContext.Author.ToList();
        }
    }
}
