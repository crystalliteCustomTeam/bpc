"use client"
// React Hook Form
import { useForm } from "react-hook-form"
// Zod
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
// Components
import { Form, FormControl, FormField, FormItem, FormMessage, Button, Input, Textarea, FormLabel } from "@/components"
import { useState } from "react"
// Next
import { useRouter } from "next/navigation"

const formSchema = z.object({
    name: z.string().min(1, {
        message: "name cannot be empty",
    }),
    phone: z.string({
        required_error: "phone is required",
        invalid_type_error: "phone must be a string",
    }).min(7, {
        message: "phone must be at least 7 characters.",
    }).max(14, {
        message: "phone must be at most 14 characters.",
    }).regex(/^\d+$/, {
        message: "phone number can only contain digits.",
    }),
    email: z.string().email({
        message: "please use a valid email",
    }),
    message: z.string(),
});

const FrontEndForm = () => {
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            phone: "",
            email: "",
            message: "",
        },
    })
    const handleSubmit = async (values) => {
        setLoading(true)
        try {
            const response = await fetch("/api/leads", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            })

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }
            router.push('/')
        } catch (error) {
            console.error("Error:", error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="grid grid-cols-1 gap-5">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Full Name <span className="text-primary">*</span></FormLabel>
                            <FormControl>
                                <Input placeholder="Type Full Name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email Address <span className="text-primary">*</span></FormLabel>
                            <FormControl>
                                <Input placeholder="Type Email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Phone <span className="text-primary">*</span></FormLabel>
                            <FormControl>
                                <Input placeholder="(000) 000-0000" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Details</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Type Full Details..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">
                    {loading ? "Loading..." : "Submit"}
                </Button>
            </form>
        </Form>
    )
}

export default FrontEndForm