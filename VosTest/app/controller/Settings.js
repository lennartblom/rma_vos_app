/*
 * File: app/controller/Settings.js
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

Ext.define('VosNavigator.controller.Settings', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            settingsBackButton: 'button#settingsBackButton',
            MainView: 'container#MainView',
            settingsView: 'container#goals1',
            mybutton: 'button#mybutton',
            mysliderfield: 'sliderfield#mysliderfield',
            labelsettings: 'label#label_settings'
        },

        control: {
            "button#settingsBackButton": {
                tap: 'settingsBackButton'
            },
            "sliderfield#gpsPace": {
                change: 'getPace',
                drag: 'onSliderfieldDrag'
            }
        }
    },

    settingsBackButton: function(button, e, eOpts) {

        this.getSettingsView().hide();
        this.getMainView().show();

    },

    getPace: function(me, sl, thumb, newValue, oldValue, eOpts) {
        me.up("#mysliderfield").down("#label_settings").setHtml("Aktuelle Position wird im "+newValue+" Sekunden Takt überprüft.");
    },

    onSliderfieldDrag: function(sliderfield, sl, thumb, e, eOpts) {
        var slider = sliderfield.getComponent();
        var label = Ext.getCmp('label_settings');
        label.setHtml("Aktuelle Position wird im "+slider.getValue()+" Sekunden Takt überprüft.");
    },

    init: function(application) {
        this.sliderPace = 30;
    }

});