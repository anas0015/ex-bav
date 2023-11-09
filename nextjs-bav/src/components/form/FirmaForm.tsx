'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as  z from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import React from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import Link from "next/link";
import FirmaDaten from "../firmaFormFelder/FirmaFelder";
import VertragsDaten from "../firmaFormFelder/VertragsFelder";
import TarifFelder from "../firmaFormFelder/TarifFelder";






const FirmaForm = () => {


    return (
        <div className="mt-4 p-6 bg-white border w-11/12 h-max border-gray-200 rounded-lg shadow-2xl">
            <div className="mx-auto mb-4 my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
                <h1 className=" mb-2 text-2xl font-bold tracking-tight text-primary dark:text-white">Firma</h1>
            </div>
                <form  className="w-full space-y-6">

                    <FirmaDaten />

                    <div
                        className="mx-auto mb-4 my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
                        <h1 className=" mb-2 text-2xl font-bold tracking-tight text-primary dark:text-white">Vertrag</h1>
                    </div>

                    <VertragsDaten />

                    <div
                        className="mx-auto mb-4 my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
                        <h1 className=" mb-2 text-2xl font-bold tracking-tight text-primary dark:text-white">Tarif</h1>
                    </div>

                    <TarifFelder />

                    <div className="flex justify-end">
                        <Link href={"/mitarbeiter"}>
                            <Button type="submit" >Next</Button>
                        </Link>
                    </div>

                </form>
        </div>
    )
};

export default FirmaForm