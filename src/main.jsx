import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import router from './Routes/Routes';



ReactDOM.createRoot(document.getElementById('root')).render(
 <div className=' h-screen'>
   <React.StrictMode>
   <RouterProvider router={router} />,
  </React.StrictMode>
 </div>,
)

{/* <Router>
  <ScrollToTop>
    <Switch>
        <Route path="/" exact component={Home} />
    </Switch>
  </ScrollToTop>
</Router> */}

