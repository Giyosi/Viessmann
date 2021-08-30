import MainWrapper from "../Wrappers/MainWrapper";

const Main = () => {
    return (
        <MainWrapper>
            <div className="main-container">
                <div className="rasm-fon">
                    <img className="main-bg img css-1gzxeik"src="https://viessmann.vercel.app/images/services.jpg" alt="" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 768.001">
                        <path d="M1920,768H825V201H625V768H329V89H129V768H0V0H377V520H577V0H873V579h200V0h847V768Z" transform="translate(0.001 0.001)" fill="#fef"></path>
                    </svg>
                </div>
            <h1 className="display-3 fw-bolder">Продукты</h1>
            </div>
        </MainWrapper>
    )
}

// width="1920" height="768.001"

export default Main;
