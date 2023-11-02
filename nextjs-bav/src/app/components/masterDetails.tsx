"use client";
import React, { useState } from "react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion";
import { Button } from "./ui/button";
import PersonenForm from "./form/PersonenForm";


export default function MasterDetails() {
    const [accordions, setAccordions] = useState([
        { id: 1, isOpen: false, formKey: 1 },
    ]);



    const addAccordion = () => {
        const newAccordionId = Math.max(...accordions.map((accordion) => accordion.id)) + 1;
        const newFormKey = Math.max(...accordions.map((accordion) => accordion.formKey)) + 1;
        const newAccorions = [...accordions, { id: newAccordionId, isOpen: true, formKey: newFormKey },
        ];
        setAccordions(newAccorions);
    }

    return (
        <>
            <Accordion type="single" collapsible className="w-full"  >

                {accordions.map((accordion) => (

                    <AccordionItem key={accordion.id} value={`item-${accordion.id}`}>
                        <AccordionTrigger className="text-3xl">Mitarbeiter {accordion.id}</AccordionTrigger>
                        <AccordionContent>
                            <PersonenForm key={accordion.id} />
                        </AccordionContent>
                    </AccordionItem>

                ))}


            </Accordion>
            <div className="mt-5">
                <Button onClick={addAccordion}>
                    Mitarbeiter hinzufügen

                </Button>
            </div>
        </>
    )
}