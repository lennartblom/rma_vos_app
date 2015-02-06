/*
 * File: app/controller/Main.js
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

Ext.define('VosNavigator.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            InitView: '#InitialView',
            MainView: '#MainView',
            FahrplanerView: '#FahrplanerView',
            GoalsView: '#GoalsView',
            SettingsView: '#SettingsView',
            WeckerView: '#WeckerView',
            AchView: '#AchView',
            StartButton: '#StartButton',
            gameButton: 'button#game',
            settingsButton: 'button#settingsButton',
            achieveButton: 'button#achieveButton',
            startImageInv: 'image#StartImageInv',
            startImage: 'image#StartImage',
            gameImageInv: 'image#GameImageInv',
            gameImage: 'image#GameImage',
            achImageInv: 'image#AchImageInv',
            achImage: 'image#AchImage',
            settingsImageInv: 'image#SettingsImageInv',
            settingsImage: 'image#SettingsImage',
            weckerImageInv: 'image#WeckerImageInv',
            weckerImage: 'image#WeckerImage',
            weckerButton: 'button#weckerButton'
        },

        control: {
            "button#StartButton": {
                tap: 'startButtonAction'
            },
            "button#game": {
                tap: 'gameButton'
            },
            "button#weckerButton": {
                tap: 'weckerButton'
            },
            "button#settingsButton": {
                tap: 'settingsButton'
            },
            "button#achieveButton": {
                tap: 'achButton'
            }
        }
    },

    startButtonAction: function(button, e, eOpts) {
        alert("Lol");
        this.getMainView().hide();
        this.getFahrplanerView().show({type:"slide",direction:"left"});
        //this.getApplication().getController('Wecker').wecken();
    },

    gameButton: function(button, e, eOpts) {
         this.getMainView().hide();
         this.getGoalsView().show({type:"slide",direction:"left"});
        this.getApplication().getController('Goals').setupClock();

    },

    weckerButton: function(button, e, eOpts) {
          this.getMainView().hide();
          this.getWeckerView().show({type:"slide",direction:"left"});
    },

    settingsButton: function(button, e, eOpts) {
          this.getMainView().hide();
          this.getSettingsView().show({type:"slide",direction:"left"});
    },

    achButton: function(button, e, eOpts) {
          this.getMainView().hide();
          this.getAchView().show({type:"slide",direction:"left"});
    },

    launch: function() {
        console.log("Main Controller wird aufgerufen.lol");
    }

});