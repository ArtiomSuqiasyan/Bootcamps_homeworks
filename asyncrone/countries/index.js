const input = document.querySelector("input");
const filterCountries = document.querySelector(".countries");
input.addEventListener("input", () => {
  filterCountries.innerText = "";
  fetch(`https://restcountries.eu/rest/v2/name/${input.value}`)
    .then((res) => res.json())
    .then((countries) => {
      countries.forEach((country) => {
        const img = document.createElement("img");
        img.setAttribute("src", `${country.flag}`);
        filterCountries.append(img);
      });
    });
});