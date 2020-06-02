using System.IO;
using System;
using Microsoft.AspNetCore.Mvc;

namespace jaapieclips.ClientApp.src.components
{
    [ApiController]
    [Route("[controller]")]
    public class getvideos : ControllerBase
    {
        [HttpGet]
        [Route("Videos")]

        public string Videos()
        {
            string[] filePaths = Directory.GetFiles(@"./ClientApp/public/clips", "*.mp4",
            SearchOption.TopDirectoryOnly);
            return String.Join(",", filePaths);
        }
    }
}