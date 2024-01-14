import React from 'react'
import { useNavigate } from 'react-router-dom'

export const OrderSummary = () => {
    const navigate = useNavigate()
    return (
        <>
            <div>Order Confirmed!!!</div>
            {/* here we use -1 value in the navigate tag of the to go the previous page */}
            <button onClick={() => navigate(-1)}>BACK</button>

        </>
    )
}
