import React, { useState, useEffect } from "react";
import CardItem from "../Card";
import { useQuery } from "react-query";
import Buttons from "../Buttons";
import { getPrivateSchools, getPublicSchools } from "./queries";
import "./style.scss";
import SearchBar from "../SearchBar";
import { Button } from "react-bootstrap";

export default function List() {
  const [typeOfSchool, setTypeOfSchool] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [filterSchoolsPublic, setFilterSchoolsPublic] = useState([]);
  const [filterSchoolsPrivate, setFilterSchoolsPrivate] = useState([]);

  const { data: privateSchools, status: privateSchoolsCallStatus } = useQuery(
    ["PRIVATE_SCHOOLS"],
    () => getPrivateSchools()
  );

  const { data: publicSchools, status: publicSchoolCallStatus } = useQuery(
    ["USER_CREDENTIALS"],
    () => getPublicSchools()
  );

  useEffect(() => {
    if (
      publicSchoolCallStatus === "success" &&
      privateSchoolsCallStatus === "success"
    ) {
      const filteredSchoolsPublic = publicSchools.filter(function (name) {
        return name.properties.NOME_ESCOLA.includes(searchInput);
      });
      setFilterSchoolsPublic(filteredSchoolsPublic);
      const filteredSchoolsPrivate = privateSchools.filter(function (name) {
        return name.properties.INF_NOME.includes(searchInput);
      });
      setFilterSchoolsPrivate(filteredSchoolsPrivate);
    }
  }, [searchInput]);

  return (
    <div className="list-container">
      <div className="container">
        <SearchBar value={searchInput} setSearchInput={setSearchInput} />
      </div>
      <div className="container shadow-bottom">
        <Buttons
          setTypeOfSchool={setTypeOfSchool}
          typeOfSchool={typeOfSchool}
        />
      </div>
      <div className="download-container">
        <a href="files/EscolasPrivadas.xlsx" download>
        <Button variant="secondary">Download BD Privadas</Button>
        </a>
        <a href="files/EscolasPublicas.xlsx" download>
        <Button variant="secondary">Download BD Publicas</Button>
        </a>
      </div>
      <div className="cards-container">
        {typeOfSchool === "private" && (
          <div className="container">
          {searchInput.length
            ? filterSchoolsPrivate?.map((school, index) => (
                <div className="card" key={school.id}>
                  <CardItem CardData={school} key={index} />
                </div>
              ))
            : privateSchools?.map((school, index) => (
                <div className="card" key={school.id}>
                  <CardItem CardData={school} key={index} />
                </div>
              ))}
        </div>
      )}
        {typeOfSchool === "public" && (
          <div className="container">
            {searchInput.length
              ? filterSchoolsPublic.map((school, index) => (
                  <div className="card" key={school.id}>
                    <CardItem CardData={school} key={index} />
                  </div>
                ))
              : publicSchools?.map((school, index) => (
                  <div className="card" key={school.id}>
                    <CardItem CardData={school} key={index} />
                  </div>
                ))}
          </div>
        )}
        {typeOfSchool === "" && (
          <div className="container">
            {searchInput.length
              ? filterSchoolsPublic.map((school, index) => (
                  <div className="card" key={school.id}>
                    <CardItem CardData={school} key={index} />
                  </div>
                ))
              : publicSchools?.map((school, index) => (
                  <div className="card" key={school.id}>
                    <CardItem CardData={school} key={index} />
                  </div>
                ))}
           {searchInput.length
            ? filterSchoolsPrivate?.map((school, index) => (
                <div className="card" key={school.id}>
                  <CardItem CardData={school} key={index} />
                </div>
              ))
            : privateSchools?.map((school, index) => (
                <div className="card" key={school.id}>
                  <CardItem CardData={school} key={index} />
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
