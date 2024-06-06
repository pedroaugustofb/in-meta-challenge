"use client";

import { useForm } from "react-hook-form";
import { RegisterFormValues, schema } from "@/types/forms/register-form.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useDialog } from "@/hooks/useDialog";
import { api } from "@/api";
import { RegisterDto } from "@/types/auth/register.dto";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

export default function RegisterForm() {
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  const { toast } = useToast();

  const erros = form.formState.errors;
  const isSubmitting = form.formState.isSubmitting;

  const { onOpenChange: openDialog } = useDialog({ id: "success-register" });

  const onSubmit = async (data: RegisterFormValues) => {
    try {
      const body: RegisterDto = {
        name: data.name,
        email: data.email,
        password: data.password,
      };

      const response = await api.auth.register(body);

      if (response.status === 201) openDialog();

      throw new Error("Failed to register");
    } catch (error) {
      toast({
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        variant: "destructive",
      });
    }
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
                <Input placeholder="Enter your name" autoComplete="username" {...field} />
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
                <Input placeholder="Enter your email" autoComplete="email" {...field} />
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
                  <Input type="password" autoComplete="new-password" placeholder="Enter your password" {...field} />
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
                  <Input type="password" autoComplete="new-password" placeholder="Enter your chosen password" {...field} />
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
          )}
        />

        <Button type="submit" variant="secondary" className="my-2" disabled={!form.watch("terms")}>
          {isSubmitting ? <Loader2 className="size-5 animate-spin" /> : <>Register</>}
        </Button>
      </form>
    </Form>
  );
}
