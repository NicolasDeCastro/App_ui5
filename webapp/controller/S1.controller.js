sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,MT,Json) {
        "use strict";

        return Controller.extend("project1.controller.S1", {

            onInit:function(){
            //     this.oDados = {
            //         rua:"rua,15",
            //         estado:"sp"
            //     };
             
        
              
                
                var url ="https://viacep.com.br/ws/01001000/json/";
                var model = new Json(url);
                // this.byId("input0").setModel(model);
                this.getView().setModel(model);


                var model2 = new Json({
                    termo: ""
                });
                this.getView().setModel(model2,"segundo");
                
            },







            onSearch: function(oEvent){

                
                // var oInput0 = this.byId("input0")
                // oInput0.setValue(this.oDados.rua)

                // var oInput2 = this.byId("input2")
                // oInput2.setValue(this.oDados.estado)
                var model = this.getView().getModel();


                // var seach = this.byId("seachField").getValue(); opção 1 
              
                // var seach = oEvent.getParameters().query; opção 2

                var seach = this.getView().getModel("segundo").getProperty("/termo");
                function onRequestCompleted(oEvt){
                
                // MT.show("funcionou")
                }
            


                var sUrl ="https://viacep.com.br/ws/"+seach+"/json/ ";

                model.loadData(sUrl);

                MT.show("dados cadastrados")
            },
           

            
        
            



        });
    });
