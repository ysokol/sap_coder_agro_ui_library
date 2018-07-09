sap.ui.define([
	"sap/ui/core/Core",
	"sap/ui/core/library"
],function(Core, Library) {
	"use strict";

	sap.ui.getCore().initLibrary({
		name : "my.sap_coder_agro_ui_library",
		noLibraryCSS: true,
		dependencies : [
			"sap.ui.core"
		],
		types: [],
		interfaces: [],
		controls: [],
		elements: [
			"my.sap_coder_agro_ui_library.utils.ValueListClassifier"
		],
		version: "0.1.0"
	});

	return my.sap_coder_agro_ui_library;

}, /* bExport= */ false);