import { apiClient } from '@/services/api';
import type { 
  LoginCredentials, 
  SignUpData, 
  ResetPasswordData, 
  NewPasswordData,
  AuthUser,
  User 
} from '@/types';

export class AuthService {
  async login(credentials: LoginCredentials): Promise<AuthUser> {
    const response = await apiClient.post<AuthUser>('/auth/login', credentials);
    return response.data!;
  }

  async signup(userData: SignUpData): Promise<User> {
    const response = await apiClient.post<User>('/auth/signup', userData);
    return response.data!;
  }

  async forgotPassword(data: ResetPasswordData): Promise<void> {
    await apiClient.post('/auth/forgot-password', data);
  }

  async resetPassword(data: NewPasswordData): Promise<void> {
    await apiClient.post('/auth/reset-password', data);
  }

  async refreshToken(): Promise<AuthUser> {
    const response = await apiClient.post<AuthUser>('/auth/refresh');
    return response.data!;
  }

  async logout(): Promise<void> {
    await apiClient.post('/auth/logout');
  }

  async getCurrentUser(): Promise<User> {
    const response = await apiClient.get<User>('/auth/me');
    return response.data!;
  }

  async updateProfile(data: Partial<User>): Promise<User> {
    const response = await apiClient.put<User>('/auth/profile', data);
    return response.data!;
  }

  async changePassword(currentPassword: string, newPassword: string): Promise<void> {
    await apiClient.post('/auth/change-password', {
      currentPassword,
      newPassword,
    });
  }
}

export const authService = new AuthService();
