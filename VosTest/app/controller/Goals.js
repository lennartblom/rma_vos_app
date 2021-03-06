/*
 * File: app/controller/Goals.js
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

Ext.define('VosNavigator.controller.Goals', {
    extend: 'Ext.app.Controller',

    config: {
        date: {
            tag: null,
            stunde: null,
            minute: null,
            sekunde: null
        },
        taskClock: null,
        timeRemaining: {
            tag: null,
            stunde: null,
            minute: null,
            sekunde: null
        },

        refs: {
            goalsBackButton: 'button#goalsBackButton',
            MainView: 'container#MainView',
            goalsView: 'container#GoalsView',
            dailyGoalsCounter: 'label#dailyGoalsCounter',
            weeklyGoalsCounter: 'label#weeklyGoalsCounter',
            sightsDaily: 'list#sightsDaily',
            goalsDetails: 'container#goalsDetails'
        },

        control: {
            "button#goalsBackButton": {
                tap: 'goalsBackButton'
            },
            "list#dataview_weekly_goals": {
                itemsingletap: 'onListItemSingletap'
            },
            "list#sightsDaily": {
                initialize: 'onListInitialize'
            }
        }
    },

    goalsBackButton: function(button, e, eOpts) {
        this.stopClock();
        this.getGoalsView().hide();
        this.getMainView().show({type:"slide",direction:"right"});

    },

    onListItemSingletap: function(dataview, index, target, record, e, eOpts) {
        var details = this.getApplication().getController('goalsDetailsController');
        details.setData(record.data.name, record.data.description, record.data.link);
        this.getGoalsView().hide();
        this.getGoalsDetails().show();

    },

    onListInitialize: function(component, eOpts) {
        var myPanel = Ext.create('Ext.Panel', {
            html: "<div class=\"itemWrapper stops-dailyGoals-single-item\"><div class=\"content\">Alte Poststraße</div></div>"
        });

        component.add([myPanel]);
    },

    initiateDate: function() {
        var datum = new Date();
        var date = this.getDate();

        date.tag=datum.getDay();
        date.stunde = datum.getHours();
        date.minute = datum.getMinutes();
        date.sekunde = datum.getSeconds();
        console.log("initiate Date wurde aufgerufen");

    },

    setupClock: function() {
        console.log("setup clock wurde aufgerufen");
        this.initiateDate();
        var task = this.getTaskClock();
        task = setInterval(Ext.bind(this.clock,this),1000);
        Ext.getStore('sights').load();
        Ext.getStore('sights').clearFilter();

    },

    clock: function() {
        var date = this.getDate();
        var remaining =this.getTimeRemaining();

        //console.log("var geladen");
        if(++date.sekunde>59){
            date.sekunde =0;
            if(++date.minute>59){
                date.minute = 0;
                if(++date.stunde>23){
                    date.stunde=0;
                    if(++date.tag>6){
                        date.tag = 0;
                    }
                }
            }
        }
        remaining.tag = 6 - date.tag;
        remaining.stunde = 23 - date.stunde;
        remaining.minute = 59 - date.minute;
        remaining.sekunde = 59 - date.sekunde;

        /*console.log("Verbleibende Zeit bis: "+
                                            remaining.tag+" "+remaining.stunde+
                                            " "+remaining.minute+" "+remaining.sekunde);*/
        var label = this.getDailyGoalsCounter();
        label.setHtml(remaining.stunde+" Stunden "+remaining.minute+
                      " Minuten "+remaining.sekunde+" Sekunden");


    },

    launch: function() {

    },

    stopClock: function() {

        clearInterval(this.getTaskClock());
        console.log("timer wurde gestoppt");
    },

    setupDaten: function() {
        var fp = this.getApplication().getController('Fahrplaner');
        var self = this;

        dataBaseActionGetVisitedStops();


        /**
        *
        *
        *function
        *
        *
        **/


        function dataBaseActionGetVisitedStops(){
            var db = fp.getDb();
            var i=0;
            var length=0;
            var innerFeld;
            var speicherFeld=[];
            var store = Ext.getStore('stopsUnvisited');
            store.load();
            db.transaction(function(tx) {
                //visited 0 == false :)
                tx.executeSql("select id, name, lat, long as lng, visited from stops;", [],
                              function(tx, res) {
                                  length = res.rows.length;

                                  for(i=0;i<length;i++){
                                      innerFeld = [];
                                      innerFeld[0]=res.rows.item(i).id;
                                      innerFeld[1]=res.rows.item(i).name;
                                      innerFeld[2]=res.rows.item(i).lat;
                                      innerFeld[3]=res.rows.item(i).lng;
                                      innerFeld[4]=res.rows.item(i).visited;
                                      speicherFeld[i]=innerFeld;
                                  }

                              },function(e){console.log("errror bei set Visited "+e.message);});
            },function(e){console.log(e.message+"getVisited successerror");},function(){
                console.log("getVisitedForMaps transaction successfull");
                length = speicherFeld.length;

                for(i=0;i<length;i++){
                    store.add({id:innerFeld[i][0],
                                                 long:innerFeld[i][3],
                                                 lat:innerFeld[i][2],
                                                 name:innerFeld[i][1],
                                                 visited:innerFeld[i][4]
                              });
                }


            });
        }










    }

});