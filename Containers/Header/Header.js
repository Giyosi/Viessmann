import HeaderWrapper from "./HeaderWrapper"
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons"
import { headerData } from "../../data/HeaderData";

const Header = ({ theme }) => {
    console.log(theme)
    return (
        <HeaderWrapper>
            <div className="d-flex justify-content-between align-items-center shadow py-3 px-5">
                <img className="logo" src="https://viessmann.vercel.app/images/viessman%20logo.png" alt="" />
                <div className="d-flex">
                    <ul className="d-flex me-3 align-items-center">
                        {headerData.map((v, i) => {
                            return (<li key={i} className="me-4">
                                <Link href={v.href}><a className="text-white"><FontAwesomeIcon icon={v.icon} className="me-1" />{v.title}</a></Link>
                            </li>
                            )
                        })}
                    </ul>
                    <button className="btn btn-danger me-3"><FontAwesomeIcon icon={faSearch} className="text-white" /></button>
                    <button className="btn btn-danger" onClick={theme}>   <FontAwesomeIcon icon={faBars} className="text-white" /></button>
                </div>
            </div>
        </HeaderWrapper>
    )
}
export default Header;