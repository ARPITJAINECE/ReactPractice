import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

export const Users = () => {
  const [searchParams, setSearcchParams] = useSearchParams()
  const showActiveUsers = searchParams.get('filter') === 'active'
  return (
    <div>
      <h2>User 1</h2>
      <h2>User 2</h2>
      <h2>User 3</h2>
      <Outlet></Outlet>
      <div>
        <button onClick={() => setSearcchParams({ filter: 'active' })}>Active Users</button>
        <button onClick={() => setSearcchParams()}>Reset Filters</button>
      </div>
      {
        showActiveUsers ? <h2>Showing Active Users</h2> : <h2>Showiing All Users</h2>
      }
    </div>
  )
}
