"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { LoginSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import * as z from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"


const LoginForm = () => {
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    });

    return (

        <CardWrapper
            headerLabel="Welcome back"
            backButtonLabel="Don't have an account ?"
            backButtonHref="/auth/register"
            showSocial
        >
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(() => { })}
                    className="space-y-6"
                >
                    <div className="space-y-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>

                                    <FormControl>

                                        <Input
                                            {...field}
                                            type="email"
                                            placeholder="john.doe@example.com"
                                        />
                                    </FormControl>
                                    <FormMessage/>

                                </FormItem>


                            )}

                        />
                    </div>


                </form>

            </Form>

        </CardWrapper>
    )
}




export default LoginForm;