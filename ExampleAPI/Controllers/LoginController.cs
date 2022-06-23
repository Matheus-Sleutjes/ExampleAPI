using ExampleAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace ExampleAPI.Controllers
{
    [Route("api/[controller]")]
    public class LoginController : Controller
    {
        public LoginController() { }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok("hello World");
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] LoginModel login)
        {
            if(login == null)
            return BadRequest(false);

            return Ok(true);
        }
    }
}
