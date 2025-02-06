interface StoredUser {
  id: string;
  email: string;
  companyName: string;
  managerName: string;
  vatNumber: string;
}

export const saveUser = (userData: StoredUser) => {
  localStorage.setItem('user', JSON.stringify(userData));
};

export const getUser = (): StoredUser | null => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

export const removeUser = () => {
  localStorage.removeItem('user');
};