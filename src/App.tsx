import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Suspense } from 'react';
//import { HelmetProvider } from 'react-helmet-async';
//import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import "./App.scss";
//import SpinnerNPMNPM from './components/Spinner';
import router from './routes/routes';

// 쿼리 클라이언트 객체 생성
const queryClient = new QueryClient({
  // 모든 쿼리에 사용되는 기본 옵션
  defaultOptions: {
    queries: {
      // retry: 5, (기본 값: 3)
      // staleTime: 1 * 1000 * 60 * 60 * 24 * 7 // 7일간 (기본 값: 0)
      // cacheTime: 1 * 1000 * 60 * 5, // (기본 값: 5분)
    },
  },
});

function App() {
  return (
    <>
      {/* 쿼리 클라이언트를 앱에 공급 */}
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <Suspense>
            <RouterProvider router={router} />
          </Suspense>
        </div>
        {/* 탠스택 쿼리 개발 도구 */}
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default App;