 interface LoginSuccess {
    message: string
    user: User
    token: string
  }
  
 interface LoginError{
    error:string
}

  export interface User {
    _id: string
    firstName: string
    lastName: string
    email: string
    gender: string
    phone: string
    photo: string
    role: string
    createdAt: string
  }
  
  export type LoginResponse = LoginSuccess | LoginError