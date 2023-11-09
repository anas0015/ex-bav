"use client";
import PersonenForm from "@/components/form/PersonenForm";

export default function Page({ params }: { params: { mitarbeiterID: string } }) {  
    return (
    <>
           <div className="bg-white top-0 mt-6 p-6  border w-11/12  border-gray-200 rounded-lg shadow-2xl flex flex-col items-center"> 
                <p className=" mb-2 text-4xl font-bold tracking-tight text-primary dark:text-white">Mitarbeiter {params.mitarbeiterID} bearbeiten</p>
                <PersonenForm id={+params.mitarbeiterID} accordions={[]} />
           </div>
        <h1>Mitarbeiter ID : {params.mitarbeiterID} </h1>
    </>
    )
}