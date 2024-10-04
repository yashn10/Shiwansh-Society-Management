import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>

            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/country">Country</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/state">State</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/district">District</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/face">Facebook</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/login">Login</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/demo">Demo</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/AddSociety">AddSociety</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Outlet />

        </>
    )
};

export default Layout;