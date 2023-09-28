import ComplaintsPageAdmin from "./pages/ComplaintsPageAdmin";
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import ComplaintPageStudent from './pages/ComplaintPageStudent';
import RootLayout from './Root';
import ProfileStudent from './pages/ProfileStdent';

const router = createBrowserRouter([
  {path: '/', element: <RootLayout />},
  { path: '/complaintsPageAdmin', element: <ComplaintsPageAdmin />},
  {path: '/complaintPageStudent', element: <ComplaintPageStudent />},
  {path: '/profileStudent', element: <ProfileStudent />},
  
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
