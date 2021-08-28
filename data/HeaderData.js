import { faAddressBook, faBuilding, faCopy, faHome, faTools, faWrench } from "@fortawesome/free-solid-svg-icons";

const headerData = [
    { title: "Главная", icon: faHome, href: "/" },
    { title: "Продукты", icon: faTools, href: "/products" },
    { title: "Прием заявок", icon: faCopy, href: "/applications" },
    { title: "Сервис", icon: faWrench, href: "/service" },
    { title: "О нас", icon: faBuilding, href: "/about" },
    { title: "Контакты", icon: faAddressBook, href: "/contacts" },

]

export { headerData };