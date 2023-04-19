import React, { Fragment, useContext, useEffect, useState } from "react";
import { AiOutlineSearch,AiFillLinkedin,AiOutlineTwitter,AiFillGithub } from "react-icons/ai";
import "../Styles/cards.css";
import { Container } from "./Navbar";
import { Link } from "react-router-dom";

function Cards({id}) {
  const { toggle } = useContext(Container) || {};
  const [countries, setCountries] = useState([]);
  const [searchValue, setSearchValue] = useState("");


  const RestApi = async () => {
    const response = await fetch("https://restcountries.com/v2/all");
    const data = await response.json();
    setCountries(data);
  };

  useEffect(() => {
    RestApi();
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Fragment>
      <div id={!toggle ? "mainBgColor" : "secondaryBgColor"}>
        <div
          className="input_section"
          id={!toggle ? "mainColor" : "secondaryColor"}
        >
          <AiOutlineSearch
            fontSize="49px"
            style={{ marginLeft: "-1rem", marginRight: "2rem" }}
            className={!toggle ? "inputColor" : "inputBgColor"}
          />
          <input
            placeholder="Search for a country..."
            type="text"
            id={!toggle ? "mainColor" : "secondaryColor"}
            className={!toggle ? "inputColor" : "inputBgColor"}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>

        <div
          className="cards_container"
          id={!toggle ? "mainBgColor" : "secondaryBgColor"}
        >
          {filteredCountries.map((country) => (
           <Link to={`/country/${country.alpha3Code}`} key={country.alpha3Code} style={{textDecorationLine:"none"}} >
        
              <div
                className="cards"
                key={country.numericCode}
                id={!toggle ? "mainColor" : "secondaryColor"}
              >
                <div>
                  <img src={country.flags.svg} alt={country.name} />
                </div>
                <div className="text_container">
                  <h2>{country.name}</h2>
                  <p>
                   <strong> Population:</strong> <span>{country.population}</span>
                  </p>
                  <p>
                    <strong>Region: </strong> <span>{country.region}</span>
                  </p>
                  <p>
                    <strong>Capital:</strong> <span>{country.capital}</span>
                  </p>
                </div>
              </div>
            
           </Link>
          ))}
        </div>

          <div className="profile_link">
          <div className="profile">
         <a href="https://www.linkedin.com/in/ugochukwu-emmanuel-ba798a25a/">
           <AiFillLinkedin color="#0072b1" fontSize={30} cursor="pointer"  fontWeight="bolder"/>
         </a>
          <a href="https://twitter.com/9Gunna9">
            <AiOutlineTwitter color="	#1DA1F2" fontSize={30} fontWeight="bolder"/>
          </a>
          <a href="https://github.com/Gunna9999">
            <AiFillGithub color="black" fontSize={30} cursor="pointer"  fontWeight="bolder" />
          </a>
          </div>
         </div>
      </div>

    </Fragment>
  );
}

export default Cards;
