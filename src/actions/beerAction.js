export const fetchBreweries = () => {
  return (dispatch) => {
    fetch("https://api.openbrewerydb.org/breweries")
      .then((resp) => resp.json())
      .then((brews) => console.log("breweries", brews));
  };
};
