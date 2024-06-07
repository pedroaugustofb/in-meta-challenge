"use client";

import { useForm } from "react-hook-form";
import { LoginFormValues, schema } from "@/types/forms/login-form.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/auth.context";
import { useRouter } from "next/navigation";
import { LoginResponse } from "@/types/auth/login.dto";

export default function LoginForm() {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { toast } = useToast();
  const { setAuthentication } = useAuth();
  const router = useRouter();

  const erros = form.formState.errors;
  const isSubmitting = form.formState.isSubmitting;

  const onSubmit = async (data: LoginFormValues) => {
    try {
      // const response = await api.auth.login(data);

      // if (response.status !== 200) throw new Error("Failed to login");

      // setAuth({
      //   token: response.data.token,
      //   user: response.data.user,
      // });

      //TODO: Remove this mock
      const mock: LoginResponse = {
        token: "fake-token",
        user: {
          id: "1",
          email: "test@email.com",
          name: "Test User",
        },
      };

      setAuthentication(mock);

      toast({
        title: "Success!",
        description: "You have successfully logged in.",
      });

      return router.push("/");
    } catch (error) {
      console.log(error);
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

        <div className="flex justify-end">
          <Button
            type="button"
            onClick={() => {
              toast({
                title: "Feature not implemented",
                description: "This feature is not yet implemented.",
                variant: "default",
              });
            }}
            variant="link"
            className="hover:no-underline text-blue-700 hover:text-blue-700/80 hover:border-blue-700/80 border-b-2 rounded-none p-0 h-fit border-blue-700"
          >
            Forgot your password?
          </Button>
        </div>

        <Button type="submit" disabled={isSubmitting} className="my-2">
          {isSubmitting ? <Loader2 className="size-5 animate-spin" /> : "Login"}
        </Button>
      </form>
    </Form>
  );
}
