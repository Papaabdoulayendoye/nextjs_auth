"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
interface LoginButtonProps {
    children : React.ReactNode,
    mode ?: 'modal' | "redirect",
    asChild ?: boolean
}

const LoginButton = (
    {   children,
        asChild,
        mode = 'redirect'
    }:LoginButtonProps) => {
    const router = useRouter()
    
    const Sign = () => {
        router.push('/auth/login')
    }
    if (mode == 'modal') {
        return (
            <span>TODO :: Implement modal</span>
        )
    }
    return (
        <span onClick={() => Sign && Sign()} className='cursor-pointer'>
            {children}
        </span>
    )
}

export default LoginButton