"use strict";

(function () {
  function isSupportedBrowser() {
    var isIe11 = !!window.MSInputMethodContext && !!document.documentMode;
    var isEdgeLegacy = navigator.userAgent.indexOf("Edge/") > -1;
    return !isIe11 && !isEdgeLegacy;
  }

  function includes(array, search) {
    return array.indexOf(search) >= 0;
  }

  function getLanguage(scriptLang) {
    if (!scriptLang) {
      return navigator.language.substring(0, 2).toLowerCase();
    }

    return scriptLang.toLowerCase();
  }

  function getLocation(scriptLocation) {
    var location = (scriptLocation || "ch").toLowerCase();
    var allowedLocations = ["ch", "de", "be", "lu"];

    if (!includes(allowedLocations, location)) {
      return "ch";
    }

    return location;
  }

  function validateLanguage(language, location) {
    var allowedLangsBe = ["fr", "nl"];

    if (location === "be" && !includes(allowedLangsBe, language)) {
      return "fr";
    }

    var allowedLangsDe = ["de"];

    if (location === "de" && !includes(allowedLangsDe, language)) {
      return "de";
    }

    var allowedLangsCh = ["de", "fr", "it", "en"];

    if (location === "ch" && !includes(allowedLangsCh, language)) {
      return "de";
    }

    var allowedLangsLu = ["fr", "de", "en"];

    if (location === "lu" && !includes(allowedLangsLu, language)) {
      return "fr";
    }

    return language;
  }

  function main() {
    if (!isSupportedBrowser()) {
      var scriptElement = document.querySelector(
        "[src$='baloise-unsupported-browsers.js']"
      );

      if (scriptElement) {
        var location = getLocation(scriptElement.dataset.location);
        var language = validateLanguage(
          getLanguage(scriptElement.dataset.language),
          location
        );
        window.location.href = "https://baloise.com/unsupported-browsers/"
          .concat(location, "/")
          .concat(language);
      }
    }
  }

  main();
})();
