import React from 'react'
import CardWrapper  from './CardWrapper'

const LoginForm = () => {
    return (
        <CardWrapper 
        headrLabel='Welcome back' 
        backButtonHref='/auth/register' 
        backButtonLabel="Don't have an account?" 
        showSocial>
            LoginForm
        </CardWrapper>
    )
}

export default LoginForm