/**
 * Mock API for the interview exercise
 * 
 * This file provides a simulated API call to fetch users.
 * You can use this in your HooksComponent implementation.
 */

export interface User {
  id: number
  name: string
  email: string
}

/**
 * Fetches a list of users, optionally filtered by name
 * @param filter - Optional string to filter users by name (case-insensitive)
 * @returns Promise that resolves to an array of User objects
 */
export const fetchUsers = async (filter: string = ''): Promise<User[]> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500))
  
  const mockUsers: User[] = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com' },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com' },
  ]
  
  // Filter users if a filter string is provided
  const filteredUsers = filter
    ? mockUsers.filter(u => u.name.toLowerCase().includes(filter.toLowerCase()))
    : mockUsers
  
  return filteredUsers
}
