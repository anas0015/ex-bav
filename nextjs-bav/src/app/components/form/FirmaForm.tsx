'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import {  FormProvider, useForm } from "react-hook-form";
import * as  z  from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

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



const FirmaForm = () => {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    });




    return (
    <div className="p-6 bg-white
    border w-11/12 h-max border-gray-200 rounded-lg shadow-2xl">    
      <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
      <p className=" mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Firma</p>
      </div>
      <FormProvider {...form}>
        <form className="w-full space-y-6">
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
                  <Input placeholder="Musterstraße" {...field} />
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
          <Button type="submit">Submit</Button>
        </form>
      </FormProvider>
    </div>
  )
};

export default FirmaForm