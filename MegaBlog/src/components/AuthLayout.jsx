import React, {useEffect, useState} from 'react'
import { UseSelector, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({children, authentication = true}){
    const navigate = useNavigate()
    const [loader, setloader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        // TODO make it more easy
        // if (authStatus === true) {
        //     navigate('/')
        // }else if (authStatus === false) {
        //     navigate('/login')
        // }

        // or 
        
        // let authValue = authStatus === true ? true : false
        
        if (authentication && authStatus !== authentication) {
            navigate('/login')
        }else if(!authentication && authStatus !== authentication){
            navigate('/')
        }
        setloader(false)

    }, [authStatus, navigate, authentication])
    return loader ? <h1>Loading .....</h1> : {children}
}
