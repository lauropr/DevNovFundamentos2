sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("demo.fundamentos.controller.View1", {
            onInit: function () {

                //declara um objeto com propriedades
                var oDados = {
                    nome: "Nome",
                    sobrenome: "Sobrenome",
                    idade: "40",
                    nacionalidade: "Brasileiro"
                };

                //configura o modelo principal (sem nome) com os dados
                var oModel = this.getOwnerComponent().getModel();
                oModel.setProperty("/", oDados);
            },

            onBeforeRendering: function(){
            }
        });
    });
