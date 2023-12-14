import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom"
import Main from "./Components/paths/Main"
import Login from "./Components/paths/Login"
import { Provider } from "react-redux"
import store from "./Components/store/store"

const router = createBrowserRouter([
  {
    path:"/",
    element:<Outlet />,
    children:[
      {
        index:true,
        element:<Login />
      },
      {
        path:"/main",
        element:<Main />
      }
    ]
  }
])

function App() {
  return (
    <Provider store={store}>
     <RouterProvider router={router} />
    </Provider>
  )
}

export default App
