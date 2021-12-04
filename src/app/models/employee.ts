export interface Employee {
  id: string;
  fullname: string;
  gender?: string;
  email: string;
  phone: string;
  contactPreferences: string;
  dateOfBirth: Date;
  department: string;
  isActive: boolean;
  photo: string;
}
