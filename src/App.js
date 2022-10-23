import Toaster from './components/ui/Toaster';
import Router from './route/Router';
import Spinner from './components/common/Spinner';

function App() {
  return (
    <>
      <Spinner />
      <Toaster />
      <Router />
    </>
  );
}

export default App;
