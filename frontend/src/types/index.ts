// User Types
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: 'admin' | 'user';
  createdAt: string;
  updatedAt: string;
}

export interface AuthUser extends User {
  accessToken: string;
  refreshToken: string;
}

// Auth Types
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignUpData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ResetPasswordData {
  email: string;
}

export interface NewPasswordData {
  token: string;
  password: string;
  confirmPassword: string;
}

// Chatbot Types
export interface Chatbot {
  id: string;
  name: string;
  description?: string;
  avatar?: string;
  isActive: boolean;
  settings: ChatbotSettings;
  createdAt: string;
  updatedAt: string;
  userId: string;
}

export interface ChatbotSettings {
  welcomeMessage?: string;
  fallbackMessage?: string;
  maxRetries: number;
  language: string;
  theme: 'light' | 'dark';
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Form Types
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'textarea' | 'select' | 'checkbox' | 'radio';
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
}

// Theme Types
export type Theme = 'light' | 'dark' | 'system';

// Common Types
export interface BaseEntity {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}
