import { DATA_LOAD } from "../constants/action-type";

export function addData(payload) {
    return { type: DATA_LOAD, payload }

};