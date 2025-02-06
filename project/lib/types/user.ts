export interface User {
  id: string;
  email: string;
  role: 'admin' | 'agent' | 'tenant';
  name: string;
  companyId?: string;
}

export interface Company {
  id: string;
  name: string;
  vatNumber: string;
  managerName: string;
  createdAt: Date;
}