import React from "react";
import MasterDetails from "../../components/masterDetails"

const page = () => {
    return ( 
        <div className="bg-white top-0 mt-6 p-6  border w-11/12  border-gray-200 rounded-lg shadow-2xl flex flex-col items-center"> 
            <p className=" mb-2 text-4xl font-bold tracking-tight text-primary dark:text-white">Mitarbeiter Übersicht</p>
             <MasterDetails/>
            </div>
    )
};

export default page;