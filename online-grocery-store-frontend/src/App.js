import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./Components/Footer";
import SignInScreen from "./Screens/User/SignInScreen";
import Navigation from "./Components/Navigation";
import ContactUsScreen from "./Screens/Home/ContactUsScreen";
import AdminHomeScreen from "./Screens/Admin/AdminHomeScreen";

import CustomerHomeScreen from "./Screens/Customer/CustomerHomeScreen";
import SignUpScreen from "./Screens/User/SignUpScreen";
import EditProfileScreen from "./Screens/User/EditProfileScreen";

import AddCategoryScreen from "./Screens/Common/AddCategoryScreen";
import ViewAllCategoriesScreen from "./Screens/Common/ViewAllCategoriesScreen";
import AddProductScreen from "./Screens/Common/AddProductScreen";
import ViewProductsScreen from "./Screens/Common/ViewProductsScreen";
import EditProductScreen from "./Screens/Common/EditProductScreen";
import AdminStockReportScreen from "./Screens/Admin/AdminStockReportScreen";
import CustomerProductsScreen from "./Screens/Customer/CustomerProductScreen";
import CartView from "./Components/CartView";
import {ToastContainer} from "react-toastify"
import CustomerAddressScreen from "./Screens/Customer/CustomerAddressScreen";
import CustomerAddAddressScreen from "./Screens/Customer/CustomerAddAddressScreen";
import CustomerEditAddressScreen from "./Screens/Customer/CustomerEditScreen";
import CustomerOrderReviewScreen from "./Screens/Customer/CustomerOrderReviewScreen";
import CustomerOrdersScreen from "./Screens/Customer/CustomerOrdersScreen";
import ViewAllOrdersScreen from "./Screens/Common/ViewAllOrdersScreen";

import AboutUsScreen from "./Screens/Home/AboutUsScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <Navigation />
          <CartView/>
          <ToastContainer/>
          <Switch>
            <Route path="/" exact component={CustomerProductsScreen} />
            
            <Route path="/signin" component={SignInScreen} />
            <Route path="/signup" component={SignUpScreen} />
            <Route path="/contact" component={ContactUsScreen} />
            <Route path="/about" component={AboutUsScreen} />

            <Route path="/edit-profile" component={EditProfileScreen} />
            
            <Route path="/admin-home" component={AdminHomeScreen} />
            
            <Route path="/stock" component={AdminStockReportScreen}/>  
            
            <Route path="/add-category" component={AddCategoryScreen}/>  
            <Route path="/categories" component={ViewAllCategoriesScreen}/>  
            <Route path="/add-product" component={AddProductScreen}/>
            <Route path="/products" component={ViewProductsScreen}/>
            <Route path="/edit-product" component={EditProductScreen}/>  

            

            <Route path="/customer-home" component={CustomerHomeScreen}/>
            <Route path="/customer-products" component={CustomerProductsScreen}/>
            <Route path="/addresses" component={CustomerAddressScreen}/>
            <Route path="/add-address" component={CustomerAddAddressScreen}/>
            <Route path="/edit-address" component={CustomerEditAddressScreen}/>
            <Route path="/order-review" component={CustomerOrderReviewScreen}/>
            <Route path="/my-orders" component={CustomerOrdersScreen}/>
            
            
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
