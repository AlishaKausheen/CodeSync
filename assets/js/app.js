import { fetchData } from "./api.js";
import { numberToKilo } from "./module.js";

/**
 
* @param {NodeList} $elements NodeList
* @param {String} $eventType String
* @param {Function} $callback Function

*/


const addEventOnElements = function ($elements, eventType, callback) {
    for (const $item of $elements) {
        $item.addEventListener(eventType, callback)
    }
};

//header scroll state