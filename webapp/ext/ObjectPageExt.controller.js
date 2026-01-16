sap.ui.define(
    ["sap/ui/core/mvc/ControllerExtension", "sap/ui/model/json/JSONModel", "sap/m/MessageToast"],
    function (ControllerExtension, JSONModel, MessageToast) {
        "use strict";

        return ControllerExtension.extend("materialbysupplierextension.ext.ObjectPageExt", {
            onInit: function () {
                var uiModel = new JSONModel({
                    workflowStage: "Quotation Review",
                    lastAction: "No action yet"
                });
                var view = this.getView ? this.getView() : null;
                if (!view && this.base && this.base.getView) {
                    view = this.base.getView();
                }
                if (view) {
                    view.setModel(uiModel, "ui");
                }
            },
            onRequestQuote: function () {
                this._updateLastAction("Quote requested");
                MessageToast.show("Quote request queued for the supplier.");
            },
            onFlagSupplier: function () {
                this._updateLastAction("Supplier flagged for review");
                MessageToast.show("Supplier flagged for follow-up.");
            },
            _updateLastAction: function (text) {
                var model = this.getView().getModel("ui");
                if (model) {
                    model.setProperty("/lastAction", text);
                }
            }
        });
    }
);
