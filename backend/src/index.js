const app = require("./app");
const env = require("./env");

async function main() {
    try {
        await app.listen(env.port);
        console.log("Server listening in " + env.port);
    } catch (ex) {
        console.log("ERROR: " + ex);
    }
}

main();