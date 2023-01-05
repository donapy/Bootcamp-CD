import React, { useState } from "react";
import Axios from "axios";

const Search = () => {
  const [searched, setSearched] = useState(false);
  const [paramAPI, setparamAPI] = useState(false);
  const [notValid, setNotValid] = useState(false);
  const handleSearch = async () => {
    const paramOptionAPI = document.getElementById("paramOptionAPI").value;
    setparamAPI(paramOptionAPI);
    const idAPI = document.getElementById("inputId").value;
    if (idAPI === "") {
      alert("Error, Not valid Id");
      return;
    }
    // console.log(`Param: ${paramOptionAPI} -- Id: ${idAPI}`);
    let result;
    try {
      result = await Axios.get(
        `https://swapi.dev/api/${paramOptionAPI}/${idAPI}`
      );
    } catch (error) {
      setSearched(false);
      setNotValid(true);
      return;
    }
    setNotValid(false);
    // console.log(result);
    // console.log(result.data);
    setSearched(result.data);
  };

  const handleRender = () => {
    let response;
    switch (paramAPI) {
      case "people":
        response = (
          <>
            <h1>{searched.name}</h1>
            <p>Height: {searched.height}</p>
            <p>Hair Color: {searched.hair_color}</p>
            <p>Eye Color: {searched.eye_color}</p>
            <p>Gender: {searched.gender}</p>
          </>
        );
        break;
      case "films":
        response = (
          <>
            <h1>{searched.title}</h1>
            <p>Director: {searched.director}</p>
            <p>Producer: {searched.producer}</p>
            <p>Release Date: {searched.release_date}</p>
            <p>Episode Id: {searched.episode_id}</p>
          </>
        );
        break;
      case "starships":
        response = (
          <>
            <h1>{searched.name}</h1>
            <p>Model: {searched.model}</p>
            <p>Class: {searched.starship_class}</p>
            <p>Manufacturer: {searched.manufacturer}</p>
            <p>Length: {searched.length}</p>
          </>
        );
        break;
      case "vehicles":
        response = (
          <>
            <h1>{searched.name}</h1>
            <p>Model: {searched.model}</p>
            <p>Class: {searched.vehicle_class}</p>
            <p>Manufacturer: {searched.manufacturer}</p>
            <p>Length: {searched.length}</p>
          </>
        );
        break;
      case "species":
        response = (
          <>
            <h1>{searched.name}</h1>
            <p>Classification: {searched.classification}</p>
            <p>Designation: {searched.designation}</p>
            <p>Eye Colors: {searched.eye_colors}</p>
            <p>Skin Colors: {searched.skin_colors}</p>
          </>
        );
        break;
      case "planets":
        response = (
          <>
            <h1>{searched.name}</h1>
            <p>Diameter: {searched.diameter}</p>
            <p>Gravity: {searched.gravity}</p>
            <p>Population: {searched.population}</p>
            <p>Terrain: {searched.terrain}</p>
          </>
        );
        break;
      default:
        break;
    }
    return response;
  };

  return (
    <div>
      <div>
        <div>
          <span>Search for: </span>
          <select name="paramOptionAPI" id="paramOptionAPI">
            <option value="people">People</option>
            <option value="films">Films</option>
            <option value="starships">Starships</option>
            <option value="vehicles">Vehicles</option>
            <option value="species">Species</option>
            <option value="planets">Planets</option>
          </select>
        </div>
        <div>
          <span>Id: </span>
          <input
            type="number"
            name="inputId"
            id="inputId"
            placeholder="Write the Id..."
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
      <div>
        {searched && handleRender()}
        {notValid && (
          <>
            <h4>Estos no son los droides que esta buscando</h4>
            <img
              src="https://lumiere-a.akamaihd.net/v1/images/62bf0e03e8459d0001f4881b-image_71900d89.jpeg?region=192%2C0%2C1152%2C864"
              alt="obiwan_img"
              width="200px"
            ></img>
          </>
        )}
      </div>
    </div>
  );
};

export default Search;
