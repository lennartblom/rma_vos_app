/*
 * File: app.js
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

// @require @packageOverrides
Ext.Loader.setConfig({

});


Ext.application({
    models: [
        'sight',
        'stop'
    ],
    stores: [
        'sights',
        'stops'
    ],
    views: [
        'goalsDetails',
        'mainScreen',
        'MySearchField',
        'fahrplanerView',
        'goalsView',
        'settingsView',
        'weckerView',
        'achView',
        'searchView',
        'InitialView',
        'mapView'
    ],
    name: 'VosNavigator',

    launch: function() {
        this.callLauncher();
        Ext.create('VosNavigator.view.InitialView', {fullscreen: true});
    },

    callLauncher: function() {
            this.getApplication().getController('Goals').launch();
            this.getApplication().getController('Fahrplaner').launch();

    }

});
