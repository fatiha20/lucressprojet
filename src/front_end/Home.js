import Header from "./Header";
import { Link } from "react-router-dom";
import{CardImg,Card,CardBody,CardTitle,CardSubtitle,CardText,Button,CardGroup} from 'reactstrap'
//"./"
function Home () {
   const menu = [{
        img: "./img/60b96479cc43b66f0f2ef98e1ecbb0a9.jpg",
        id: 1,
        class:'active'
    },
    {
        img: "./img/c262ab17ee067259d5ac78cca6263f99.jpg",
        id: 2,
        class:''
    },
    {
        img: "./img/f4e46867dfa46e2b09469975944dd605.jpg",
        id: 3,
        class:''
    },

    {
      img: "./img/7e51638fdf1dab2e0e4ba5a9bc950031.jpg",
      id: 4,
      class:''
  },
]
    return (
      <div>
        <Header/>
          <div>
            <div className="container-fluid">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div className="carousel-inner">
    {menu.map((key,index)=>(
      <div className={"carousel-item "+ key.class} key={index}>
        <img src={key.img} className="d-block w-100" alt="..."/>
      </div>    
    ))}
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

            </div>
        
          </div>
      </div>  

    )
    }
    export default Home;