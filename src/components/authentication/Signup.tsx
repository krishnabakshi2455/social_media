import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Toaster, toast } from 'sonner';


const SignUp = () => {

    const formSchema = z.object({
        username: z.string().min(2).max(50),
        useremail: z.string().email(),
        userpassword: z.string().min(4,{
            message: 'Password must be at least 4 characters long',
        }).max(20,{
            message: 'Password must be at most 20 characters long',
        }),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            useremail: "",
            userpassword: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        const username=values.username
        const useremail = values.useremail
        const userpassword = values.userpassword

        const url = import.meta.env.VITE_BACKEND_URL + "/signup";
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, useremail, userpassword }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                // Attempt to parse JSON response
                return response.text().then((text) => {
                    try {
                        return JSON.parse(text); // If valid JSON, return parsed object
                    } catch {
                        return text; // Otherwise, return raw text
                    }
                });
            })
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        
        toast.success('SignUp Succesfull')
        // toast('✅ SignUp Succesfull')
    }

    return (
        <div className=" flex md:w-full w-full items-center md:items-start justify-center p-4">
            <div className="bg-gray-950 rounded-lg text-white md:p-10 p-4 flex md:w-96 h-96 w-full justify-center items-center  flex-col mt-10 md:mt-0">
                <div>
                    <h1 className=" underline text-2xl font-semibold font-sans">Sign Up</h1>
                </div>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4  w-full">
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Please enter your name" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="useremail"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email Id</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Please enter your Email" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="userpassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Please enter your Password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" variant="custom1">Submit</Button>
                    </form>
                </Form>
                <Toaster />
            </div>
        </div>
    )
}

export default SignUp
