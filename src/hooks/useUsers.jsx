import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { createUser, getUserById, getUsers } from '../api/users'

/** 🔹 Fetch all users */
export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const { data } = await getUsers()
      return data
    },
  })
}

/** 🔹 Fetch user by ID */
export const useUserById = (id) => {
  return useQuery({
    queryKey: ['user', id],
    queryFn: async () => {
      const { data } = await getUserById(id)
      return data
    },
    enabled: !!id, // only fetch if ID is truthy
  })
}

/** 🔹 Create a new user */
export const useCreateUser = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (userData) => {
      const { data } = await createUser(userData)
      return data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] }) // refetch users
    },
  })
}
