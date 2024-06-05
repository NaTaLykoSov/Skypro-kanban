import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { paths } from "../../mock/paths";



const Layout = ( {isAuth} ) => {
    
    return isAuth ? <Outlet /> : <Navigate to={paths.LOGIN} />;
  }
  
  export default Layout;