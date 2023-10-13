import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import AppLayout from './layouts/AppLayout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import LoginLayout from './layouts/LoginLayout';
import ProtectedRoute from './components/protected/ProtectedRoute';

function App() {
  return (
    <>
      <ReactQueryDevtools />
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
          <Route element={<LoginLayout />}>
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>

      {/* Toaster container and its configuration */}
      <Toaster
        position="bottom-right"
        gutter={12}
        containerStyle={{ margin: '2px' }}
        toastOptions={{
          className:
            'dark:bg-dark-primary-200 dark:text-white bg-[rgba(255,255,255,0.95)] text-[#1d1d1b]',
          success: {
            duration: 3000,
          },

          error: {
            duration: 5000,
          },
          style: {
            fontSize: '1.2rem',
            maxWidth: '500px',
            padding: '10px 20px',
            zIndex: 100,
          },
        }}
      />
    </>
  );
}

export default App;
