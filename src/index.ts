import {app} from "./app";
import {SETTING} from "./setting"


app.listen(SETTING.PORT, () => {
    console.log(`Example app listening on port ${SETTING.PORT}`)
})