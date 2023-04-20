import { Link, useParams } from "react-router-dom";
import { Fragment, useContext, useEffect,useState } from "react";
import "../Styles/details.css"
import { Container } from "./Navbar";
import {AiOutlineArrowLeft,AiFillLinkedin,AiOutlineTwitter,AiFillGithub } from "react-icons/ai"

function Details(){
    const [details,setDetails] = useState({});
    const {toggle} = useContext(Container)
    const {id} = useParams()

  useEffect(() => {
    const getDetails = async () => {
      const response = await fetch(`https://restcountries.com/v2/alpha/${id}`);
      const data = await response.json();
      setDetails(data);
    };
    getDetails()
    },[id]);

    console.log(details)
    return (
        <Fragment>
            <div className="back_homepage" id={!toggle ? "details_color" : "details_color_2"}>
                <AiOutlineArrowLeft />
                    <Link to="/" id={!toggle ? "details_color" : "details_color_2"}>Back</Link>
            </div>
            
        <div className="details_container"  id={!toggle ? "details_color" : "details_color_2"}>

            <div className="details_image">
                <img src={details.flag} alt={details.name} width="560px" height="400px" style={{boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.5)"}}/>
            </div>

           <div className="infooo">

            <div>
                <h1>{details.name}</h1>
            </div>

            <div className="details_info">
                <div>
            <p><strong>Native Name:</strong> {details.nativeName}</p>
            <p><strong>Population:</strong> {details.population}</p>
            <p><strong>Region:</strong> {details.region}</p>
            <p><strong>Sub Region:</strong> {details.subregion}</p>
            <p><strong>Capital:</strong> {details.capital}</p>
                </div>

                <div>
            <p><strong>Top Level Domain:</strong> {details.topLevelDomain}</p>
            <p><strong>Currencies:</strong> {details.currencies?.[0].name}</p>
            <p><strong>Languages:</strong> {details.languages?.[0].name} </p>
                </div>
            </div>
            
            <div>
            <p><strong>Border Countries:</strong> <span> {details.borders?.[0]}</span> <span> {details.borders?.[1]}</span> <span> {details.borders?.[2]}</span> <span> {details.borders?.[3]}</span> <span> {details.borders?.[4]}</span> <span> {details.borders?.[5]}</span></p>
             </div>

             <div>

             </div>
            </div> 
        </div>

         <div className="profile_link">
          <div className="profile">
         <a href="https://www.linkedin.com/in/ugochukwu-emmanuel-ba798a25a/">
           <AiFillLinkedin color="#0072b1" fontSize={30} cursor="pointer"  fontWeight="bolder"/>
         </a>
          <a href="https://twitter.com/9Gunna9">
            <AiOutlineTwitter color="	#1DA1F2" fontSize={30} fontWeight="bolder"/>
          </a>
          <a href="https://github.com/Dev-Emmyy">
            <AiFillGithub color="black" fontSize={30} cursor="pointer"  fontWeight="bolder" />
          </a>
          </div>
         </div>
        </Fragment>
    )
}

export default Details;