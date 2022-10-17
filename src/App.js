import './App.css';
import CryptoCard from './Components/CryptoCard';
import { QueryClientProvider, QueryClient } from 'react-query';
import CryptoData from './QueryComponents/CryptoData';


const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
     <div className="App">
      <h1>Crypto Finance</h1>
      <CryptoData />
    </div>
    </QueryClientProvider>
  
  )
}

export default App;
