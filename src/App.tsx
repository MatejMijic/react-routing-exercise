import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from 'shared';
import { Blog, BlogDetails, Home, Info, Login } from 'views';

export const App: React.FC = () => {
  const [isLoggedIn, setIsLogggedIn] = useState<boolean>(false);

  function onLogin() {
    setIsLogggedIn(!isLoggedIn);
  }

  return (
    <Routes>
      <Route path="/" element={<Layout onLogin={() => onLogin()} />}>
        <Route index element={<Home />} />
        <Route path="/info" element={<Info />}></Route>
        <Route path="/blog">
          <Route
            index
            element={isLoggedIn ? <Blog /> : <Navigate to={'/login'} replace />}
          />
          <Route
            path="blog-details"
            element={
              <BlogDetails
                id={0}
                title={'Blog title'}
                description={'Blog description'}
              />
            }
          />
        </Route>
        <Route
          path="/login"
          element={!isLoggedIn ? <Login /> : <Navigate to={'/blog'} />}
        ></Route>
      </Route>
    </Routes>
  );
};
