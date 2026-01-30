import { Component } from 'react'

/**
 * ClassComponent - Interview Exercise Reference Implementation
 * 
 * This component demonstrates the following React class-based patterns:
 * 
 * FEATURES TO REPLICATE:
 * 1. State Management:
 *    - Counter with increment/decrement/reset functionality
 *    - User list with async data fetching
 *    - Loading state during API calls
 *    - Text filter for searching users
 *    - Timer that increments every second
 * 
 * 2. Lifecycle Methods:
 *    - componentDidMount: Fetches initial user data and starts interval timer
 *    - componentDidUpdate: Logs count changes and refetches users when filter changes
 *    - componentWillUnmount: Cleans up interval to prevent memory leaks
 * 
 * 3. Event Handlers:
 *    - Button click handlers for counter operations
 *    - Input change handler for filter
 * 
 * 4. Async Operations:
 *    - Simulated API call with loading state
 *    - Filter-based user search
 * 
 * 5. Cleanup:
 *    - Proper interval cleanup on unmount
 * 
 * EXPECTED BEHAVIOR:
 * - Counter starts at 0 and can be incremented, decremented, or reset
 * - Timer auto-increments every second
 * - Users are fetched on mount and filtered when search input changes
 * - Loading indicator shows during data fetch
 * - Console logs track component lifecycle and count changes
 */

interface User {
  id: number
  name: string
  email: string
}

interface ClassComponentState {
  count: number
  users: User[]
  loading: boolean
  filter: string
  timer: number
}

class ClassComponent extends Component<{}, ClassComponentState> {
  private intervalId: number | null = null

  constructor(props: {}) {
    super(props)
    this.state = {
      count: 0,
      users: [],
      loading: false,
      filter: '',
      timer: 0
    }
  }

  componentDidMount(): void {
    // Simulating data fetch on mount
    this.fetchUsers()
    
    // Setting up an interval timer
    this.intervalId = window.setInterval(() => {
      this.setState(prevState => ({ timer: prevState.timer + 1 }))
    }, 1000)
  }

  componentDidUpdate(prevProps: {}, prevState: ClassComponentState): void {
    // Log when count changes
    if (prevState.count !== this.state.count) {
      console.log(`Count changed from ${prevState.count} to ${this.state.count}`)
    }
    
    // Refetch users when filter changes
    if (prevState.filter !== this.state.filter) {
      this.fetchUsers()
    }
  }

  componentWillUnmount(): void {
    // Cleanup interval
    if (this.intervalId !== null) {
      clearInterval(this.intervalId)
    }
    console.log('Class Component Unmounted')
  }

  fetchUsers = async (): Promise<void> => {
    this.setState({ loading: true })
    
    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 500))
    
    const mockUsers: User[] = [
      { id: 1, name: 'Alice Johnson', email: 'alice@example.com' },
      { id: 2, name: 'Bob Smith', email: 'bob@example.com' },
      { id: 3, name: 'Charlie Brown', email: 'charlie@example.com' },
    ]
    
    const filteredUsers = this.state.filter
      ? mockUsers.filter(u => u.name.toLowerCase().includes(this.state.filter.toLowerCase()))
      : mockUsers
    
    this.setState({ users: filteredUsers, loading: false })
  }

  handleIncrement = (): void => {
    this.setState(prevState => ({ count: prevState.count + 1 }))
  }

  handleDecrement = (): void => {
    this.setState(prevState => ({ count: prevState.count - 1 }))
  }

  handleReset = (): void => {
    this.setState({ count: 0 })
  }

  handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ filter: event.target.value })
  }

  render() {
    const { count, users, loading, filter, timer } = this.state

    return (
      <div className="component-box">
        <h2>Class Component</h2>
        
        <div style={{ marginBottom: '20px' }}>
          <h3>Counter: {count}</h3>
          <button onClick={this.handleIncrement}>Increment</button>
          <button onClick={this.handleDecrement}>Decrement</button>
          <button onClick={this.handleReset}>Reset</button>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3>Timer: {timer}s</h3>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3>Users</h3>
          <input
            type="text"
            placeholder="Filter by name..."
            value={filter}
            onChange={this.handleFilterChange}
            style={{ marginBottom: '10px', padding: '5px' }}
          />
          {loading ? (
            <p>Loading users...</p>
          ) : (
            <ul style={{ textAlign: 'left' }}>
              {users.map(user => (
                <li key={user.id}>
                  {user.name} - {user.email}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default ClassComponent
