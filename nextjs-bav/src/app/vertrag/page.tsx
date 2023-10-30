import FirmaForm from "../components/form/FirmaForm";

const page = () => {
    return ( 
        <div className="p-6 bg-white border w-11/12 h-max border-gray-200 rounded-lg shadow-2xl "> 
        <p className=" mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Neurer Antrag</p>
            <FirmaForm /> 
        </div>
    )
};

export default page;