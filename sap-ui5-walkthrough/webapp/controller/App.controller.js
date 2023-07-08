sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function(Controller, MessageToast,JSONModel,ResourceModel) {
    'use strict';
    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
        onInit : function () {
            // set data model on view
            var oData = {
               recipient : {
                  name : "BooDii"
               }
            };
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
            console.log(oData);

            // set i18n model on view
            var i18nModel = new ResourceModel({
                bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
                supportedLocales:[""],
                fallbackLocale:""
            });
            //Set to the view
            this.getView().setModel(i18nModel, "i18n");
         },
        onShowHello: function () {
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);
            //Show message
            MessageToast.show(sMsg);
        }
    });
});


