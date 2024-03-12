import * as Yup from "yup";

export const ContactSchema = Yup.object().shape({
    fullname: Yup.string().required("نام و نام خانوادگی الزامی است."),
    photo: Yup.string().nullable(),
    mobile: Yup.number().required("شماره تلفن الزامی است."),
    email: Yup.string().email("آدرس ایمیل معتبر نیست.").required("ایمیل الزامی است."),
    job: Yup.string().required("شغل الزامی است."),
    group: Yup.string().required("انتخاب گروه الزامی است.")  
});