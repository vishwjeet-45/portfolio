import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

// Returns undefined while checking session, null when signed out,
// or the Firebase user object when signed in.
export function useAdminAuth() {
  const [user, setUser] = useState(undefined);
  useEffect(() => onAuthStateChanged(auth, (u) => setUser(u ?? null)), []);
  return user;
}
