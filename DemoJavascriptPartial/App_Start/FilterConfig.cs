using System.Web;
using System.Web.Mvc;

namespace DemoJavascriptPartial
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}