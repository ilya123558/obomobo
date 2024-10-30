export type TRole = 'client' | 'specialist' | 'admin'

export interface ISignup {
  name: string
  role: TRole
  email: string
  password: string
}