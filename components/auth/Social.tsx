import React from 'react'
import { Button } from '../ui/button'
import {FcGoogle} from 'react-icons/fc'
import {FaGithub} from 'react-icons/fa'

const Social = () => {
  return (
    <div className='flex items-center w-full gap-x-2'>
        <Button
        variant={'outline'}
        className='w-full'
        size={'lg'}
        onClick={() => {}}
        >
            <FcGoogle />
        </Button>
        <Button
        variant={'outline'}
        className=' w-full'
        size={'lg'}
        onClick={() => {}}
        >
            <FaGithub />
        </Button>
    </div>
  )
}

export default Social