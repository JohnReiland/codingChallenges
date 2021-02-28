using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Variables
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                string exampleString = "true";
                bool exampleBoolean = Convert.ToBoolean(exampleString);
                Console.WriteLine(exampleBoolean);
            }
            catch (Exception)
            {
                Console.WriteLine("The string could not be converted to a boolean.");
                throw;
            }
        }
    }
}
