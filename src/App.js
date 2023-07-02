import { Route, Routes } from 'react-router-dom';
import { pageRoutes } from './appRoute';
import useAuth from './hooks/useAuth';

function App() {
  // 이니셜 라이제이션
  const { user, channels } = useAuth();

  console.log('초기화된 유저: ', user);
  console.log('초기화된 유저의 채널:', channels);

  return (
    <div style={{ height: '100vh' }}>
      <Routes>
        {pageRoutes.map((route) => (
          <Route key={route.id} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
