'use client';

import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import * as  z from "zod";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const FormSchema = z.object({
    vorname: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    nachname: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    strasse: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    hausnummer: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    plz: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    ort: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    vertragsnummer: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    abschlussstelle: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    betreuungsstelle: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    inkassostelle: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    zahlweg: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    sonstigevereinbarug: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    durchfuehrungsweg: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    tarif: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    tarifstufe: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    BReinschluss: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    index: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    indexbeteiligung: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    beitragsdynamik: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    ueberschussverwendung: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    rentenbeginnModus: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    endalterHauptversicherung: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    BRendalter: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    BRbedingungen: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    rentenGarantieZeit: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    gesamtBeitrag: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    beruf: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    beitragSumme: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    arbeitgeberzuschuss: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    alterBeiVersicherungsbeginn: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    arbeitgeberbeitrag: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    geschlecht: z.enum(["männlich", "weiblich"], {
        required_error: "You need to select a notification type.",
    }),
    nationalitaet: z.object({
        nationalitaet: z
            .string({
                required_error: "Please select an countray to display.",
            })
    }),
    dob: z.date({
        required_error: "A date of birth is required.",
    }),
    versicherungsbeginn: z.date({
        required_error: "A date of birth is required.",
    }),
    entgeltUmwandlung: z.date({
        required_error: "A date of birth is required.",
    }),
    rentenBeginn: z.date({
        required_error: "A date of birth is required.",
    }),
})


function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("submited")
}

const PersonenForm = ({ id, accordions }: { id: number, accordions: Array<any>}) => {



    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    });

    return (
        <div className="mt-4 p-6 bg-white border w-full h-max border-gray-200 rounded-lg shadow-2xl">
            <div className="mx-auto mb-4 my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
                <h1 className=" mb-2 text-2xl font-bold tracking-tight text-primary dark:text-white">Persönliche Inofrmationen</h1>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">

                    <div className="grid grid-cols-2 gap-2">
                        <FormField
                            control={form.control}
                            name="vorname"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Vorname</FormLabel>
                                    <FormControl>
                                        <Input className="w-full" placeholder="Max" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="nachname"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nachname</FormLabel>
                                    <FormControl>
                                        <Input className="w-full" placeholder="Mustermann" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                        <FormField
                            control={form.control}
                            name="dob"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel>Geburtsdatum</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "w-full pl-3 text-left font-normal",
                                                        !field.value && "text-muted-foreground"
                                                    )}
                                                >
                                                    {field.value ? (
                                                        format(field.value, "yyyy-MM-dd")
                                                    ) : (
                                                        <span>Ihr Geburtstag</span>
                                                    )}
                                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar
                                                mode="single"
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="geschlecht"
                            render={({ field }) => (
                                <FormItem className="space-y-3">
                                    <FormLabel>Geschlecht</FormLabel>
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            className="flex flex-raw space-y-1">

                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="ja" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Männlich
                                                </FormLabel>
                                            </FormItem>

                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="nein" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Weiblich
                                                </FormLabel>
                                            </FormItem>
                                        </RadioGroup>
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                    </div>

                    <div className="grid grid-cols-2 gap-2">
                        <FormField
                            control={form.control}
                            name="strasse"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Straße</FormLabel>
                                    <FormControl>
                                        <Input className="w-full" placeholder="Musterstraße" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="hausnummer"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Hausnummer</FormLabel>
                                    <FormControl>
                                        <Input placeholder="1" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <FormField
                            control={form.control}
                            name="plz"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>PLZ</FormLabel>
                                    <FormControl>
                                        <Input placeholder="90518" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="ort"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Wohnort (Hauptsitz)</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Musterort" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>


                    <FormField
                        control={form.control}
                        name="nationalitaet"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Staatsangehörigkeit</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue="deutsch">
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Wählen Sie Ihren Staatsangehörigkeit" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="deutsch">Deutsch</SelectItem>
                                        <SelectItem value="oesterreichisch">Österreichisch</SelectItem>
                                        <SelectItem value="schweiz">Schweiz</SelectItem>

                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />


                    <div className="mx-auto mb-4 my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
                        <h1 className=" mb-2 text-2xl font-bold tracking-tight text-primary dark:text-white">Sonstiges</h1>
                    </div>

                    <div className="grid grid-cols-2 gap-2">

                        <FormField
                            control={form.control}
                            name="gesamtBeitrag"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Gesamtbeitrag gem. Zahlweise in €</FormLabel>
                                    <FormControl>
                                        <Input className="w-full" placeholder="115,00 €" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />


                        <FormField
                            control={form.control}
                            name="versicherungsbeginn"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel>Versicherungsbeginn</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "w-full pl-3 text-left font-normal",
                                                        !field.value && "text-muted-foreground"
                                                    )}
                                                >
                                                    {field.value ? (
                                                        format(field.value, "yyyy-MM-dd")
                                                    ) : (
                                                        <span>JJJJ-MM-TT</span>
                                                    )}
                                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar
                                                mode="single"
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                        <FormField
                            control={form.control}
                            name="rentenGarantieZeit"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Rentengarantiezeit</FormLabel>
                                    <FormControl>
                                        <Input className="w-full" placeholder="27" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="beruf"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Beruf (Tätigkeit)</FormLabel>
                                    <FormControl>
                                        <Input className="w-full" placeholder="Informatiker" {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>


                    <div className="grid grid-cols-2 gap-2">
                        <FormField
                            control={form.control}
                            name="beitragSumme"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Beitragssumme</FormLabel>
                                    <FormControl>
                                        <Input className="w-full" placeholder="27" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        (Ohne Dynamik)
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="entgeltUmwandlung"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel>Entgeltumwandlung</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "w-full pl-3 text-left font-normal",
                                                        !field.value && "text-muted-foreground"
                                                    )}
                                                >
                                                    {field.value ? (
                                                        format(field.value, "yyyy-MM-dd")
                                                    ) : (
                                                        <span>JJJJ-MM-TT</span>
                                                    )}
                                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar
                                                mode="single"
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                    <FormDescription>
                                        Monat der ersten Umwandlung
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                        <FormField
                            control={form.control}
                            name="rentenBeginn"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel>Rentenbeginn</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "w-full pl-3 text-left font-normal",
                                                        !field.value && "text-muted-foreground"
                                                    )}
                                                >
                                                    {field.value ? (
                                                        format(field.value, "yyyy-MM-dd")
                                                    ) : (
                                                        <span>JJJJ-MM-TT</span>
                                                    )}
                                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar
                                                mode="single"
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="alterBeiVersicherungsbeginn"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Alter bei Vericherungsbeginn</FormLabel>
                                    <FormControl>
                                        <Input className="w-full" placeholder="42" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                        <FormField
                            control={form.control}
                            name="arbeitgeberzuschuss"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Arbeitgeberzuschuss in €</FormLabel>
                                    <FormControl>
                                        <Input className="w-full" placeholder="27,15" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        im Gesamtbeitrag enthalten
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="arbeitgeberbeitrag"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Arbeitgeberbeitrag in €</FormLabel>
                                    <FormControl>
                                        <Input className="w-full" placeholder="18,30" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        im Gesamtbeitrag enthalten
                                    </FormDescription>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="flex justify-between">
                        <Link href={"/mitarbeiter"}>
                        <Button type="button" variant="destructive">Zurück</Button>
                        </Link>
                       
                       <Link href={'mitarbeiter/' + id.toString()}>
                         <Button type="button">Bearbeiten</Button>
                       </Link>


                    </div>
                </form>
            </Form>
        </div>
    )
};

export default PersonenForm;