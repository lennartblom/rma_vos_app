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
        date: null,

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
    },

    onListItemTap: function(dataview, index, target, record, e, eOpts) {
        var goalsDetails = Ext.create('VosTest.view.goalsDetails');
        this.getGoalsView().push(detailsView);
    },

    launch: function() {
        this.date = new Date();
        var daily = this.getDailyGoalsCounter();
        daily.setHTML(date.now());
    }

});