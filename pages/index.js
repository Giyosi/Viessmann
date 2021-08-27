import { Button, makeStyles } from "@material-ui/core";
import Cards from "../Components/Cards/Cards";
import Container from "../Containers/Container/Container";
const card3 = [
  {
    img: "https://viessmann.vercel.app/images/howbuy.png",
    title: "Где купить?",
    subtitle: `Партнеры ООО "Viessmann"`,
    to: "Где купить?",
    href: ""
  },
  {
    img: "https://viessmann.vercel.app/images/viessman.jpg",
    title: "Новости",
    subtitle: "Все новости можно прочитать",
    to: "Новости",
    href: ""
  },
  {
    img: "https://viessmann.vercel.app/images/help.webp",
    title: "Бесплатная консультация",
    subtitle: "Консультационная поддержка Viessmann",
    to: "Прием заявок",
    href: ""
  },
  {
    img: "https://viessmann.vercel.app/images/smart-home.webp",
    title: "Приложения Viessmann",
    subtitle: "Что такое smart-home?",
    to: "Smart-home",
    href: ""
  },
  {
    img: "https://viessmann.vercel.app/images/apps.webp",
    title: "Управление Viessmann через приложения",
    subtitle: "Управление Viessmann через приложения",
    to: "Приложения Viessmann",
    href: ""
  },
  {
    img: "https://viessmann.vercel.app/images/services.jpg",
    title: "Сервис",
    subtitle: "Полный ассортимент сервисных услуг компании Viessmann",
    to: "Сервис",
    href: ""
  },
  {
    img: "https://viessmann.vercel.app/images/about.webp",
    title: "О нас",
    subtitle: "Информация о компании Viessmann",
    to: "О нас",
    href: ""
  },
  {
    img: "https://viessmann.vercel.app/images/menu4back.jpg",
    title: "Контакты",
    subtitle: `ООО "Viessmann" в Узбекистане`,
    to: "Контакты",
    href: ""
  },
]


const Home = () => {
  return (
    <Container>
      <div className="homeBlack">
        <div className="homeBg">
          <div className="container">
            <div className="row">
              <div className="col-12 col-xl-10">
                <div className="card shadow p-3 pb-4">
                  <h1 className="fw-bold display-6 mt-4 text-white">Фирма Viessmann - ваш партнер во всех областях</h1>
                  <p className="fs-5 text-white">Компания Viessmann Group является одним из ведущих в мире производителей систем отопления/охлаждения
                    и промышленных установок.</p>
                  <Button variant="contained" size="medium" color="primary" className="button fw-bold">
                    О НАС
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Cards />
      <section className="section2 p-5 my-5">
        <div>
          <h2 className="fw-bold text-center">Фирма Viessmann - ваш партнер во всех областях</h2>
          <hr />
          <p className="mx-3 p-3">Компания Viessmann Group является одним из ведущих в мире производителей систем отопления/охлаждения и промышленных установок. Фирма Viessmann, выпуская полный комплект оборудования, предлагает индивидуальные решения и эффективные системы в диапазоне мощности от 1,5 до 120 000 кВт для любых областей применения и всех энергоносителей.</p>
          <div className="row p-3 px-4 pb-5">
            <div className="col-md-6 col-lg-4">
              <h5>Системы отопления</h5>
              <p>Выпускаемое нами комплектное оборудование отличается высшим качеством и устанавливает новые масштабы в отрасли. Сосредоточившись на эффективном потреблении энергии, мы добиваемся снижения затрат, одновременно экономя ресурсы и сберегая окружающую среду.</p>
              <hr />
            </div>
            <div className="col-md-6 col-lg-4">
              <h5>Промышленные системы</h5>
              <p>Экономная и экологичная выработка энергии, а также высокая эксплуатационная готовность и надежность - вот основные требования, предъявляемые к энергетическим установкам.</p>
              <hr />
            </div>
            <div className="col-md-6 col-lg-4">
              <h5>Системы охлаждения</h5>
              <p>Фирма Viessmann является одним из ведущих европейских производителей инновационной холодильной техники. Обширный ассортимент выпускаемой продукции и предоставляемых услуг содержит высокоэффективные решения для промышленного применения.</p>
              <hr />
            </div>
          </div>
        </div>
      </section>
      <section className="section3">
        <div className="container">
          <div className="row">
            {card3.map((v, i) => {
              return <div key={i} className="col-sm-6 col-md-4 col-lg-3 mb-3" style={{ height: " 400px" }}>
                <div className="p-0 pb-3 h-100 rounded-3 shadow overflow-hidden">
                  <img className="w-100 h-50" src={v.img} alt="" />
                  <div className="text-center h-50 d-flex flex-column justify-content-around py-3">
                    <p className="fw-bold card_title" >{v.title}</p>
                    <p className="m-0 mb-2">{v.subtitle}</p>
                    <p>{v.to}</p>
                  </div>
                </div>
              </div>
            })}
          </div>
        </div>
      </section>
      
    </Container>
  )
}


export default Home;