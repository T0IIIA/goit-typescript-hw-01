type User = {
  name: string
  surname: string
  email: string
  password: string
}

const defaultUserValues: User = {
  name: '',
  surname: '',
  email: '',
  password: '',
  }

function createOrUpdateUser(defaultUser: User, initialValues: Partial<User>): User {
  return { ...defaultUser, ...initialValues }
}

createOrUpdateUser(defaultUserValues, {
  email: 'user@mail.com',
  password: 'password123',
})
    

