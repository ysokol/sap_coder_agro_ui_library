sap.ui.define([
	"sap/ui/base/Object"
], function (Object) {
	"use strict";
	/*eslint-env es6*/
	/*global ymaps*/

	// https://codeburst.io/es6-destructuring-the-complete-guide-7f842d08b98f
	return Object.extend("my.sap_coder_agro_ui_library.utils.ValueListClassifier", {
		constructor: function () {},
		classify: function (iValue, iLimit1, iLimit2, iLimit3, iLimit4) {
			if (iValue <= iLimit1) {
				return 1;
			} else if (iValue <= iLimit2) {
				return 2;
			} else if (iValue <= iLimit3) {
				return 3;
			} else if (iValue <= iLimit4) {
				return 4;
			} else {
				return 5;
			}
		}
	});
});