/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets, window */

define(function (require, exports, module) {
	'use strict';

	var LanguageManager = brackets.getModule("language/LanguageManager");

	//HTML Refine
	var html_language = LanguageManager.getLanguage("xml");
	//ASP.NET File Extensions
	html_language.addFileExtension("plist");
});