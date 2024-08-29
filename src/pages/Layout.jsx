import { Outlet, Link } from "react-router-dom";

const Layout = () => {
   return (
      <div>
         <nav>
            <Link to="/" >Home</Link> &nbsp;
            <Link to="/App1" >App1</Link> &nbsp;
            <Link to="/App2" >App2</Link> &nbsp;
            <Link to="/App3" >App3</Link> &nbsp;
            <Link to="/nr4/App4" >App4</Link> &nbsp;
            <Link to="/App5" >App5</Link> &nbsp;
         </nav>
         <Outlet />
      </div>
   )
};

export default Layout;