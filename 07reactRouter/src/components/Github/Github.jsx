import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch(`https://api.github.com/users/Hruthik-28`)
    //     .then((res) => res.json())
    //     .then((data) => setData(data)
    //     )
    //     console.log(data);
    // }, [])
    return(
        <div className='text-center m-4 p-10 text-3xl flex-col'>
            <h1 className='mb-2 font-extrabold'>Github Followers: {data.followers}</h1>
            <img src={data.avatar_url} alt="img" className='cursor-pointer inline-flex rounded-full' width={250} />
            
        </div>
    )
}

export default Github

export const githubInfoloader = async () => {
    const response = await fetch('https://api.github.com/users/Hruthik-28')
    return response.json()
}