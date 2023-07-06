import Login from "./login/Login";
import ComplaintsPage from "./pages/ComplaintsPage";
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import RootLayout from "./Root";

const router = createBrowserRouter([
  {path: '/', element: <RootLayout />, childern: [
    // { index:true , element: <Login />},
    { path: 'complaintsPage', element: <ComplaintsPage />},
  ]}
]);

function App() {
  // return <ComplaintsPage />
  return <RouterProvider router={router}/>;
}

export default App;
