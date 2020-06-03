using System.IO;
using System;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Net.Http.Headers;

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
        [HttpGet]
        [Route("GetVideoContent")]
                public IActionResult GetVideoContent() {

            var file = new FileStream("./ClientApp/public/clips/mw.mp4", FileMode.Open);
                FileStreamResult result = File (
                    fileStream: file,
                    contentType: new MediaTypeHeaderValue("video/mp4").MediaType,
                    enableRangeProcessing: true
                );
                return result;
        }
        }
    }