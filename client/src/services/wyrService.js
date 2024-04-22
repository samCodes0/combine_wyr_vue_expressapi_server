// scripts that do things such as send out requests to API's are commonly referred too as services.
export default {
    getRandomWYR() {
        // IMPORTANT: if the url for fetch doesn't contain a port number, then it will default to the port number
        // currently being used to run the page
        return fetch('/wyr').then((response) => {
            console.log(response);
            return response.json();
        });
    }
}