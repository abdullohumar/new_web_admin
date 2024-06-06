//import navbar
import Navbar from "../components/Navbar.jsx";

//import sidebar
import Sidebar from '../components/Sidebar.jsx';

export default function LayoutDefault ({children}) {

   return (
       <>
           <nav className="navbar navbar-dark navbar-theme-primary px-4 col-12 d-lg-none">
               <a className="navbar-brand me-lg-5" href="/">
                   <img className="navbar-brand-dark" src=""/> 
                   <img className="navbar-brand-light" src=""/>
               </a>
               <div className="d-flex align-items-center">
                   <button className="navbar-toggler d-lg-none collapsed" type="button" data-bs-toggle="collapse"
                       data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false"
                       aria-label="Toggle navigation">
                       <span className="navbar-toggler-icon"></span>
                   </button>
               </div>
           </nav>

           {/* sidebar */}
           <Sidebar />

           <main className="content">

               {/* navbar */}
               <Navbar />

               {/* children  */}
               {children}

           </main>
       </>
   )

}