import z from 'zod'

export const LoginSchema = z.object({
    email : z.string().email({message : 'Email is required.'}),
    password : z.string().min(4,{
        message : 'Password is required'
    })
})
export const RegisterSchema = z.object({
    email : z.string().email({message : 'Email is required.'}),
    password : z.string().min(4,{
        message : 'Password is required, must be at least 4 characters.'
    }),
    name : z.string().min(4,{
        message : 'your name must be at least 4 characters.'
    })
})