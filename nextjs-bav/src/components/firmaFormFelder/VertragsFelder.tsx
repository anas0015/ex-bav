'use Client';

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
})


function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("submited")
}

const VertragsDaten = () => {

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    });

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
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
            </form>
        </Form>
    )
}
export default VertragsDaten;