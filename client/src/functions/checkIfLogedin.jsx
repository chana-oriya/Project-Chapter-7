import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const checkIfLogedin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    
    const currentuser = Boolean(localStorage.getItem('currentuser'));

    if (!currentuser) {
      navigate('/login');
    }
  }, [navigate]);
};
export default checkIfLogedin;