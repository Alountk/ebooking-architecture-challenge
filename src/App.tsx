import './App.css';
import { UserProvider } from './context/UserContext';
import UserDashboard from './modules/presentation/UserDashboard';

function App() {
  return (
    <UserProvider>
      <UserDashboard />
    </UserProvider>
  );
}

export default App;
