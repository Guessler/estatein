import './styles/_global.scss';
import { AppRouter } from "./consts/routes";
import ErrorBoundary from './ErrorBoundary';


function App() {

  return (
    <>
      <ErrorBoundary fallback={<h1 className='heading'>Что-то пошло не так.</h1>}>
        <AppRouter />
      </ErrorBoundary>
    </>
  )
}

export default App
