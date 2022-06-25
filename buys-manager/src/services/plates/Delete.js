import { platesRoutes } from "../../routes/routes";

export default (id) => new Promise((resolve, reject) => {
    let headers = new Headers({
        "Acces-Control-Allow-Origin": "*"
    });

    let request = new Request(platesRoutes.base + `/${id}`, {
        method: "DELETE",
        headers
    });

    fetch(request)
        .then(res => resolve(res.status == 204 ? true : false));
});