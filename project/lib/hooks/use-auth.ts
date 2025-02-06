'use client';

import { useEffect, useState } from 'react';
import { StoredUser } from '@/lib/types/auth';
import { getUser } from '@/lib/storage/user-storage';

export const useAuth = () => {
  const [user, setUser] = useState<StoredUser | null>(null);

  useEffect(() => {
    setUser(getUser());
  }, []);

  return { user, isAuthenticated: !!user };
};