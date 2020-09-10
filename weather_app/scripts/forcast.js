class Forecast {
    constructor() {
        this.key = '93b1FMVafiLKMtK8VbJYQBwWbNewwQAY';
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
        this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
    }
    async updateCity(city) {
        const cityDetails = await this.getCity(city);
        const weather = await this.getWeather(cityDetails.Key);

        return { cityDetails, weather };
    }
    // get city information
    async getCity(city) {
        const query = `?apikey=${this.key}&q=${city}`;

        const response = await fetch(this.cityURI + query);
        const data = await response.json();

        // console.log(data);
        return data[0];
    }
    // get weather information
    async getWeather(id) {
        const query = `${id}?apikey=${this.key}`;

        const response = await fetch(this.weatherURI + query);
        const data = await response.json();

        // console.log(data);
        return data[0];
    }
}


// getCity('kolkata')
//     .then(data => getWeather(data.Key)).then(data => console.log(data))
//     .catch(error => console.error(error));

