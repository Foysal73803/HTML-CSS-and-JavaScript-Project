let countryInput = document.getElementById("country-inp");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");

countryInput.addEventListener("keypress", function(event) {
    if(event.key === "Enter"){
        searchBtn.click();
    }
});

searchBtn.addEventListener("click", () =>  {
        let countryName =  countryInput.value;
        let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
        fetch(finalURL).then((response) => response.json())
        .then((data) => {
    
            //console.log(finalURL);
            //  console.log(data[0]);
            // console.log(data[0].flags.svg);
            // console.log(data[0].capital[0]);
            // console.log(data[0].name.common);
            // console.log(data[0].continents[0]);
            // console.log(Object.keys(data[0].currencies)[0]);
            // console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
            // console.log(Object.values(data[0].languages).toString().split(",").join(","));
    
            result.innerHTML = 
            `<img src="${data[0].flags.svg}" class="flag-img">
            <h2 class="Country-name">${data[0].name.common}</h2>
            <div class="all-data">
                <h3>Capital: <span>${data[0].capital[0]}</span></h3>
                <h3>Language: <span>${Object.values(data[0].languages).toString().split(",").join(", ")}</span></h3>
                <h3>Currency: <span>${Object.keys(data[0].currencies)[0]}</span></h3>
                <h3>Population: <span>${data[0].population}</span></h3>
                <h3>Continent: <span>${data[0].continents[0]}</span></h3>
                <h3>Total Area: <span>${data[0].area}</span></h3>
            </div>`;
        })
        .catch(() => {
                   if (countryName.length == 0) {
                     result.innerHTML = `<h3>The input field cannot be empty</h3>`;
                   } else {
                     result.innerHTML = `<h3>Please enter a valid country name.</h3>`;
                   }
                });
});