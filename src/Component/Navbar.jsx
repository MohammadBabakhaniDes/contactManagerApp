import { useLocation } from "react-router-dom";
import { Purple } from "../helper/color";
import SearchContact from "./Contacts/SearchContact";
import '../helper/size.css';
import Colorfull from "../hoc/Colorfull";

const Navbar = ()=> {

    const location = useLocation();

    return(      
    <nav className="navbar navbar-dark navbar-expand-sm shadow-lg marbottom" >
        <div className="container">
            <div className="row w-100">
                <div style={{marginBottom: '20px'}} className="col-md-6">
                    <div className="navbar-brand">
                        <i style={{color:Purple}} className="fas fa-id-badge"></i> {' '}
                        وب اپلیکیشن مدیریت <span style={{color:Purple}}>مخاطبین</span>
                    </div>
                </div>

                {
                    location.pathname === '/contacts' ? (
                        <div className="col-md-6 centerelem">
                            <SearchContact />
                        </div>
                    ) : (null)
                }
            </div>
        </div>
    </nav>
    );
}
export default Colorfull(Navbar);