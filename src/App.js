import Toaster from './components/ui/Toaster';
import Router from './route/Router';
import Spinner from './common/Spinner';

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
