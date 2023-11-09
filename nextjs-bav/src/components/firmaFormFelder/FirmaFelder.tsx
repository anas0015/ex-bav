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
})


function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("submited")
}

const FirmaDaten = () => {

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    });

    return (
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
            </form>
        </Form>
    )
}
export default FirmaDaten;