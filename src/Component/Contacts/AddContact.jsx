import { useContext } from "react";
import { ContactContext } from "../../context/contactContext";
import { Link } from "react-router-dom";
import { Comment, Green, Purple } from "../../helper/color";
import Spinner from "../Spinner";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { contactSchema } from "../../validations/contactValidation";

const AddContact = ()=> {
    const { loading, groups, createContactForm } = useContext(ContactContext);

    return(
        <>        
            {loading ? (
                <Spinner />
            ) : (
            <section className="p-3">
                <img
                    src={require("../../assets/man-taking-note.png")} 
                    alt=""
                    height="400px"
                    style={{
                        position:'absolute',
                        zIndex:'-1',
                        top:"130px",
                        left:"100px",
                        opacity:"50%"
                    }}
                />
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p 
                                className="h4 fw-bold text-center"
                                style={{ color:Green }}
                            >
                                ساخت مخاطب جدید
                            </p>
                        </div>
                    </div>
                    <hr style={{ backgroundColor: Green }} />
              <div className="row mt-5">
                <div className="col-md-4">

                <Formik 
                  initialValues = {{
                    fullname: '',
                    photo: '',
                    mobile: '',
                    email: '',
                    job: '',
                    group: '',
                    bio: ''
                  }}
                  validationSchema= {contactSchema}
                  onSubmit= {(values=> {
                    // console.log(values);
                    createContactForm(values);
                  })}
                >
                  
                  <Form>
                    <div className="mb-2">
                      <Field
                        type="text"
                        name="fullname"
                        className="form-control"
                        placeholder="نام و نام خانوادگی"
                      />
                      
                      <ErrorMessage name="fullname">{msg=> <div className="text-danger">{msg}</div>}</ErrorMessage>
                      
                    </div>
                    <div className="mb-2">
                      <Field
                        name="photo"
                        type="text"
                        className="form-control"
                        placeholder="آدرس تصویر"
                      />

                  <ErrorMessage name="photo">{msg=> <div className="text-danger">{msg}</div>}</ErrorMessage>
                    </div>

                    <div className="mb-2">
                      <Field
                        name="mobile"
                        type="text"
                        className="form-control"
                        placeholder="شماره موبایل"
                      />
                      
                      <ErrorMessage name="mobile">{msg=> <div className="text-danger">{msg}</div>}</ErrorMessage>
                    </div>

                    <div className="mb-2">
                      <Field
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="آدرس ایمیل"
                      />

                      <ErrorMessage name="email">{msg=> <div className="text-danger">{msg}</div>}</ErrorMessage>
                    </div>

                    <div className="mb-2">
                      <Field
                        type="text"
                        name="job"
                        className="form-control"
                        placeholder="شغل"
                      />

                      <ErrorMessage name="job">{msg=> <div className="text-danger">{msg}</div>}</ErrorMessage>
                    </div>

                    <div className="mb-2">
                      <Field
                        className="form-control"
                        as="select"
                        name="group"
                      >
                        <option value="">انتخاب گروه</option>
                        {
                            groups.length > 0 && groups.map((group)=> (  
                                <option key={group.id} value={group.id}>  
                                    {group.name}
                                </option>
                            ))
                        }
                      </Field>

                      <ErrorMessage name="group">{msg=> <div className="text-danger">{msg}</div>}</ErrorMessage>
                    </div>

                    <div className="mb-2">
                      <Field
                        name="bio"  
                        className="form-control"
                        as="textarea"                        
                        placeholder="بیوگرافی"
                      />

                      <ErrorMessage name="bio">{msg=> <div className="text-danger">{msg}</div>}</ErrorMessage>
                    </div>

                    <div className="mx-2">
                      <input
                        type="submit"
                        className="btn"
                        style={{ backgroundColor: Purple }}
                        value="ساخت مخاطب"
                      />
                      <Link
                        to={"/contacts"}
                        className="btn mx-2"
                        style={{ backgroundColor: Comment }}
                      >
                        انصراف
                      </Link>
                    </div>
                  </Form>
                </Formik>
                
                </div>
              </div>
                </div>
            </section>
            )
}
        </>
    )
}

export default AddContact;