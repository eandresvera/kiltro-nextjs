import { useAppContext } from "@/components/context/AppContext";
import { MainLayout } from "@/components/layout/MainLayout";

const Contact = () => {

    const { homeData } = useAppContext();

    return(
        <MainLayout>Contact page</MainLayout>
    )

}

export default Contact;