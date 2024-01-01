"use client"
import React, { useState } from 'react'
import CardWrapper  from './CardWrapper'
import {useForm} from 'react-hook-form'
import { LoginSchema } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import {Form, FormControl,FormItem,FormField,FormLabel,FormMessage, FormDescription} from '@/components/ui/form'
import { z } from 'zod'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Eye,EyeOff } from 'lucide-react'
import FormError from '../FormError'
import FormSuccess from '../FormSuccess'
const LoginForm = () => {
    const [showPDW,setshowPDW] = useState<boolean>(false)
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver : zodResolver(LoginSchema),
        defaultValues : {
            email : '',
            password : ''
        }
    })
    const onSubmit = (data : z.infer<typeof LoginSchema>) => {
        console.log("Data");
        console.log(data);
        
        
    }
    return (
        <CardWrapper 
        headrLabel='Welcome back' 
        backButtonHref='/auth/register' 
        backButtonLabel="Don't have an account?" 
        showSocial>
            <Form {...form}>
                <form 
                onSubmit={form.handleSubmit(onSubmit)}
                className='space-y-6'
                >
                    <div className='space-y-4'>
                        <FormField 
                            name='email' 
                            control={form.control}
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>
                                        Email
                                    </FormLabel>
                                    <FormControl>
                                        <Input {...field} type='email' placeholder="john.doe.example.com"/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                            />
                        <FormField 
                            name='password' 
                            control={form.control}
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>
                                        Password
                                    </FormLabel>
                                    <FormControl>
                                        <div className='flex justify-center items-center space-x-1'>
                                        <Input {...field} type={showPDW ? 'text' : 'password'} placeholder="******"/>
                                        <span onClick={() => setshowPDW(prev => !prev)} className='cursor-pointer'>
                                        {showPDW ? (
                                        <Eye className='h-4 w-4' />
                                        ) : (
                                            <EyeOff className='h-4 w-4' />
                                        )}
                                        </span>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                            />
                    </div>
                    {/* <FormError message='Something went wrong!' /> */}
                    {/* <FormSuccess message='Email send.' /> */}
                    <Button className='w-full'  size={'lg'} variant={'ghost'}>
                        Login
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}

export default LoginForm