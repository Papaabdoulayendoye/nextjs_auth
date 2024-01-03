"use client"
import React, { useState,useTransition } from 'react'
import CardWrapper  from './CardWrapper'
import {useForm} from 'react-hook-form'
import { RegisterSchema } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import {Form, FormControl,FormItem,FormField,FormLabel,FormMessage} from '@/components/ui/form'
import { z } from 'zod'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Eye,EyeOff, Loader2 } from 'lucide-react'
import FormError from '../FormError'
import FormSuccess from '../FormSuccess'
import { register } from '@/actions/register'

const RegisterForm = () => {
    const [error,setError] = useState<string | undefined>()
    const [success,setSuccess] = useState<string | undefined>()
    const [showPDW,setshowPDW] = useState<boolean>(false)
    const [isPending,startTransition] = useTransition()

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver : zodResolver(RegisterSchema),
        defaultValues : {
            name : '',
            email : '',
            password : ''
        }
    })
    const onSubmit = (data : z.infer<typeof RegisterSchema>) => {
        startTransition(() => {
            register(data).then(data => {
                setError(data.error)
                setSuccess(data.success)
            })
        })
    }
    return (
        <CardWrapper 
        headrLabel='Create an account' 
        backButtonHref='/auth/login' 
        backButtonLabel="Already have an account?" 
        showSocial>
            <Form {...form}>
                <form 
                onSubmit={form.handleSubmit(onSubmit)}
                className='space-y-6'
                >
                    <div className='space-y-4'>
                        <FormField 
                            name='name' 
                            control={form.control}
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>
                                        Name
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            disabled={isPending} 
                                            {...field} type='text' 
                                            placeholder="John Doe"/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                            />
                        <FormField 
                            name='email' 
                            control={form.control}
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>
                                        Email
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            disabled={isPending} 
                                            {...field} type='email' 
                                            placeholder="john.doe.example.com"/>
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
                                        <Input {...field} disabled={isPending} type={showPDW ? 'text' : 'password'} placeholder="******"/>
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
                    <FormError message={error} />
                    <FormSuccess message={success} />
                    <Button className='w-full'  size={'lg'} disabled={isPending} >
                        {isPending ? (<Loader2 className=' h-4 w-4 animate-spin' />): 'Register'}
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}

export default RegisterForm