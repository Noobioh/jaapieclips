using System.IO;
using System;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Net.Http.Headers;
using server.Controllers;
using System.Collections.Generic;

namespace jaapieclips.ClientApp.src.components
{
    [ApiController]
    [Route("[controller]")]
    public class getvideos : ControllerBase
    {
        [HttpGet]
        [Route("Videos")]
        
    	
        public IActionResult Videos()
        {
            string[] files = Directory.GetFiles(@"./ClientApp/public/clips", "*.mp4",
            SearchOption.TopDirectoryOnly);

                var returnList = new List<getvideosmodel>();

                foreach(var file in files){
                var model = new getvideosmodel();
                model.file = file;
                returnList.Add(model);
}

                return Ok(returnList);

        }
        [HttpGet]
        [Route("GetVideoContent")]
                public IActionResult GetVideoContent(string path) {


            var file = new FileStream(path, FileMode.Open);
                FileStreamResult result = File (
                    fileStream: file,
                    contentType: new MediaTypeHeaderValue("video/mp4").MediaType,
                    enableRangeProcessing: true
                );
                return result;
        }
        }
    }