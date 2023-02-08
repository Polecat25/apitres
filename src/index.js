import app from "./app.js"
import { PORT } from "./config.js"

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
