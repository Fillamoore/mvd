// services/authService.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

export interface ApiResponse {
  success: boolean;
  message?: string;
  data?: any;
  error?: string;
}

export const authService = {
  async requestOTP(email: string): Promise<ApiResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/otp/request`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      // Handle network errors first
      if (!response.ok) {
        if (response.status === 0) {
          // Network error (no response) - offline
          return {
            success: false,
            error: 'Currently offline. Try again when online.'
          };
        }
        
        const data = await response.json();
        return {
          success: false,
          error: data.error || 'Failed to send verification code',
        };
      }

      const data = await response.json();
      return {
        success: true,
        message: data.message,
        data: data.data,
      };
    } catch (error) {
      console.error('Error requesting OTP:', error);
      // Handle fetch errors (network issues, CORS, etc.)
      if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
        return {
          success: false,
          error: 'Currently offline. Try again when online.'
        };
      }
      return {
        success: false,
        error: 'Failed to send verification code. Please try again.',
      };
    }
  },

  async verifyOTP(email: string, otp: string): Promise<ApiResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/otp/verify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, code: otp }),
      });

      // Handle network errors first
      if (!response.ok) {
        if (response.status === 0) {
          // Network error (no response) - offline
          return {
            success: false,
            error: 'Currently offline. Try again when online.'
          };
        }
        
        const data = await response.json();
        return {
          success: false,
          error: data.error || 'Invalid verification code. Please try again.'
        };
      }

      const data = await response.json();
      return {
        success: true,
        message: data.message,
        data: data.data,
      };
    } catch (error) {
      console.error('Error verifying OTP:', error);
      // Handle fetch errors (network issues, CORS, etc.)
      if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
        return {
          success: false,
          error: 'Currently offline. Try again when online.'
        };
      }
      return {
        success: false,
        error: 'Invalid verification code. Please try again.'
      };
    }
  },
};