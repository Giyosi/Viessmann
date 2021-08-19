import { data } from "../../data/Pages"
import { HeaderWrapper } from "./HeaderWrapper"
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faHome, faSearch } from "@fortawesome/free-solid-svg-icons"


const Header = () => {
    return (
        <HeaderWrapper>
            <div className="d-flex justify-content-between align-items-center me-5 px-5">
                <img className="logo" src="https://viessmann.vercel.app/images/viessman%20logo.png" alt="" />
                <div className="d-flex">
                    <ul className="d-flex me-3">
                        {data.map((v, i) => {
                            return (<li className="me-4">
                                <Link href={v.href}><a className="text-white"><FontAwesomeIcon icon={v.icon} className="me-1" />{v.title}</a></Link>
                            </li>
                            )
                        })}
                    </ul>
                    <FontAwesomeIcon icon={faSearch} className="me-3 text-white" />
                    <FontAwesomeIcon icon={faBars} className="ms-3 text-white" />
                </div>
            </div>
        </HeaderWrapper>
    )
}

export default Header