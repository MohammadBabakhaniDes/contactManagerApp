import { useContext } from "react";
import { ContactContext } from "../../context/contactContext";
import { Purple } from "../../helper/color";


const SearchContact = ()=> {
    const { search } = useContext(ContactContext);

    return (
        <div className="input-group mx-2 w-75" dir="ltr">
            <span className="input-group-text" 
             id="basic-addon1" style={{ background: Purple }}>
                <i className="fas fa-search"></i>
            </span>
            <input dir="rtl" type="text"
                className='form-control'
                onChange={(event)=> {search(event.target.value)}}
                placeholder="جست و جوی مخاطب"
                aria-label="Search"           
                aria-describedby="basic-addon1" />
        </div>
    );
}

export default SearchContact;