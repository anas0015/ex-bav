'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import * as  z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

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

const VertragForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  return (
    <>
      <div className="mx-auto flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
        <p className=" mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Vertrag</p>
      </div>



      <FormProvider {...form}>
        <form className="w-full space-y-6">
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
      </FormProvider>

    </>
  )
}
export default VertragForm
