import './styles/_global.scss';
import { AppRoutes } from "./consts/routes";
import ErrorBoundary from './ErrorBoundary';


function App() {

  return (
    <>
      <ErrorBoundary fallback={<h1>Что-то пошло не так.</h1>}>
        <AppRoutes />

      </ErrorBoundary>
    </>
  )
}

export default App
