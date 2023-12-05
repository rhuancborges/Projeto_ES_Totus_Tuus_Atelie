import React, { createContext, useState, useEffect } from 'react';

import api from '../services/api';
import userApi from '../services/users';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    function loadStorageData() {
      const storagedToken = localStorage.getItem("token");

      if (storagedToken) {
        api.defaults.headers.common.Authorization = `Baerer ${storagedToken}`;
        setToken(storagedToken);
      }
    }

    loadStorageData();
  }, [token]);

  async function login(userData) {
    try {
      const response = await userApi.authenticate(userData);

      api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;

      console.log(response.data.token)

      setToken(response.data.token);

      localStorage.setItem("token", response.data.token);
    } catch (error) {
      window.alert(error);
    }
  }

  function logout() {
    localStorage.removeItem("token");
    setToken(null);
    window.open("/", "_self");
    window.location.reload();
  }
  
  return (
    <AuthContext.Provider value={{ signed: !!token, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );

}

export default AuthContext;