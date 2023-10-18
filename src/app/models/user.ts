export interface User {
  id: number;
  userType: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword?: string;
}
