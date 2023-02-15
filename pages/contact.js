import { useAppContext } from "@/components/context/AppContext";
import { Input } from "@/components/form/Input";
import { MainLayout } from "@/components/layout/MainLayout";
import { Spinner } from "@/components/ui/Spinner";
import { fetchData } from "@/functions/fetchData";
import sendEmail from "@/lib/sendEmail";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = ({ data }) => {

    const { lang, homeData, updateHomeData } = useAppContext();
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '', kiltro: 'Sant Antoni'});
    const [formErrors, setFormErrors] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const notify = () => toast.success(`${lang === 'esp' ? '¡Mensaje enviado!' : 'Message sent!'}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });;

    const checkErrors = () => {
        // BECOUSE USESTATE IS ASYNCHRONOUS, WE NEED THIS ARRAY TO CONFIRM THERE IS NOT ERRORS
        const errorInput = [];
        const requiredInputs = ['name', 'email', 'message'];

        Object.entries(formData).map( elem => {

            if ( requiredInputs.includes(elem[0]) && elem[1] === '' ) {
                // setFormErrors({ ...formErrors, [elem[0]]: elem[0]+' requerido' })
                errorInput.push(elem[0]);
                setFormErrors(prev => { return {...prev, [elem[0]]: 'Campo requerido'} })
            }

        })
        return errorInput.length === 0 ? true : false;
    }
    const handleOnChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({ ...formData, [name]:value })
    }
    const handleOnSubmit = async(e) => {
        e.preventDefault();
        setIsLoading(true);
        // RESET ERRORS
        setFormErrors(false)

        if ( checkErrors() ) {
            
            try {
                const req = await sendEmail(formData.email, '¡Nueva pregunta desde kiltrobcn.com!', formData.message, formData.phone, formData.name, formData.kiltro);
                if (req.status === 250) {
                    notify();
                    setIsLoading(false);
                }
            } catch (e) {
                console.log(e);
            }
        }else{
            setIsLoading(false);
        }
    }
    
    useEffect(() => {
        updateHomeData(data);
        
    }, [updateHomeData, data])
      
    if (!homeData) {
        return null;
    }

    // console.log(formData);
    
    return(
        <MainLayout>
            <ToastContainer />
            <div className="min-h-screen text-white">
                {/* <div className="h-[30vh] lg:h-80 flex justify-center items-center bg-[url('https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-contain"></div> */}
                {/* <div className="h-[10vh] lg:h-40 flex justify-center items-center bg-contain"></div> */}
                <h2 className="flex pt-24 justify-center py-5 font-bold uppercase md:text-2xl">
                    { lang === 'esp' && `Estamos aquí para ayudarte` }
                    { lang === 'eng' && 'We are here to help' }
                </h2>

                {/* <div>
                    {
                        formErrors && 
                        Object.entries(formErrors).map( error => (
                            <>
                            <span className="text-white" key={error[0]}> {error[0]} - {error[1]} </span>
                            <br />
                            </>
                        ))
                    }
                </div> */}
                <form className=" mx-10 md:mx-64 mt-10 xl:mx-96" onSubmit={handleOnSubmit}>
                    <div className="mb-6">
                        <label htmlFor="kiltro" className="block mb-2 text-sm font-medium text-white">
                            { lang === 'esp' && `Selecciona tu Kiltro restobar` }
                            { lang === 'eng' && 'Select your Kiltro restobar' }
                        </label>
                        <select 
                            id="kiltro" 
                            name="kiltro"
                            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-main focus:border-primary-main block w-full p-2.5"
                            onChange={e => handleOnChange(e)} 
                        >
                            <option value="sant antoni">Kiltro Sant Antoni</option>
                            <option value="Gracia">Kiltro Gracia</option>
                        </select>
                    </div>
                    <Input 
                        isRequired
                        lang={lang} 
                        type="text"
                        name="name" 
                        labelEsp="Nombre" 
                        labelEng="Your name" 
                        formData={formData} 
                        onChange={handleOnChange}
                        error={formErrors}
                        />
                    <Input 
                        isRequired
                        lang={lang} 
                        type="email"
                        name="email" 
                        placeHolder="example@example.com" 
                        labelEsp="Correo electrónico" 
                        labelEng="Your email" 
                        formData={formData} 
                        onChange={handleOnChange}
                        error={formErrors}
                    />
                    <Input 
                        lang={lang} 
                        type="number"
                        name="phone" 
                        labelEsp="Teléfono" 
                        labelEng="Your phone" 
                        formData={formData} 
                        onChange={handleOnChange}
                    />
                    <Input 
                        isRequired
                        lang={lang} 
                        labelEsp="Detállanos tu pregunta" 
                        labelEng="Your message" 
                        formData={formData} 
                        textArea
                        onChange={handleOnChange}
                        error={formErrors}
                    />
                    <button type="" className="bg-primary-dark w-full uppercase transition duration-200 hover:bg-primary-darkest py-4 px-10 text-white">
                        {
                            !isLoading 
                            ?
                            <>
                                { lang === 'esp' && `Enviar` }
                                { lang === 'eng' && 'Submit' }
                            </>
                            :
                            <Spinner />
                        }
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
  