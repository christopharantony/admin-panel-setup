import {
  Button,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
} from '@mui/material'
import { useUsers, useUserById, useCreateUser } from '../hooks/useUsers'

const UsersPage = () => {
  const { data: users, isLoading } = useUsers()
  const { data: user } = useUserById(1) // just an example ID
  const createUser = useCreateUser()

  const handleAddUser = () => {
    const newUser = {
      name: 'New Guy',
      email: 'newguy@example.com',
    }
    createUser.mutate(newUser)
  }

  if (isLoading) return <CircularProgress />

  return (
    <>
      <h2>All Users</h2>
      <List>
        {users?.map((user) => (
          <ListItem key={user.id}>
            <ListItemText primary={user.name} secondary={user.email} />
          </ListItem>
        ))}
      </List>

      <Button variant="contained" onClick={handleAddUser}>
        Add New User
      </Button>

      <h3>Single User (ID 1)</h3>
      {user && <p>{user.name}</p>}
    </>
  )
}

export default UsersPage
