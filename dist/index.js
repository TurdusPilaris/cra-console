"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const setting_1 = require("./setting");
app_1.app.listen(setting_1.SETTING.PORT, () => {
    console.log(`Example app listening on port ${setting_1.SETTING.PORT}`);
});
