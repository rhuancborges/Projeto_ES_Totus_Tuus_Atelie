import AppRoutes from './routes/Routes'
import {AuthProvider} from './contexts/auth' 
import './App.css'

function App() {
  return (
    <AuthProvider>
      <AppRoutes />;
    </AuthProvider>
  )
}

export default App;