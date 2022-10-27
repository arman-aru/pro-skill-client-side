import { RouterProvider } from 'react-router-dom';
import './App.css';
import { route } from './Route/Route/Route';

function App() {
  return (
    <div>
       <RouterProvider router={route}/>
    </div>
  );
}

export default App;
