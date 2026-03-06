export type WorkExperience = {
  id: number;
  userId: number;
  username: string;
  company: string;
  position: string;
  location?: string;
  startDate: string;
  endDate?: string; // Optional if currently working there
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type Education = {
  id: number;
  userId: number;
  username: string;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  location?: string;
  startDate: string;
  endDate?: string; // Optional if currently studying there
  createdAt: string;
  updatedAt: string;
};

export type User = {
  id: number;
  username: string;
  fullName: string;
  profileImageUrl?: string;
  email: string;
  bio?: string;
  about?: string;
  skills?: string;
  password: string;
  createdAt: string;
  updatedAt: string;
};
