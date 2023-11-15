sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
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

                var oEstados = {
                    valores: [
                        { nome: "São Paulo",
                          abrev: "SP"
                        },
                        { nome: "Rio Grande do Sul",
                          abrev: "RS"
                        },
                        { nome: "Minas Gerais",
                          abrev: "MG"
                        },
                        { nome: "Mato Grosso do Sul",
                          abrev: "MS"
                        }
                    ]
                };

                //declara o modelo Estados e passa os valores do objeto oEstados para a raiz do modelo criado
                var oModeloEstados = new JSONModel();
                oModeloEstados.setProperty("/", oEstados);
                
                //this = controller 
                //getView = recupera a instância da nossa view
                this.getView().setModel(oModeloEstados, "estados");
                //configura o modelo principal (sem nome) com os dados
                var oModel = this.getOwnerComponent().getModel();
                oModel.setProperty("/", oDados);
            },

            onBeforeRendering: function(){
            }
        });
    });
