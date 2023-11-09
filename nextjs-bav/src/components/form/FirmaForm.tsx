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

const FormSchema = z.object({
    firmaName: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    firmaStrasse: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    firmaHausnummer: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    firmaPlz: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    firmaOrt: z.string().min(2, {
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
    pep: z.enum(["ja", "nein"], {
        required_error: "You need to select a notification type.",
    }),

    zahlweise: z.object({
        zahlweise: z
            .string({
                required_error: "Please select an email to display.",
            })
            .email(),
    })
})



function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("submited")
}


const FirmaForm = () => {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    });




    return (
        <div className="mt-4 p-6 bg-white border w-11/12 h-max border-gray-200 rounded-lg shadow-2xl">
            <div className="mx-auto mb-4 my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
                <h1 className=" mb-2 text-2xl font-bold tracking-tight text-primary dark:text-white">Firma</h1>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
                    <FormField
                        control={form.control}
                        name="firmaName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Firma</FormLabel>
                                <FormControl>
                                    <Input className="w-full" placeholder="CodeCamp:N" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="grid grid-cols-2 gap-2">
                        <FormField
                            control={form.control}
                            name="firmaStrasse"
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
                            name="firmaHausnummer"
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
                            name="firmaPlz"
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
                            name="firmaOrt"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Ort</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Musterort" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div
                        className="mx-auto mb-4 my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
                        <h1 className=" mb-2 text-2xl font-bold tracking-tight text-primary dark:text-white">Vertrag</h1>
                    </div>

                    <FormField
                        control={form.control}
                        name="vertragsnummer"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Vertragsnummer</FormLabel>
                                <FormControl>
                                    <Input className="w-full" placeholder="12345" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="grid grid-cols-2 gap-2">
                        <FormField
                            control={form.control}
                            name="abschlussstelle"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Abschlussstelle</FormLabel>
                                    <FormControl>
                                        <Input className="w-full" placeholder="CodeCamp:N" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="betreuungsstelle"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Betreuungsstelle</FormLabel>
                                    <FormControl>
                                        <Input className="w-full" placeholder="CodeCamp:N" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <FormField
                            control={form.control}
                            name="inkassostelle"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Inkassostelle</FormLabel>
                                    <FormControl>
                                        <Input className="w-full" placeholder="CodeCamp:N" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="zahlweg"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Zahlweg</FormLabel>
                                    <FormControl>
                                        <Input className="w-full" placeholder="Lastschrift SEPA-Mandat" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="sonstigevereinbarug"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Sonstigevereinbarug</FormLabel>
                                <FormControl>
                                    <Input className="w-full" placeholder="BlaBla" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div
                        className="mx-auto mb-4 my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
                        <h1 className=" mb-2 text-2xl font-bold tracking-tight text-primary dark:text-white">Tarif</h1>
                    </div>

                    <FormField
                        control={form.control}
                        name="durchfuehrungsweg"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Durchführungsweg</FormLabel>
                                <FormControl>
                                    <Input className="w-full" placeholder="Direktversicherung" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="tarif"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Tarif</FormLabel>
                                <FormControl>
                                    <Input className="w-full" placeholder="NIR3201V" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="tarifstufe"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Tarifstufe</FormLabel>
                                <FormControl>
                                    <Input className="w-full" placeholder="K1" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="BReinschluss"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>B/BR-Einschluss</FormLabel>
                                <FormControl>
                                    <Input className="w-full" placeholder=" " {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="index"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Index</FormLabel>
                                <FormControl>
                                    <Input className="w-full" placeholder="DAX" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="indexbeteiligung"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Indexbeteiligung in %</FormLabel>
                                <FormControl>
                                    <Input className="w-full" placeholder="100%" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />


                    <FormField
                        control={form.control}
                        name="zahlweise"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Zahlweise</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue="nein">
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Wählen Sie ein Antwort" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="ja">Ja</SelectItem>
                                        <SelectItem value="nein">Nein</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />









                    <FormField
                        control={form.control}
                        name="beitragsdynamik"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Beitragsdynamik (3-20 % p. a.)</FormLabel>
                                <FormControl>
                                    <Input className="w-full" placeholder=" " {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="ueberschussverwendung"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Überschussverwendung nach Rentenbeginn</FormLabel>
                                <FormControl>
                                    <Input className="w-full" placeholder="teildynamische Bonusrente" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="rentenbeginnModus"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Rentenbeginn-Modus</FormLabel>
                                <FormControl>
                                    <Input className="w-full" placeholder="gesetzlicher Rentenbeginn" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="endalterHauptversicherung"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Endalter (Hauptversicherung)</FormLabel>
                                <FormControl>
                                    <Input className="w-full" placeholder="67" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="BRendalter"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>B/BR-Endalter</FormLabel>
                                <FormControl>
                                    <Input className="w-full" placeholder=" " {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="BRbedingungen"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>B/BR: BU-Bedingungen</FormLabel>
                                <FormControl>
                                    <Input className="w-full" placeholder=" " {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />


                    <FormField
                        control={form.control}
                        name="pep"
                        render={({ field }) => (
                            <FormItem className="space-y-3">
                                <FormLabel>PEP</FormLabel>
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
                                                Ja
                                            </FormLabel>
                                        </FormItem>

                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="nein" />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                Nein
                                            </FormLabel>
                                        </FormItem>
                                    </RadioGroup>
                                </FormControl>
                                <FormDescription>ein gesetzl. Vertreter bzw. Mitglied des Vertretungsorgans des VN, eine VP oder ggf. mitvers. Person ist eine pol. exponierte Person.</FormDescription> {/* Hinzugefügte Beschreibung */}

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex justify-end">
                        <Link href={"/mitarbeiter"}>
                            <Button type="submit" >Next</Button>
                        </Link>
                    </div>

                </form>
            </Form>
        </div>
    )
};

export default FirmaForm