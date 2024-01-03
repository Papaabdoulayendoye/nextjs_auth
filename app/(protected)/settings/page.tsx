import React from 'react'
import { auth, signOut } from '@/auth'
import { Button } from '@/components/ui/button'
const Settingpage = async () => {
    const session = await auth()
    const user = session?.user
    return (
      <>
      <div>Session {user?.name}</div>
      <form action={ async () => {
        "use server";
        await signOut();
      }}>
        <Button className='' type='submit'  size={'lg'} >
          Sign out
        </Button>
      </form>
      </>
    )
}

export default Settingpage