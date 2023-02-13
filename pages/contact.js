import { useAppContext } from "@/components/context/AppContext";
import { MainLayout } from "@/components/layout/MainLayout";
import { fetchData } from "@/functions/fetchData";
import { useEffect } from "react";

const Contact = ({ data }) => {

    const { lang, homeData, updateHomeData } = useAppContext();

    useEffect(() => {
        updateHomeData(data);
        
      }, [updateHomeData, data])
      
      if (!homeData) {
        return null;
      }
    
    // console.log(homeData);

    return(
        <MainLayout>
            <div className="min-h-screen text-white">
                {/* <div className="h-[30vh] lg:h-80 flex justify-center items-center bg-[url('https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-contain"></div> */}
                <div className="h-[10vh] lg:h-40 flex justify-center items-center bg-contain"></div>
                <h2 className="flex justify-center py-5 font-bold uppercase md:text-2xl">
                    { lang === 'esp' && `Estamos aquí para ayudarte` }
                    { lang === 'eng' && 'We are here to help' }
                </h2>

                <form className=" mx-10 md:mx-96 mt-10">
                    <div className="mb-6">
                        <label for="countries" class="block mb-2 text-sm font-medium text-white">
                            { lang === 'esp' && `Selecciona tu Kiltro restobar` }
                            { lang === 'eng' && 'Select your Kiltro restobar' }
                        </label>
                        <select id="countries" class="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-main focus:border-primary-main block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-main dark:focus:border-primary-main">
                            <option >Kiltro Sant Antoni</option>
                            <option>Kiltro Sant Gracia</option>
                        </select>
                    </div>
                    <div className="mb-6">
                        <label for="email" className="block mb-2 text-sm font-medium text-white">
                            { lang === 'esp' && `Correo electrónico` }
                            { lang === 'eng' && 'Your email' }
                        </label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:border-primary-main block w-full p-2.5   text-white focus:ring-primary-mai" placeholder="example@example.com" required />
                    </div>
                    <div className="mb-6">
                        <label for="email" className="block mb-2 text-sm font-medium text-white">
                            { lang === 'esp' && `Teléfono` }
                            { lang === 'eng' && 'Your phone' }
                        </label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-main focus:border-primary-main block w-full p-2.5  border-gray-600 text-white focus:ring-primary-main focus:border-primary-main" placeholder=""  />
                    </div>
                    <div className="mb-6"> 
                        <label for="message" class="block mb-2 text-sm font-medium text-white">
                            { lang === 'esp' && `Detállanos tu pregunta` }
                            { lang === 'eng' && 'Your message' }
                        </label>
                        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-main focus:border-primary-main dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-main dark:focus:border-primary-main"></textarea>
                    </div>
                    <button type="submit" className="bg-primary-dark w-full transition duration-200 hover:bg-primary-darkest py-4 px-10 text-white">
                        { lang === 'esp' && `Enviar` }
                            { lang === 'eng' && 'Submit' }
                    </button>
                </form>
            </div>
            
        </MainLayout>
    )

}

export default Contact;

export async function getStaticProps (){
    const data = await fetchData();
  
    return {
      props: { data }
    }
  }
  