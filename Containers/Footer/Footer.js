import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import FooterData from "../../data/FooterData";
import FooterWrapper from "./FooterWrapper";


const Footer = () => {
    return (
        <FooterWrapper>
            <div className="row">
                <div className="col-md-6 col-lg-4 col-xl-3">
                    <img className="logo" src="https://viessmann.vercel.app/images/viessman%20logo.png" alt="logo" />
                    <h4 className="fw-bold mt-4">Социальные сети</h4>
                    <FontAwesomeIcon className="fs-3 mx-3 mt-4" icon={faInstagram}/>
                    <FontAwesomeIcon className="fs-3 mx-3 mt-4" icon={faFacebook}/>
                    <FontAwesomeIcon className="fs-3 mx-3 mt-4" icon={faYoutube}/>
                </div>
                {FooterData.map((v, i) => {
                    return (
                        <div key={i} className="col-md-6 col-lg-4 col-xl-3 px-5">
                            <div>
                                <h5>{v.title}</h5>
                                {v.link.map((v, i) => {
                                    return <ul key={i} className="d-flex">
                                        <li><Link href={v.href}><a>{v.title}</a></Link></li>
                                    </ul>
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </FooterWrapper>
    )
}

export default Footer;