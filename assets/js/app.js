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

const $header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
    $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
    
})

// Search toggle
