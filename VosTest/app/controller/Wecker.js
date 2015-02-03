/*
 * File: app/controller/Wecker.js
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

Ext.define('VosNavigator.controller.Wecker', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            weckerBackButton: 'button#weckerBackButton',
            MainView: 'container#MainView',
            weckerView: 'container#mycontainer1',
            weckRadius: 'sliderfield#weckRadius',
            sliderValueLabel: 'label#sliderValueLabel',
            weckerOnOffSwitch: 'togglefield#weckerOnOffSwitch',
            selectTune: 'selectfield#selectTune',
            shortestPath: 'checkboxfield#shortestPath',
            mehrfachKlingelnOnOffSwitch: 'togglefield#mehrfachKlingelnOnOffSwitch'
        },

        control: {
            "button#weckerBackButton": {
                tap: 'weckerBackButton'
            },
            "sliderfield#weckRadius": {
                change: 'setWeckRadius',
                drag: 'onSliderfieldDrag'
            },
            "togglefield": {
                change: 'onTogglefieldChange'
            },
            "selectfield": {
                change: 'onSelectfieldChange'
            }
        }
    },

    weckerBackButton: function(button, e, eOpts) {
        this.getWeckerView().hide();
        this.getMainView().show();
    },

    setWeckRadius: function(me, sl, thumb, newValue, oldValue, eOpts) {
        Ext.getCmp('sliderValueLabel').setHtml(newValue+" vor dem Zielpunkt");
        this.sliderValue = newValue;
    },

    onSliderfieldDrag: function(sliderfield, sl, thumb, e, eOpts) {
        var slider = sliderfield.getComponent();
        var label = Ext.getCmp('sliderValueLabel');
        label.setHtml(slider.getValue()+"m vor dem Zielpunkt");
        this.sliderValue = slider.getValue();
    },

    onTogglefieldChange: function(togglefield, newValue, oldValue, eOpts) {
        this.weckerIsOn=newValue;
        console.log("Toggle Field value: "+newValue);
        this.getGeo(newValue);
    },

    onSelectfieldChange: function(selectfield, newValue, oldValue, eOpts) {
        this.tune = newValue;
    },

    init: function(application) {
        this.sliderValue = 200;
        this.weckerIsOn = false;
        this.shortestPath = true;
        this.weckerKlingeltMehrfach=false;
        this.tune = "superMario.mp3";
        this.geo = null;
        this.lat = 0.0;
        this.lng = 0.0;
        this.trackingId = 0;
        this.activeInterval=0;
    },

    wecken: function() {
        navigator.vibrate(1);
        var resource = "resources/tones/" + this.tune;
        navigator.vibrate(1);
        var myMedia = new Media(resource);
        navigator.vibrate(1);
        myMedia.play();
        navigator.vibrate(1);
        navigator.notification.alert("Sie haben den Ziel Ort erreicht, oder befinden sich in unmitelbarer Nähe",function(){myMedia.stop();},"Zielort Erreicht!");
        navigator.vibrate(1);
    },

    getGeo: function(isTracking) {
        var pace = this.getApplication().getController('Settings').sliderPace;

        if(isTracking){
            console.log("device is tracking");
            this.saveGeo(pace*1000);
            this.setupBackgroundPace();
        }else{
            clearInterval(this.activeInterval);
            this.bgGeo.stop();
               console.log("pace disabled");

        }
    },

    resetGeoTimer: function(interval) {
        if(this.weckerIsOn){
            clearInterval(this.activeInterval);
            this.saveGeo(interval*1000);
        }
    },

    saveGeo: function(interval) {
        var geoCallback = function(position){
                    console.log(position.coords.latitude);
                    console.log(position.coords.longitude);
                    console.log('[JS] Koordinaten: '+position.coords.latitude+
                        ' '+position.coords.longitude);
                };
        var geoError = function(error){
                        console.log("error while paceing");
        };
        console.log("saveGeo wurde aufgerufen.");
        function getGeoObject(){ navigator.geolocation.getCurrentPosition(
                geoCallback,
                geoError,
                {
                    enableHighAccuracy: true
                });
        }
        this.activeInterval = setInterval(getGeoObject,interval);
    },

    setupBackgroundPace: function() {
               /* window.navigator.geolocation.getCurrentPosition(function(location) {
                    console.log("background init: "+location.coords.latitude + " "+ location.coords.longitude);
                    this.lat=location.coords.latitude;
                    this.lng=location.coords.longitude;
                });*/

                this.bgGeo = window.plugins.backgroundGeoLocation;

                /**
                * This would be your own callback for Ajax-requests after POSTing background geolocation to your server.
                */
                var yourAjaxCallback = function(response) {
                    ////
                    // IMPORTANT:  You must execute the #finish method here to inform the native plugin that you're finished,
                    //  and the background-task may be completed.  You must do this regardless if your HTTP request is successful or not.
                    // IF YOU DON'T, ios will CRASH YOUR APP for spending too much time in the background.
                    //
                    //
                    this.bgGeo.finish();
                };

                /**
                * This callback will be executed every time a geolocation is recorded in the background.
                */
                var callbackFn = function(location) {
                    console.log("background track: "+location.latitude + " "+ location.longitude);
                    this.lat=location.latitude;
                    this.lng=location.longitude;
                    //navigator.notification.alert("Aktuelle Position: "+this.lat+" "+this.lng,"Alert");
                    // Do your HTTP request here to POST location to your server.
                    //
                    //
                    yourAjaxCallback.call(this);
                };

                var failureFn = function(error) {
                    console.log('BackgroundGeoLocation error');
                };

                // BackgroundGeoLocation is highly configurable.
                this.bgGeo.configure(callbackFn, failureFn, {
                    locationTimeout: 5,
                    desiredAccuracy: 0,
                    stationaryRadius: 0,
                    distanceFilter: 0,
                    activityType: "AutomotiveNavigation",
                    stopOnTerminate: true,// <-- iOS-only
                    debug: false     // <-- enable this hear sounds for background-geolocation life-cycle.
                });

                // Turn ON the background-geolocation system.  The user will be tracked whenever they suspend the app.
                this.bgGeo.start();

                // If you wish to turn OFF background-tracking, call the #stop method.
                // bgGeo.stop()
    }

});