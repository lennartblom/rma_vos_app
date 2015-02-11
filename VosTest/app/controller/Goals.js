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
            "list#sightsDaily": {
                itemtap: 'onListItemTap'
            },
            "list#dataview_weekly_goals": {
                itemsingletap: 'onListItemSingletap'
            }
        }
    },

    goalsBackButton: function(button, e, eOpts) {
        this.getGoalsView().hide();
        this.getMainView().show();
        this.stopClock();

    },

    onListItemTap: function(dataview, index, target, record, e, eOpts) {
        var details = this.getApplication().getController('goalsDetailsController');
        details.setData(record.data.name, record.data.description, record.data.link);
             this.getGoalsView().hide();
             this.getGoalsDetails().show();


    },

    onListItemSingletap: function(dataview, index, target, record, e, eOpts) {
        var details = this.getApplication().getController('goalsDetailsController');
        details.setData(record.data.name, record.data.description, record.data.link);
        this.getGoalsView().hide();
        this.getGoalsDetails().show();

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
        console.log("goals launcer");
    },

    clock: function() {
        var date = this.getDate();
        var remaining =this.getTimeRemaining();
        //console.log("ticktack");
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
        label = this.getWeeklyGoalsCounter();
        label.setHtml(remaining.tag+" Tage "+remaining.stunde+
                                            " Stunden "+remaining.minute+" Minuten");

    },

    launch: function() {

    },

    stopClock: function() {
        var clock = this.getTaskClock();
        clearInterval(clock);
        clearInterval(this.taskClock);
        this.taskClock = null;
        console.log("timer wurde gestoppt");
    }

});