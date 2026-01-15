export interface RegisterDto {
  email: string
  password: string
}

export interface RegisterCheckDto {
  email: string
  code: string
}

export interface LoginDto {
  email: string
  password: string
}

export interface RegisterResponse {
  message: string
  email: string
}

export interface RegisterCheckResponse {
  message: string
  userId: string
}

export interface LoginResponse {
  message: string
  userId: string
  email: string
}
