import { platesRoutes } from "../../routes/routes";

export default (data) => new Promise((resolve, reject) => {
    let headers = new Headers({
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
    });

    let request = new Request(platesRoutes.base, {
        method: "POST",
        headers,
        body: JSON.stringify(data)
    });

    fetch(request)
        .then(res => res.json())
        .then(data => resolve(data));
});