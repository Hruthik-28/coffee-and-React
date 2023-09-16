import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
    return (
        <div className='text-center text-4xl p-4 bg-slate-500 ml-10 mr-10 rounded-lg'>
            <h1 className=''>Hello User: {userid}</h1>
        </div>
    )
}

export default User
