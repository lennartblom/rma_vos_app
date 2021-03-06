/*
 * File: app/controller/Achievements.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.4.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.4.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('VosNavigator.controller.Achievements', {
    extend: 'Ext.app.Controller',

    config: {
        dailyGoalsCounter: 3,
        reachedBusNetwork: 0,

        refs: {
            achView: '#AchView',
            achBackButton: 'button#achBackButton',
            mainView: 'container#MainView',
            mapView: '#MapView',
            netzanteil: 'label#netzanteil',
            dailyGoalsAchCounter: '#dailyGoalsAchCounter'
        },

        control: {
            "button#achBackButton": {
                tap: 'achBackButton'
            },
            "button#scoreButton": {
                tap: 'onButtonTap'
            },
            "dataview#abc": {
                initialize: 'onDataviewInitialize'
            },
            "dataview#weekendTasksDone": {
                initialize: 'onDataviewInitialize1'
            }
        }
    },

    achBackButton: function(button, e, eOpts) {
        this.resetPercentage();
        this.getAchView().hide();
        this.getMainView().show({type:"slide",direction:"right"});
    },

    onButtonTap: function(button, e, eOpts) {
        this.getAchView().hide();
        this.getMapView().show({type:"slide",direction:"left"});
    },

    onDataviewInitialize: function(component, eOpts) {
        var myPanel = Ext.create('Ext.Panel', {
            html: "<div class=\"itemWrapper\"><div class=\"content\">Erreichte Tagesziele</div><div class=\"dailyGoalsCounterIcon\">" + this.getDailyGoalsCounter() + "</div></div>"
        });

        component.add([myPanel]);
    },

    onDataviewInitialize1: function(component, eOpts) {
        var $name = [];

        $name.push("Zoo");
        $name.push("Nettebad");
        $name.push("Moskaubad");
        $name.push("Löwenpudel");

        var i=0;
        for(i;i<$name.length;i++){
        var myPanel = Ext.create('Ext.Panel', {
            html: "<div class=\"itemWrapper\"><div class=\"content\">"+ $name[i] +"</div><div class=\"weekendGoalsCup\"></div></div>"
        });

        component.add([myPanel]);
        }
    },

    launch: function() {
        Ext.getStore('sights').load();
        Ext.getStore('sights').filter("visited", true);
        this.getNetzanteil().setData({"percent":0});
        //this.setDailyGoalsCounter(this.dailyGoalsCounter);
    },

    percentageAnimation: function(stop) {
        setTimeout(function() {
            var element = document.getElementById("percentage");
            var counter = 0;
            var delay = 250;
            var counterOnes = 0;
            var i = 0;

            countUp();

            function countUp () {
                setTimeout(function () {

                    displayOnes();

                    function displayOnes(){
                        setTimeout(function(){
                            if((i*10+counterOnes < stop)){
                                document.getElementById("int").innerHTML = i*10+counterOnes+1;
                            }else{
                                return 0;
                            }

                            if(counterOnes < 9){
                                counterOnes++;
                                displayOnes();
                            }else{
                                document.getElementById("int").innerHTML = i*10;
                            }
                        },delay/10);
                    }

                    if (i < 10) {
                        counterOnes = 0;
                        i++;
                        countUp();
                    }

                    if(i*10 < stop){
                        element.classList.remove("p"+(i-1)+"0");
                        element.classList.add("p"+i+"0");
                        document.getElementById("int").innerHTML = i*10;
                    }else{
                        i = 10;
                        return 0;
                    }

                }, delay);
            }

        },1250);

    },

    resetPercentage: function() {
        var element = document.getElementById("percentage");
        var i = 1;

        for(i;i<=10;i++){
            element.classList.remove("p"+(i-1)+"0");
        }

        document.getElementById("int").innerHTML = 0;
    }

});