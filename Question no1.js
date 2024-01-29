// Fetching data from the REST Countries API
fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => {
        // Task a: Get all the countries from Asia continent/region using Filter function
        const asiaCountries = data.filter(country => country.region === "Asia");
        console.log("Countries in Asia:", asiaCountries);

        // Task b: Get all the countries with a population of less than 2 lakhs using Filter function
        const countriesWithLowPopulation = data.filter(country => country.population < 200000);
        console.log("Countries with population less than 2 lakhs:", countriesWithLowPopulation);

        // Task c: Print name, capital, flag using forEach function
        console.log("Details of countries:");
        data.forEach(country => {
            console.log(`Name: ${country.name.common}, Capital: ${country.capital}, Flag: ${country.flags[0]}`);
        });

        // Task d: Print the total population of countries using reduce function
        const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);
        console.log("Total Population of Countries:", totalPopulation);

        // Task e: Print the country that uses US dollars as currency
        const usDollarCountries = data.filter(country => country.currencies && country.currencies.USD);
        console.log("Countries using US dollars:", usDollarCountries);
    })
    .catch(error => console.error("Error fetching data:", error));


