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
        weckerIsOn: false,
        sliderValue: 200,
        shortestPath: true,
        weckerKlingeltMehrfach: false,
        tune: 'resources/tones/superMario.mp3',
        aktuellePosition: {
            lat: 0.0,
            lng: 0.0
        },
        weckerKlingelt: false,
        trackingId: null,
        taskEngine: {
            taskGetPos: null,
            taskCheckDistance: null,
            taskBackgroundGeo: null
        },

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
                tap: 'weckerBackButtonTap'
            },
            "sliderfield#weckRadius": {
                change: 'onWeckRadiusChange',
                drag: 'onWeckRadiusDrag'
            },
            "togglefield#weckerOnOffSwitch": {
                change: 'onWeckerOnOffChange'
            },
            "selectfield#selectTune": {
                change: 'onTuneChange'
            }
        }
    },

    weckerBackButtonTap: function(button, e, eOpts) {
        this.getWeckerView().hide();
        this.getMainView().show();
    },

    onWeckRadiusChange: function(me, sl, thumb, newValue, oldValue, eOpts) {
        Ext.getCmp('sliderValueLabel').setHtml(newValue+" vor dem Zielpunkt");
        this.setSliderValue(newValue);
    },

    onWeckRadiusDrag: function(sliderfield, sl, thumb, e, eOpts) {
        var slider = this.getWeckRadius();
        var label = this.getSliderValueLabel();
        label.setHtml(slider.getValue()+"m vor dem Zielpunkt");
        this.setSliderValue(slider.getValue());
    },

    onWeckerOnOffChange: function(togglefield, newValue, oldValue, eOpts) {
        this.setWeckerIsOn(newValue);
        console.log("Toggle Field value: "+newValue);
        this.initiateTracking(newValue);

    },

    onTuneChange: function(selectfield, newValue, oldValue, eOpts) {
        this.setTune("resources/tones/"+newValue);
    },

    wecken: function() {
        var taskCheckDistance = this.getTaskEngine().taskCheckDistance;
        navigator.vibrate(1);
        if(!this.getWeckerKlingelt()){
            var weckTune = new Media(this.getTune());
            weckTune.play();
            navigator.notification.alert("Sie haben den Ziel Ort erreicht, oder befinden sich in unmitelbarer Nähe",
                                         function(){
                                                    weckTune.stop();
                                                    clearInterval(taskCheckDistance);
            },"Zielort Erreicht!");
            navigator.vibrate(1);
            this.setWeckerKlingelt(true);
        }
        navigator.vibrate(1);
    },

    initiateTracking: function(isTracking) {
        console.log("initiateTracking wurde aufgerufen");
        var pace = this.getApplication().getController('Settings').getSliderPace()*1000;
        if(isTracking){
            this.initiateTaskManager(pace);
            console.log("device is tracking");
        }else{
            this.stopTaskManager();
            console.log("pace disabled");

        }
    },

    resetGeoTimer: function(interval) {
        if(this.getWeckerIsOn()){
            var taskEngine = this.getTaskEngine();
            clearInterval(taskEngine.taskGetPos);
            taskEngine.taskGetPos = setInterval(Ext.bind(this.activateTracker,this),interval);
            console.log("resetGeoTimer wurde aufgerufen");
        }
    },

    entfernung: function() {
        console.log("distance Berechnung");
        var pos = this.getAktuellePosition();
        var destPos = this.getApplication().getController('Fahrplaner').getZielOrt();
        var latCurrent =pos.lat;
        var lngCurrent =pos.lng;
        var latDestination =destPos.lat;
        var lngDestination =destPos.lng;
        var distance = 0.0;
        var deltaX = 71.5 * (lngCurrent-lngDestination);
        var deltaY = 111.3 * (latCurrent-latDestination);
        var radius = this.getSliderValue();
        if(deltaX!==0||deltaY!==0){
        distance = Math.sqrt(deltaX*deltaX+deltaY*deltaY)*1000;
        }
        console.log(distance);
        console.log(radius);
        if(distance<=radius){
            console.log("distance<radius");
            this.wecken();
        }

    },

    checkDistance: function() {
        this.entfernung();

    },

    activateTracker: function() {

        console.log("activateTracker wurde aufgerufen");
             this.trackingId = new Ext.device.Geolocation.getCurrentPosition({
                 allowHighAccuracy:true,
                 success: Ext.bind(function(position){
                                                     var pos = this.getAktuellePosition();
                                                     pos.lat=position.coords.latitude;
                                                     pos.lng=position.coords.longitude;
                                   },this),
                 failure: function(){
                     console.log("Fehler beim Tracken");
                 }
             });
        console.log("Aktuelle Pos wurde erfasst");
        console.log("Aktuelle Position: "+this.getAktuellePosition().lat+" "+this.getAktuellePosition().lng);
    },

    initiateTaskManager: function(pace) {
        var taskEngine = this.getTaskEngine();
        taskEngine.taskGetPos = setInterval(Ext.bind(this.activateTracker,this),pace);
        taskEngine.taskCheckDistance = setInterval(Ext.bind(this.checkDistance,this),5000);
        taskEngine.taskBackgroundGeo.start();
        console.log("taskmanager wurde initialisiert");
    },

    stopTaskManager: function() {
        var taskEngine = this.getTaskEngine();
        clearInterval(taskEngine.taskGetPos);
        clearInterval(taskEngine.taskCheckDistance);
        taskEngine.taskBackgroundGeo.stop();
    },

    setupBackgroundGeo: function() {

                       this.activateTracker();
                       var bgGeo  = window.plugins.backgroundGeoLocation;
                       var taskEngine = this.getTaskEngine();
                        /**
                        * This callback will be executed every time a geolocation is recorded in the background.
                        */

                        var failureFn = function(error) {
                            console.log('BackgroundGeoLocation error');
                        };


                        // BackgroundGeoLocation is highly configurable.
                        bgGeo.configure(Ext.bind(
                            function(location) {
                                    var pos=this.getAktuellePosition();
                                    pos.lat=location.latitude;
                                    pos.lng=location.longitude;
                                    console.log("background track: "+pos.lat + " "+ pos.lng);
                                    this.checkDistance();
                                    bgGeo.finish();
                        },this), failureFn, {
                            locationTimeout: 5,
                            desiredAccuracy: 10,
                            stationaryRadius: 10,
                            distanceFilter: 10,
                            activityType: "Fitness",
                            stopOnTerminate: true,// <-- iOS-only
                            debug: false     // <-- enable this hear sounds for background-geolocation life-cycle.
                        });

                        // Turn ON the background-geolocation system.  The user will be tracked whenever they suspend the app.
                        bgGeo.changePace(true);
                        taskEngine.taskBackgroundGeo = bgGeo;
                        // If you wish to turn OFF background-tracking, call the #stop method.
                        // bgGeo.stop()
    },

    launch: function() {
        this.setupBackgroundGeo();
    }

});