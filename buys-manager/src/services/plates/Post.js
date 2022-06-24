import { platesRoutes } from "../../routes/routes";

export default () => new Promise((resolve, reject) => {
    let headers = new Headers({
        "Accept": "application/json",
        'Access-Control-Allow-Origin': '*'
    });

    let request = new Request(platesRoutes.base, {
        method: "POST",
        headers
    });

    fetch(request)
        .then(res => res.json())
        .then(data => resolve(data));
});