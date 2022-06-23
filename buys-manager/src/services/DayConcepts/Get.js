import routes from "../../routes/routes"

export default () => new Promise((resolve, reject) => {
    let headers = new Headers({
        "Accept": "application/json",
        'Access-Control-Allow-Origin': '*'
    });

    let request = new Request(routes.dayConcepts.base, {
        method: "GET",
        headers
    });

    fetch(request)
    .then(res => res.json())
    .then(data => resolve(data))
    .catch(err => resolve([]));
});