import CardsData from "../../data/CardsData";
import CardsWrapper from "../../Wrappers/CardsWrapper";

const Cards = () => {
    return (
        <CardsWrapper>
            <div className="container mt-5">
                <div className="row">
                    {CardsData.map((v, i) => {
                        return <div key={i} className="col-sm-6 col-md-4 col-lg-3">
                            <div className="cards">
                                <img className=" w-100 h-100" src={v.img} alt="" />
                                <div className="cardsText text-white">
                                    <h3>{v.title}</h3>
                                    <p>{v.subtitle}</p>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </CardsWrapper>
    )
}

export default Cards;
