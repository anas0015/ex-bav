"use client";
import React, { useState } from "react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion";
import { Button } from "./ui/button";
import PersonenForm from "./form/PersonenForm";
import Link from "next/link";
import { Mail } from "lucide-react";


export default function MasterDetails() {
    const [accordions, setAccordions] = useState([
        { id: 1, isOpen: false, formKey: 1 },
    ]);



    const addAccordion = () => {
        console.log("add Funktionert!!!")
        const newAccordionId = Math.max(...accordions.map((accordion) => accordion.id)) + 1;
        const newFormKey = Math.max(...accordions.map((accordion) => accordion.formKey)) + 1;
        const newAccorions = [...accordions, { id: newAccordionId, isOpen: true, formKey: newFormKey },
        ];
        setAccordions(newAccorions);
    }

    const deleteAccodion = (idToDelete: number) => {
        const updatedAccordions = accordions.filter((accordion) => accordion.id !== idToDelete);
        setAccordions(updatedAccordions);
    };

    const closeAccordion = (idToClose: number) => {
        console.log("Das Funktionier!!")
        console.log("ID to close = " + idToClose);


        const updatedAccordions = accordions.map((accordion) => {
            console.log("accordion.id = " + accordion.id);

            if (accordion.id === idToClose) {
                console.log("accordion ID === ID to Close")
                return { ...accordion, isOpen: false };
            } else {
                console.log("accordion ID != ID to close!!")
                return accordion;
            }
        });
        setAccordions(updatedAccordions);
    };

    return (
        <>
            <Accordion type="single" collapsible className="w-full"  >

                {accordions.map((accordion) => (

                    <AccordionItem key={accordion.id} value={`item-${accordion.id}`}>
                        <AccordionTrigger className="text-3xl">
                            Mitarbeiter {accordion.id}
                        </AccordionTrigger>
                        <AccordionContent>
                            <PersonenForm id={accordion.id} accordions={accordions} setAccordions={setAccordions} closeAccordion={closeAccordion} />
                        </AccordionContent>
                    </AccordionItem>

                ))}
            </Accordion>

            <div className="w-full flex justify-between mt-5">


                <Link href={"/vertrag"}>
                    <Button variant="destructive">Zurück</Button>
                </Link>

                <Button onClick={addAccordion}>
                    Mitarbeiter hinzufügen
                </Button>

                <Button type="submit" > <Mail className="mr-2 h-4 w-4" /> Vertrag Abschließen</Button>

            </div>
        </>
    )
}