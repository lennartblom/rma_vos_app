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
        sliderPace: 30,

        refs: {
            settingsBackButton: 'button#settingsBackButton',
            MainView: 'container#MainView',
            settingsView: 'container#goals1',
            mybutton: 'button#mybutton',
            labelsettings: 'label#label_settings',
            gpsPace: 'sliderfield#gpsPace',
            goalsTimerOnOffSwitch: 'togglefield#goalsTimerOnOffSwitch'
        },

        control: {
            "button#settingsBackButton": {
                tap: 'settingsBackButton'
            },
            "sliderfield#gpsPace": {
                change: 'onGpsPaceChange',
                drag: 'onGpsPaceDrag'
            },
            "togglefield#goalsTimerOnOffSwitch": {
                change: 'goalsTimerOnOff'
            }
        }
    },

    settingsBackButton: function(button, e, eOpts) {

        this.getSettingsView().hide();
        this.getMainView().show({type:"slide",direction:"right"});

    },

    onGpsPaceChange: function(me, sl, thumb, newValue, oldValue, eOpts) {
        Ext.getCmp('label_settings').setHtml("GPS-Positionierung alle "+newValue+" Sekunden.");
        this.setSliderPace(newValue);
        this.getApplication().getController('Wecker').resetGeoTimer(newValue*1000);
    },

    onGpsPaceDrag: function(sliderfield, sl, thumb, e, eOpts) {
        var slider = this.getGpsPace();
        var label = Ext.getCmp('label_settings');
        label.setHtml("GPS-Positionierung alle "+slider.getValue()+" Sekunden.");
        this.sliderPace = slider.getValue();
        this.getApplication().getController('Wecker').resetGeoTimer(slider.getValue());

    },

    goalsTimerOnOff: function(togglefield, newValue, oldValue, eOpts) {

    }

});