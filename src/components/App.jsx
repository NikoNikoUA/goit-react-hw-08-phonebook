import { useSelector, useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { selectIsRefreshing } from '../../src/redux/auth/selectors';
import { Layout } from '../../src/components/Layout';
import { RestrictedRoute } from '../../src/components/RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { refreshUser } from 'redux/auth/operations';

const RegisterPage = lazy(() => import('../../src/pages/Register'));
const LoginPage = lazy(() => import('../../src/pages/Login'));
const ContactsPage = lazy(() => import('../../src/pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<HomePage />} /> */}
        <Route
          path="register"
          element={
            <RestrictedRoute
              redirectTo="../contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute
              redirectTo="../contacts"
              component={<LoginPage />}
            />
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="../login" component={<ContactsPage />} />
          }
        />
        <Route path="*" element={<div>NotFound</div>} />
      </Route>
    </Routes>
  );
};
