let AllContacts = {
  contacts: [
    {
      fullname: "جهانشاه کبودیان",
      photo: "https://eng.razi.ac.ir/documents/584082/794919/%D8%AC%D9%87%D8%A7%D9%86%D8%B4%D8%A7%D9%87+%DA%A9%D8%A8%D9%88%D8%AF%DB%8C%D8%A7%D9%86.jpg/617bd0e0-5e48-f0db-f5a4-ee12ccd81caf?t=1621937483981&download=true",
      mobile: "09102233444",
      email: "kabodian@gmail.com",
      job: "استاد دانشگاه",
      group: "2",
      bio: "استاد دانشگاه رازی و دارای مدرک گرایش هوش مصنوعی\n",
      id: 1
    },
    {
      fullname: "محمد سعید جهانگیری",
      photo: "https://eng.razi.ac.ir/documents/584082/794919/%D9%85%D8%AD%D9%85%D8%AF%D8%B3%D8%B9%DB%8C%D8%AF+%D8%AC%D9%87%D8%A7%D9%86%DA%AF%DB%8C%D8%B1%DB%8C.jpg/29056885-c6a8-dea5-1586-2bc3eccbdc3c?t=1621937484482&download=true",
      mobile: "09012233000",
      email: "jahangiri@gmail.com",
      job: "استاد دانشگاه",
      group: "2",
      bio: "از اساتید دانشگاه گرایش سخت افزار\nمدیر شرکت آپا در دانشگاه رازی",
      id: 2
    },
    {
      fullname: "محمود احمدی",
      photo: "https://eng.razi.ac.ir/documents/584082/794919/%D8%AF%DA%A9%D8%AA%D8%B1+%D9%85%D8%AD%D9%85%D9%88%D8%AF+%D8%A7%D8%AD%D9%85%D8%AF%DB%8C.jpg/ec39fc10-95ba-e5c0-cf99-b9e4196d6360?t=1621937484430&download=true",
      mobile: "09228899000",
      email: "ahmadi@gmail.com",
      job: "استاد دانشگاه",
      group: "5",
      bio: "از اساتید دانشگاه رازی در گرایش شبکه\nفارغ التحصیل دانشگاه هلند",
      id: 3
    },
    {
      fullname: "فرهاد مردوخی",
      photo: "https://eng.razi.ac.ir/documents/584082/794919/%D9%81%D8%B1%D9%87%D8%A7%D8%AF+%D9%85%D8%B1%D8%AF%D9%88%D8%AE%DB%8C.jpg/b3ce626d-1519-394c-2153-328f0b0df781?t=1621937484760&download=true",
      mobile: "09123339900",
      email: "mardukhi@gmail.com",
      job: "استاد دانشگاه",
      group: "5",
      bio: "از اساتید دانشگاه رازی کرمانشاه گرایش نرم افزار",
      id: 4
    },
    {
      fullname: "آرزو کامران",
      photo: "https://eng.razi.ac.ir/documents/584082/794919/%D8%AF%DA%A9%D8%AA%D8%B1+%D8%A2%D8%B1%D8%B2%D9%88+%DA%A9%D8%A7%D9%85%D8%B1%D8%A7%D9%86.jpg/201d5e2c-4515-c58b-07d5-77faadb78045?t=1621937481027&download=true",
      mobile: "09227879900",
      email: "kamran@gamil.com",
      job: "استاد دانشگاه",
      group: "5",
      bio: "از اساتید دانشگاه رازی کرمانشاه گرایش سخت افزار",
      id: 5
    },
    {
      fullname: "عبدالحسین فتحی",
      photo: "https://eng.razi.ac.ir/documents/584082/794919/%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D8%AD%D8%B3%DB%8C%D9%86+%D9%81%D8%AA%D8%AD%DB%8C.jpg/b1b9385e-d686-8fab-4833-37bfda8fb2b5?t=1621937271273&download=true",
      mobile: "09332244555",
      email: "fathi@gmail.com",
      job: "استاد دانشگاه",
      group: "4",
      bio: "از اساتید دانشگاه رازی کرمانشاه گرایش سخت افزار",
      id: 6
    }
  ],
  groups: [
    {
      id: "1",
      name: "همکار"
    },
    {
      id: "2",
      name: "دوست"
    },
    {
      id: "3",
      name: "فامیل"
    },
    {
      id: "4",
      name: "سرویس"
    },
    {
      id: "5",
      name: "آشنا"
    }
  ]
}

export const getAllContacts = () => {
  return AllContacts.contacts;
}

export const getAllGroups = () => {
  return AllContacts.groups;
}

export const deleteContact = (index) => {
  let newContacts = AllContacts.contacts.filter(contact => contact.id !== index);
  AllContacts.contacts = newContacts;
  return newContacts;
}

export const createContact = (contact) => {
  let newContacts = [...AllContacts.contacts, contact];
  AllContacts.contacts = newContacts;
  return newContacts;
}

export const getContact = (index) => {
  const contact = AllContacts.contacts.find(contact => contact.id === index);
  return contact;
}

export const getGroup = (index) => {
  const contact = AllContacts.contacts.find(contact => contact.id === parseInt(index));
  const group = AllContacts.groups.find(group => group.id === contact.group);
  return group.name;
}

export const getItemLastId = () => {
  const lastItem = AllContacts.contacts[AllContacts.contacts.length - 1];
  console.log(lastItem);
  return parseInt(lastItem.id);
}

export const updateContact = (index, contact) => {
  const idx = AllContacts.contacts.findIndex(contact => contact.id === index);          
  const keys = Object.keys(AllContacts.contacts[idx]);
  keys.map(key => AllContacts.contacts[idx][key] = contact[key]);
  return AllContacts.contacts;
}