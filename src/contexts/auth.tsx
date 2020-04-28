import React, {createContext, useState, useEffect, useContext} from 'react';
import {AuthContextData} from '../models/AuthContextData';

import api from '../services/Api';
import {User} from '../models/User';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storageUser = localStorage.getItem('@MyApp1:user');
      const storageToken = localStorage.getItem('@MyApp1:token');

      if (storageUser && storageToken) {
        api.defaults.headers.Authorization = `Bearer ${storageToken}`;
        setUser(JSON.parse(storageUser));
      }
      setLoading(false);
    }
    loadStorageData();
  }, []);

  async function signIn(username: string, password: string) {
    const dados = {
      username: username,
      password: password,
    };
    setLoading(true);

    try {
      const auth = await api.post<User>('/api/account/token', dados);

      const authUser: User = {
        access_token: auth.data.access_token,
        email: auth.data.email,
        fotoUri: auth.data.fotoUri,
        nomeCompleto: auth.data.nomeCompleto,
      };

      setUser(authUser);
      api.defaults.headers.Authorization = `Bearer ${authUser.access_token}`;

      localStorage.setItem('@MyAppUser', JSON.stringify(authUser));
      localStorage.setItem('@MyAppToken', authUser.access_token);
      setLoading(false);
    } catch {
      setLoading(false);
    }
  }

  function signOut() {
    localStorage.clear();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{signed: !!user, user, loading, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
