import React from "react";
import PersonenForm from "../components/form/PersonenForm";


const page = () => {
    return ( 
        <div className="bg-white top-0 mt-6 p-6  border w-11/12  border-gray-200 rounded-lg shadow-2xl flex flex-col items-center"> 
            <p className=" mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Neurer Antrag</p>
            <PersonenForm /> 
        </div>
    )
};

export default page;