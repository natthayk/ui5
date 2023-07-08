sap.ui.define([
	"sap/ui/core/mvc/XMLView"
], function (XMLView) {
	"use strict";

	XMLView.create({
		viewName: "sap.ui.demo.Walkthrough.view.App"
	}).then((oView) =>{
		oView.placeAt("content");
	});

});