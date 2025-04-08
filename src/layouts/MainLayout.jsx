// src/layouts/MainLayout.jsx
import { Outlet, NavLink } from 'react-router-dom'
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material'

const MainLayout = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Admin Panel
          </Typography>
          <Button variant="contained" component={NavLink} to="/">
            Dashboard
          </Button>
          <Button variant="contained" component={NavLink} to="/users">
            Users
          </Button>
        </Toolbar>
      </AppBar>
      <Box p={2}>
        <Outlet />
      </Box>
    </Box>
  )
}

export default MainLayout
