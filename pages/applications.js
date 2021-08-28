import React from 'react'
import Header from '../Containers/Header'
import ApplicationsWrapper from '../Wrappers/ApplicationsWrapper'

const Applications = () => {
    return (
        <ApplicationsWrapper>
            <Header />
            <div className="p-5 mt-5">
                <h3 className="fw-bolder text-center">Отопление жилых зданий | Консультационная поддержка Viessmann</h3>
                <hr />
                <div className="col-md-10 offset-md-2 col-lg-8 offset-lg-2 mt-5">
                    <div class=" d-flex align-items-center">
                        <input type="checkbox" id="checkbox1" />
                        <label htmlFor="checkbox1" className="m-0 ms-2">Я хочу получить бесплатную консультационную поддержку</label>
                    </div>
                        <p className="text-secondary m-0 mt-3">Пожалуйста, укажите суть Вашего обращения </p>
                    <div className=" d-flex align-items-center">
                        <input type="radio" id="radio1" />
                        <label className="m-0 p-0 ms-1 me-4" htmlFor="radio1">Технический вопрос</label>
                        {/* <p className="m-0 p-0 me-4"></p> */}
                        <input type="radio" id="radio2" />
                        <label className="m-0 p-0 ms-1 me-4" htmlFor="radio2">Покупка оборудования</label>
                        <input type="radio" id="radio3" />
                        <label className="m-0 p-0 ms-1 me-4" htmlFor="radio3">Сервисные услуги</label>
                        <input type="radio" id="radio4" />
                        <label className="m-0 p-0 ms-1 me-4" htmlFor="radio4">Другое</label>
                    </div>
                    <p className="text-secondary m-0 mt-3">В случае, если вы хотите приобрести оборудование, пожалуйста, укажите для каких целей</p>
                    <div className="d-flex align-items-center">
                        <input type="radio" id="radio2.1" />
                        <label className="m-0 p-0 ms-1 me-4" htmlFor="radio2.1">Строительство нового здания</label>
                        <input type="radio" id="radio2.2" />
                        <label className="m-0 p-0 ms-1 me-4" htmlFor="radio2.2">Модернизация, реконструкция здания</label>
                    </div>
                    <p className="text-secondary m-0 mt-3">Выберите тип оборудования</p>
                    <div className="d-flex align-items-center">
                    <input type="checkbox" id="checkbox2.1" />
                    <label className="m-0 p-0 ms-1 me-4" htmlFor="checkbox2.1">product group 1</label>
                    <input type="checkbox" id="checkbox2.2" />
                    <label className="m-0 p-0 ms-1 me-4" htmlFor="checkbox2.2">product group 2</label>
                    <input type="checkbox" id="checkbox2.3" />
                    <label className="m-0 p-0 ms-1 me-4" htmlFor="checkbox2.3">product group 3</label>
                    </div>
                    <p className="text-secondary m-0 mt-3">Контактные данные</p>
                </div>
            </div>

        </ApplicationsWrapper>
    )
}

export default Applications
