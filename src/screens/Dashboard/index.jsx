import React, { useState, useEffect } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

export default function Dashboard() {


    const [userDetails, setuserDetails] = useState([]);

    useEffect(() => {
        
        let user = localStorage.getItem('userDetails')
        
        setuserDetails(JSON.parse(user));
        console.log(userDetails)
    }, [])

    return (
        <>
            <Header />
            <div>
            <div>{userDetails.email}</div>
            <div>{userDetails.email}</div>
            <div>{userDetails.email}</div>
            <div>{userDetails.email}</div>
            <div>{userDetails.email}</div>
            </div>
            <Footer />
        </>
    )
}
