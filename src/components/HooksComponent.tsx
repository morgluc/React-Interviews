import { useEffect } from 'react'
import { fetchUsers, type User } from '../api/mockApi'

// NOTE: Use the fetchUsers(filter) function from mockApi.ts for data fetching
// It returns a Promise<User[]> and simulates a 500ms network delay

function HooksComponent() {

  return (
    <div className="component-box">
      <h2>Hooks Component</h2>
      <p>Convert the class component to use hooks here!</p>
    </div>
  )
}

export default HooksComponent
