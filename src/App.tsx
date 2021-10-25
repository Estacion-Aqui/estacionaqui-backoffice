import AppProvider from 'AppProvider';
import Routes from 'routes';

import 'styles/fonts.css';

function App() {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
}

export default App;
