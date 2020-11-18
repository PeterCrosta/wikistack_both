const app = require('./app.js')


const PORT = 3000

const init = () => {
    app.listen(PORT, () => {
        console.log(`Listening at http://localhost:${PORT}`);
    })
}

init()