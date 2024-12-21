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
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Toaster, toast } from 'sonner';


const Login = () => {

    const formSchema = z.object({
        username: z.string().min(2).max(50),
        userpassword: z.string().min(4, {
            message: 'Password must be at least 4 characters long',
        }).max(20, {
            message: 'Password must be at most 20 characters long',
        }),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            userpassword: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
        toast.success('Login Succesfull')
    }

  return (
    <div className=" flex md:w-full w-full items-center justify-center p-4">
          <div className="bg-gray-950 rounded-lg text-white md:p-10 p-4 flex md:w-96 w-full justify-center items-center flex-col mt-32">
              <div>
                  <h1 className=" underline text-2xl font-semibold font-sans">Login</h1>
              </div>

              <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
                      <FormField
                          control={form.control}
                          name="username"
                          render={({ field }) => (
                              <FormItem>
                                  <FormLabel>Username</FormLabel>
                                  <FormControl>
                                      <Input placeholder="Please enter your name" {...field} />
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
                              </FormItem>
                          )}
                      />
                      <Button type="submit" variant="custom1">Submit</Button>
                  </form>
              </Form>

              <div>
                
              </div>
              <Toaster />
          </div>
    </div>
  )
}

export default Login
