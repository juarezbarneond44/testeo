import { App } from './app'
//import { connect } from './database'

async function main() {
    const app = new App(5002);
    await app.listen();
}

main();