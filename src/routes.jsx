import Home from "./pages/Home/Home"
import UsersList from "./pages/UsersList/UsersList"
import NewUser from "./pages/NewUser/newUser"
import Products from "./pages/Products/Products"
import Product from "./pages/Product/Product"

export default [
    {path: "/", element: <Home />},
    {path: "/users", element: <UsersList />},
    {path: "/new-users", element: <NewUser />},
    {path: "/products", element: <Products />},
    {path: "/products/:productID", element: <Product />}
]