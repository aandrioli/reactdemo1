import { Outlet, Link } from "react-router-dom";

const Layout = () => {
   const menucolor = "w3-green"
   const hovercolor = " w3-hover-orange w3-hover-text-brown"

   const navclass = "w3-container " + menucolor
   const menuclass = "w3-dropdown-hover"
   const hamburgerclass = "w3-button " + menucolor + hovercolor
   const dropdownclass = "w3-dropdown-content w3-bar-block w3-border " + menucolor 
   const linkclass = "w3-bar-item w3-button" + hovercolor

   const pageclass = "w3-container w3-sand w3-center"

   return (
      <>
         <nav className={navclass}>
            <div className={menuclass}>
               <button className={hamburgerclass}><i className="fa fa-bars"></i></button>
               <div className={dropdownclass}>
                  <Link to="/" className={linkclass}>Home</Link>
                  <Link to="/App1" className={linkclass}>App1</Link>
                  <Link to="/App2" className={linkclass}>App2</Link>
                  <Link to="/App3" className={linkclass}>App3</Link>
                  <Link to="/nr4/App4" className={linkclass}>App4</Link>
                  <Link to="/App5" className={linkclass}>App5</Link>
               </div>
            </div>
         </nav>
         <div className={pageclass}>
            <Outlet />
            <p></p>
         </div>
      </>
   )
};

export default Layout;