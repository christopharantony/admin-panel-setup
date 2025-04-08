import MainLayout from '../layouts/MainLayout'
import UsersPage from '../views/UsersPage'

const routesConfig = [
  {
    path: '/',
    element: <MainLayout />,
    errorElement: (
      <h3>
        Sorry, this page does not exist. Please check the URL or go back to the
        home page.
      </h3>
    ),
    children: [
      {
        index: true,
        element: (
          <h1>
            Welcome to the Dashboard! This is a simple example of a dashboard
            using React Router and Material UI.
          </h1>
        ),
      },
      {
        path: 'users',
        element: <UsersPage />,
      },
    ],
  },
]

export default routesConfig
