//import { fetchData } from "./api.js";
//import { numberToKilo } from "./module.js";

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
const /* {nodeElement} */ $searchToggler = document.querySelector("[data-search-toggler]");
const /* {nodeElement} */ $searchField = document.querySelector("[data-search-field]");
 
let isExpanded = false;

$searchToggler.addEventListener("click", function (e) {
    $header.classList.toggle("search-active");
    isExpanded = isExpanded ? false : true;
    this.setAttribute("aria-expanded", isExpanded);
    $searchField.focus();
})