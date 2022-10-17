import './App.css';
import { QueryClientProvider, QueryClient } from 'react-query';
import CryptoData from './QueryComponents/CryptoData';



const queryClient = new QueryClient();


function App() {

  return (
    <QueryClientProvider client={queryClient}>
     <div className="container">
      <div className='row'>
      <CryptoData />
      </div>
      </div>
    </QueryClientProvider>
  
  )
}

export default App;
