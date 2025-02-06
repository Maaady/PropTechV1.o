'use client';

import { StoredUser } from '@/lib/types/auth';

const USER_KEY = 'proptech_user';

export const saveUser = (userData: StoredUser): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(USER_KEY, JSON.stringify(userData));
  }
};

export const getUser = (): StoredUser | null => {
  if (typeof window === 'undefined') return null;
  const user = localStorage.getItem(USER_KEY);
  return user ? JSON.parse(user) : null;
};

export const removeUser = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(USER_KEY);
  }
};