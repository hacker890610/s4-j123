/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module './style.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

var API_KEY = "cdc8a43f66fe45cf8ad002d3897ff780";
function getGamesByGenre(genre) {
  return fetch("https://api.rawg.io/api/games?key=".concat(API_KEY, "&genres=").concat(genre)).then(function (response) {
    return response.json();
  }).then(function (data) {
    return data.results;
  })["catch"](function (error) {
    return console.error('Erreur:', error);
  });
}
document.addEventListener('DOMContentLoaded', function () {
  var homeLink = document.getElementById('home-link');
  var searchLink = document.getElementById('search-link');
  var contentDiv = document.getElementById('content');
  homeLink.addEventListener('click', function (event) {
    event.preventDefault();
    contentDiv.textContent = 'Bienvenue sur la page d\'accueil !';
  });
  searchLink.addEventListener('click', function (event) {
    event.preventDefault();
    contentDiv.innerHTML = "\n      <form id=\"search-form\">\n        <input type=\"text\" id=\"search-input\" placeholder=\"Entrez le nom du jeu\">\n        <button type=\"submit\">Rechercher</button>\n      </form>\n      <div id=\"results\"></div>\n    ";
    attachSearchFormListener(); // Attachez l'écouteur d'événements après avoir ajouté le formulaire au DOM
  });
  function attachSearchFormListener() {
    var form = document.getElementById('search-form');
    var input = document.getElementById('search-input');
    var resultsDiv = document.getElementById('results');
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var searchTerm = input.value;
      getGamesByGenre(searchTerm).then(function (games) {
        resultsDiv.innerHTML = '';
        games.forEach(function (game) {
          var gameCard = document.createElement('div');
          gameCard.classList.add('game-card');
          gameCard.textContent = game.name;
          resultsDiv.appendChild(gameCard);
        });
      })["catch"](function (error) {
        console.error('Erreur:', error);
      });
    });
  } // Remove this extra closing curly brace
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7RUFDSixDQUFDLENBQUM7QUFDSixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2pfMS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qXzEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qXzEvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xuXG5jb25zdCBBUElfS0VZID0gcHJvY2Vzcy5lbnYuQVBJX0tFWTtcblxuZnVuY3Rpb24gZ2V0R2FtZXNCeUdlbnJlKGdlbnJlKSB7XG4gIHJldHVybiBmZXRjaChgaHR0cHM6Ly9hcGkucmF3Zy5pby9hcGkvZ2FtZXM/a2V5PSR7QVBJX0tFWX0mZ2VucmVzPSR7Z2VucmV9YClcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oZGF0YSA9PiBkYXRhLnJlc3VsdHMpXG4gICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0VycmV1cjonLCBlcnJvcikpO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zdCBob21lTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lLWxpbmsnKTtcbiAgY29uc3Qgc2VhcmNoTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtbGluaycpO1xuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICBob21lTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29udGVudERpdi50ZXh0Q29udGVudCA9ICdCaWVudmVudWUgc3VyIGxhIHBhZ2UgZFxcJ2FjY3VlaWwgISc7XG4gIH0pO1xuXG4gIHNlYXJjaExpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gYFxuICAgICAgPGZvcm0gaWQ9XCJzZWFyY2gtZm9ybVwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInNlYXJjaC1pbnB1dFwiIHBsYWNlaG9sZGVyPVwiRW50cmV6IGxlIG5vbSBkdSBqZXVcIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+UmVjaGVyY2hlcjwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgICAgPGRpdiBpZD1cInJlc3VsdHNcIj48L2Rpdj5cbiAgICBgO1xuICAgIGF0dGFjaFNlYXJjaEZvcm1MaXN0ZW5lcigpOyAvLyBBdHRhY2hleiBsJ8OpY291dGV1ciBkJ8OpdsOpbmVtZW50cyBhcHLDqHMgYXZvaXIgYWpvdXTDqSBsZSBmb3JtdWxhaXJlIGF1IERPTVxuICB9KTtcbiAgXG4gIGZ1bmN0aW9uIGF0dGFjaFNlYXJjaEZvcm1MaXN0ZW5lcigpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1mb3JtJyk7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWlucHV0Jyk7XG4gICAgY29uc3QgcmVzdWx0c0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHRzJyk7XG4gIFxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3Qgc2VhcmNoVGVybSA9IGlucHV0LnZhbHVlO1xuICAgICAgZ2V0R2FtZXNCeUdlbnJlKHNlYXJjaFRlcm0pXG4gICAgICAgIC50aGVuKChnYW1lcykgPT4ge1xuICAgICAgICAgIHJlc3VsdHNEaXYuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgZ2FtZXMuZm9yRWFjaCgoZ2FtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZ2FtZUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGdhbWVDYXJkLmNsYXNzTGlzdC5hZGQoJ2dhbWUtY2FyZCcpO1xuICAgICAgICAgICAgZ2FtZUNhcmQudGV4dENvbnRlbnQgPSBnYW1lLm5hbWU7XG4gICAgICAgICAgICByZXN1bHRzRGl2LmFwcGVuZENoaWxkKGdhbWVDYXJkKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1cjonLCBlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9IC8vIFJlbW92ZSB0aGlzIGV4dHJhIGNsb3NpbmcgY3VybHkgYnJhY2Vcbn0pO1xuIl0sIm5hbWVzIjpbIkFQSV9LRVkiLCJwcm9jZXNzIiwiZW52IiwiZ2V0R2FtZXNCeUdlbnJlIiwiZ2VucmUiLCJmZXRjaCIsImNvbmNhdCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwicmVzdWx0cyIsImVycm9yIiwiY29uc29sZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhvbWVMaW5rIiwiZ2V0RWxlbWVudEJ5SWQiLCJzZWFyY2hMaW5rIiwiY29udGVudERpdiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0ZXh0Q29udGVudCIsImlubmVySFRNTCIsImF0dGFjaFNlYXJjaEZvcm1MaXN0ZW5lciIsImZvcm0iLCJpbnB1dCIsInJlc3VsdHNEaXYiLCJzZWFyY2hUZXJtIiwidmFsdWUiLCJnYW1lcyIsImZvckVhY2giLCJnYW1lIiwiZ2FtZUNhcmQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwibmFtZSIsImFwcGVuZENoaWxkIl0sInNvdXJjZVJvb3QiOiIifQ==