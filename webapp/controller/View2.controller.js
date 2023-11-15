sap.ui.define([
    "sap/ui/core/mvc/Controller",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("demo.fundamentos.controller.View2", {
            onInit: function () {
                //resgata o roteador
                var oRoteador = this.getOwnerComponent().getRouter();

                //associa uma função ao evento da rota Detalhe do Estado (é executada toda vez que a rota for chamada)
                oRoteador.getRoute("DetalheDoEstado").attachPatternMatched(this.rotaDeDetalhe, this);


            },

            rotaDeDetalhe: function(oEvent){
                var estado = oEvent.getParameters().arguments.estado
                debugger;
            },

            onBeforeRendering: function(){
            }

        });
    });
