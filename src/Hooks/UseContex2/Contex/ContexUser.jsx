import React, { useEffect, useState } from 'react'
import CreatContext from './CreatContex'
import axios from 'axios'

export const ContexUser = ({children}) => {
    const [photo, setPhoto] = useState([])
    const getPhoto = async () => {
        const baseUrl = 'https://jsonplaceholder.typicode.com'
        const res = await axios.get(`${baseUrl}/photos`)
        
        setPhoto(res?.data)
        
    }

    useEffect(() => {
        getPhoto()
    }, [])
  return (
    <CreatContext.Provider value={photo}>
        {children}
    </CreatContext.Provider>
        
  )
}
