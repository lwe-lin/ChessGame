/* @ts-self-types="./executor_wasm.d.ts" */
import * as wasm from "./executor_wasm_bg.wasm";
import { __wbg_set_wasm } from "./executor_wasm_bg.js";

__wbg_set_wasm(wasm);
wasm.__wbindgen_start();
export {
    OutputDevice, main
} from "./executor_wasm_bg.js";
