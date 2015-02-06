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
            weeklyGoalsCounter: 'label#weeklyGoalsCounter'
        },

        control: {
            "button#goalsBackButton": {
                tap: 'goalsBackButton'
            },
            "list#sights_daily": {
                itemtap: 'onListItemTap'
            }
        }
    },

    goalsBackButton: function(button, e, eOpts) {
        this.getGoalsView().hide();
        this.getMainView().show();
        clearInterval(this.getTaskClock());
    },

    onListItemTap: function(dataview, index, target, record, e, eOpts) {
        alert('Selected!{name}'+{name});

        /*var goalsDetails = Ext.create('VosTest.view.goalsDetails');
        this.getGoalsView().push(detailsView);*/
    },

    initiateDate: function() {

        var datum = new Date();
        var date = this.getDate();

        date.tag=datum.getDay();
        date.stunde = datum.getHours();
        date.minute = datum.getMinutes();
        date.sekunde = datum.getSeconds();
    },

    setupClock: function() {
        this.initiateDate();
        this.taskClock.setInterval(clock,1000);
    },

    clock: function() {
        var datum = this.getDate();
        var remaining =this.getTimeRemaining();
        date.tag=datum.getDay();
        date.stunde = datum.getHours();
        date.minute = datum.getMinutes();
        date.sekunde = datum.getSeconds();
        remaining.tag = 7-date.tag;
        remaining.stunde = 24-date.stunde;
        remaining.minute=60-date.minute;
        remaining.sekunde=60-date.sekunde;

        var daily = this.getDailyGoalsCounter();
        daily.setHTML("<p>"+remaining.stunde+" Stunden"+remaining.minute+
                      " Minuten"+remaining.sekunde+" Sekunde"+"</p>");




    },

    launch: function() {
        this.setupClock();
    }

});