'use client'
import React from 'react'
import Calendar from 'reactjs-availability-calendar'
import "./page.css"

export default function calendar2() {
    const bookings = [
        {
          from: new Date('2023-07-03'),
          to: new Date('2023-07-28'),
          middayCheckout: true,
        },
        {
          from: '2023-04-08',
          to: '2023-04-13',
          middayCheckout: true,
        },
        {
          from: '2023-09-03T19:20:35.593Z',
          to: '2023-09-22T19:20:35.593Z',
          middayCheckout: false,
        },
      ]
    
      return (
        <Calendar bookings={bookings} />
      )
}