//import Link
import { Link, useLocation } from 'react-router-dom';

//import permissions
import hasAnyPermission from '../utils/Permissions.jsx';

export default function Sidebar() {

    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const activeRoute = pathname.split("/");

    return (
        <div>
            <nav id="sidebarMenu" className="sidebar d-lg-block bg-tertiary text-white collapse" data-simplebar>
                <div className="sidebar-inner px-3 pt-3">
                    <div className="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
                        <div className="collapse-close d-md-none">
                            <a href="#sidebarMenu" data-bs-toggle="collapse" data-bs-target="#sidebarMenu"
                                aria-controls="sidebarMenu" aria-expanded="true" aria-label="Toggle navigation">
                                <svg className="icon icon-xs" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <ul className="nav flex-column pt-3 pt-md-0">
                        <li className="nav-item">
                            <span className="mt-2 d-flex justify-content-center">
                                <span>
                                    <span className="sidebar-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                            className="bi bi-box-fill" viewBox="0 0 16 16">
                                            <path fillRule="evenodd"
                                                d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.004-.001.274-.11a.75.75 0 0 1 .558 0l.274.11.004.001 6.971 2.789Zm-1.374.527L8 5.962 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339Z" />
                                        </svg>
                                    </span>
                                    <span className="sidebar-text text-center fw-bold ms-2">NEWSAPP ADMIN</span>
                                </span>
                            </span>
                        </li>

                        <li role="separator" className="dropdown-divider mt-4 mb-3 border-gray-700"></li>
                        
                        <li className={activeRoute[1] === "dashboard" ? "nav-item active" : "nav-item"}>
                            <Link to="/dashboard" className="nav-link d-flex justify-content-between">
                                <span>
                                    <span className="sidebar-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                                            className="bi bi-speedometer2 icon icon-xs me-2" viewBox="0 0 16 16">
                                            <path
                                                d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z" />
                                            <path fillRule="evenodd"
                                                d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z" />
                                        </svg>
                                    </span>
                                    <span className="sidebar-text">Dashboard</span>
                                </span>
                            </Link>
                        </li>

                        <li role="separator" className="dropdown-divider mt-4 mb-3 border-gray-700"></li>

                        {hasAnyPermission(['categories.index']) &&
                            <li className={activeRoute[1] === "categories" ? "nav-item mt-2 active" : "nav-item mt-2"}>
                                <Link to="/categories" className="nav-link d-flex justify-content-between">
                                    <span>
                                        <span className="sidebar-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-folder" viewBox="0 0 16 16">
                                                <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z" />
                                            </svg>
                                        </span>
                                        <span className="sidebar-text">Categories</span>
                                    </span>
                                </Link>
                            </li>
                        }

                        {hasAnyPermission(['posts.index']) &&
                            <li className={activeRoute[1] === "posts" ? "nav-item mt-2 active" : "nav-item mt-2"}>
                                <Link to="/posts" className="nav-link d-flex justify-content-between">
                                    <span>
                                        <span className="sidebar-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                            </svg>
                                        </span>
                                        <span className="sidebar-text">Posts</span>
                                    </span>
                                </Link>
                            </li>
                        }

                        {hasAnyPermission(['sliders.index']) &&
                            <li className={activeRoute[1] === "sliders" ? "nav-item mt-2 active" : "nav-item mt-2"}>
                                <Link to="/sliders" className="nav-link d-flex justify-content-between">
                                    <span>
                                        <span className="sidebar-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-image-fill" viewBox="0 0 16 16">
                                                <path d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />
                                            </svg>
                                        </span>
                                        <span className="sidebar-text">Sliders</span>
                                    </span>
                                </Link>
                            </li>
                        }

                        <li role="separator" className="dropdown-divider mt-4 mb-3 border-gray-700"></li>

                        {(hasAnyPermission(['roles.index']) ||  hasAnyPermission(['permissions.index']) || hasAnyPermission(['users.index'])) &&
                            <li className={
                                    'nav-item ' + (
                                        activeRoute[1] === 'roles' ? ' active' : 
                                        activeRoute[1] === 'permissions' ? ' active' : 
                                        activeRoute[1] === 'users' ? ' active' : ''
                                    )
                                }>
                                <span className="nav-link d-flex justify-content-between align-items-center collapsed" data-bs-toggle="collapse" data-bs-target="#submenu-app" aria-expanded="false">
                                    <span>
                                        <span className="sidebar-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
                                                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
                                            </svg>
                                        </span>
                                        <span className="sidebar-text">Users Management</span>
                                    </span>
                                    <span className="link-arrow">
                                        <svg className="icon icon-sm" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                    </span>
                                </span>
                                <div role="list" id="submenu-app" aria-expanded="false" className={
                                    'multi-level collapse ' + (
                                        activeRoute[1] === 'roles' ? ' show' : 
                                        activeRoute[1] === 'permissions' ? ' show' : 
                                        activeRoute[1] === 'users' ? ' show' : ''
                                    )
                                }>
                                    <ul className="flex-column nav">

                                        {hasAnyPermission(['roles.index']) &&
                                            <li className={activeRoute[1] === "roles" ? "nav-item active" : "nav-item"}>
                                                <Link to="/roles" className="nav-link" href="#">
                                                    <span className="sidebar-text">Roles</span>
                                                </Link>
                                            </li>
                                        }

                                        {hasAnyPermission(['permissions.index']) &&
                                            <li className={activeRoute[1] === "permissions" ? "nav-item active" : "nav-item"}>
                                                <Link to="/permissions" className="nav-link">
                                                    <span className="sidebar-text">Permissions</span>
                                                </Link>
                                            </li>
                                        }

                                        {hasAnyPermission(['users.index']) &&
                                            <li className={activeRoute[1] === "users" ? "nav-item active" : "nav-item"}>
                                                <Link to="/users" className="nav-link" href="#">
                                                    <span className="sidebar-text">Users</span>
                                                </Link>
                                            </li>
                                        }
                                    </ul>
                                </div>
                            </li>
                        }

                    </ul>
                </div>
            </nav>
        </div>
    )
}