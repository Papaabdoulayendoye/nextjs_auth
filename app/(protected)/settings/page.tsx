import React from 'react'
import { auth } from '@/auth'
const Settingpage = async () => {
    const session = await auth()
  return (
    <div>Session {JSON.stringify(session)}</div>
  )
}

export default Settingpage