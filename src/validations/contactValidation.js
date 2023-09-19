import * as Yup from "yup";

export const contactSchema = Yup.object().shape({
    fullname: Yup.string().required("نام و نام خانوادگی الزامی است."),
    //photo: Yup.string().url("آدرس معتبر نیست.").required('عکس کاربر اجباری است.'),
    mobile: Yup.number().required('شماره تلفن اجباری است.'),
    email: Yup.string().email('آدرس ایمیل معتبر نیست.').required('ایمیل اجباری است.'),
    job: Yup.string().nullable(),
    group: Yup.string().required('انتخاب گروه الزامی است.'),
    bio: Yup.string().required('داشتن بیوگرافی الزامی است.')
});