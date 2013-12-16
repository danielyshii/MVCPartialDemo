using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DemoJavascriptPartial.Controllers
{
    public class CommonController : Controller
    {
        //
        // GET: /Common/

        public ActionResult ImageCarrousel()
        {

            return PartialView();
        }

    }
}
