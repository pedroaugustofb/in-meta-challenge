"use client";

import { useForm } from "react-hook-form";
import { RegisterFormValues, schema } from "@/types/forms/register-form.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useDialog } from "@/hooks/useDialog";

export default function RegisterForm() {
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(schema),
  });

  const erros = form.formState.errors;

  const { onOpenChange: openDialog } = useDialog({ id: "success-register" });

  const onSubmit = (data: RegisterFormValues) => {
    console.log(data);

    //TODO: use InMeta API to register user

    openDialog();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
              </FormControl>
              {erros.name && <FormMessage>{erros.name.message}</FormMessage>}
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              {erros.email && <FormMessage>{erros.email.message}</FormMessage>}
            </FormItem>
          )}
        />

        <div className="grid sm:grid-cols-2 gap-5">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Enter your password" {...field} />
                </FormControl>
                {erros.password && <FormMessage>{erros.password.message}</FormMessage>}
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password Confirmation</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Enter your chosen password" {...field} />
                </FormControl>
                {erros.confirmPassword && <FormMessage>{erros.confirmPassword.message}</FormMessage>}
              </FormItem>
            )}
          />

          <FormDescription className="sm:col-span-2">
            Your password must be at least 6 characters. We recommend using a mix of letters, numbers and special characters for a stronger password
          </FormDescription>
        </div>

        <FormField
          control={form.control}
          name="terms"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 pt-2">
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Accept terms and conditions</FormLabel>
                <FormDescription>You agree to our Terms of Service and Privacy Policy.</FormDescription>
              </div>
            </FormItem>

            // <FormItem className="flex gap-2">
            //   <FormControl>
            //     <Checkbox checked={field.value} onCheckedChange={field.onChange} />
            //   </FormControl>
            //   <FormDescription>
            //     I agree to the{" "}
            //     <span className="text-blue-700 duration-300 cursor-pointer hover:text-blue-800 border-b-2 border-blue-800">terms and conditions.</span>
            //   </FormDescription>
            //   {erros.terms && <FormMessage>{erros.terms.message}</FormMessage>}
            // </FormItem>
          )}
        />

        <Button type="submit" variant="secondary" className="my-2" disabled={!form.watch("terms")}>
          Register
        </Button>
      </form>
    </Form>
  );
}
