export interface Employee {
  id: number;
  fullname: string;
  gender?: string;
  email: string;
  phone: string;
  contactPreferences: string;
  dateOfBirth: Date;
  department: string;
  isActive: boolean;
  photo: string;
  password: string;
  confirmPassword: string
}
