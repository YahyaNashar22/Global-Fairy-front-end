import React from 'react'
import DashboardAppBar from '../components/Dashboard/AppBa'

export default function DashboardLayout({children}) {
  return (
    <>
     <DashboardAppBar/>
     {children}
    </>
  )
}
