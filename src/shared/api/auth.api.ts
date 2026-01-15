import { API_BASE_URL } from '../config/api'
import type {
  RegisterDto,
  RegisterCheckDto,
  LoginDto,
  RegisterResponse,
  RegisterCheckResponse,
  LoginResponse,
} from './auth.types'

class AuthAPI {
  private baseUrl = `${API_BASE_URL}/auth`

  async register(dto: RegisterDto): Promise<RegisterResponse> {
    const response = await fetch(`${this.baseUrl}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dto),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error || 'Failed to register')
    }

    return response.json()
  }

  async registerCheck(dto: RegisterCheckDto): Promise<RegisterCheckResponse> {
    const response = await fetch(`${this.baseUrl}/register-check`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dto),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error || 'Failed to verify code')
    }

    return response.json()
  }

  async login(dto: LoginDto): Promise<LoginResponse> {
    const response = await fetch(`${this.baseUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dto),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error || 'Login failed')
    }

    return response.json()
  }
}

export const authAPI = new AuthAPI()
