import { Link } from "react-router-dom";
import { CurrentLine, Cyan, Orange, Purple, Red } from "../../helper/color";
import { ConfirmDelete } from "../../helper/ConfirmDelete";
import { useContext } from "react";
import { ContactContext } from "../../context/contactContext";
import "../../helper/size.css";

const Contact = ({contact})=> {
    const {remove} = useContext(ContactContext);
    
    return(
        <div className="col-lg-6">
            <div className="card my-2" style={{background:CurrentLine}}>
                <div className="card-body">
                    <div className="row d-flex justify-content-around align-items-center">
                        <div className="col-sm-4 col-md-3.75">
                            <img src={contact.photo} 
                             alt={contact.fullname} style={{border:`1px solid ${Purple}`, height: 180, width: '25vw'}}
                             className="img-fluid rounded mamad" />
                        </div>
                        <div className="col-sm-6 col-md-5.75 col-xl-7">
                            <ul className="list-group p-0">
                                <li className="list-group-item list-group-item-dark">
                                    نام و نام خانوداگی : <span className="fw-bold">{contact.fullname}</span>
                                </li>
                                <li className="list-group-item list-group-item-dark">
                                     شماره موبایل : <span className="fw-bold">{contact.mobile}</span>
                                 </li>
                                 <li className="list-group-item list-group-item-dark">
                                 آدرس ایمیل :{"  "}
                                     <span className="fw-bold">
                                         {contact.email}
                                     </span>
                                 </li>
                            </ul>
                        </div>
                        <div className="col-sm-2 col-md-2.5 col-xl-1 d-flex flex-column align-items-center">
                            <Link to={`/contacts/${contact.id}`} className="btn my-1 buttonsize" style={{ background: Orange }}>
                                <i className="fa fa-eye" />
                            </Link>
                            <Link to={`/contacts/edit/${contact.id}`} className="btn my-1 buttonsize" style={{background:Cyan}}>
                                <i className="fa fa-pen" />
                            </Link>
                            <button onClick={()=> {
                                ConfirmDelete(contact.id, contact.fullname, remove);
                            }} className="btn my-1 buttonsize" style={{background:Red}}>   
                                <i className="fa fa-trash" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;