import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useUsername from '../../hooks/queryHooks/useUsername';
import Loader from '../../ui/Loader';

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  const { data, isLoading, isError, error } = useUsername();

  useEffect(() => {
    if (isError)
      error?.response?.data?.result === 'unauthorized' && navigate('/login');
  }, [error, isError, navigate]);

  if (isLoading) return <Loader />;

  if (data?.result === 'success') return children;
}

export default ProtectedRoute;
