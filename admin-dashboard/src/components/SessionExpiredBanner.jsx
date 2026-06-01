import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

export default function SessionExpiredBanner() {
  const { isAuthenticated } = useAuth();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isAuthenticated) {
      setIsVisible(false);
    }
  }, [isAuthenticated]);

  if (!isVisible || isAuthenticated) return null;

  return (
    <div className="session-expired-banner">
      <span>Your session has expired. Please log in again to continue.</span>
    </div>
  );
}
