/*
 * File: app/controller/mapViewController.js
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

Ext.define('VosNavigator.controller.mapViewController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            achView: '#AchView',
            mapView: '#MapView'
        },

        control: {
            "button#scoreButton1": {
                tap: 'onButtonTap'
            },
            "map#mymap": {
                maprender: 'onMapMaprender'
            }
        }
    },

    onButtonTap: function(button, e, eOpts) {
        console.log("Zurück");
        this.getMapView().hide();
        this.getAchView().show();
    },

    onMapMaprender: function(map, gmap, eOpts) {
        var osnabrueck = new google.maps.LatLng(52.273238, 8.051014);

        var stopsLong = [];
        var stopsLat = [];
        var stopsTitle = [];
        console.log("vars geladen");
        stopsLong.push(8.0450892122);
        stopsLat.push(52.2674516543);
        stopsTitle.push("Agentur für Arbeit");

        stopsLong.push(8.120717544);
        stopsLat.push(52.27325343);
        stopsTitle.push("Albert-Schweitzer-Straße");

        stopsLong.push(8.016346902);
        stopsLat.push(52.26566678);
        stopsTitle.push("Alfred-Delp-Straße");
        console.log("punkte defined");
        var image = new google.maps.MarkerImage("resources/images/icons/red_station.png", null, null, null, new google.maps.Size(35,35));

        gmap.panTo(osnabrueck);
        console.log("osnabrück");
        for(i = 0; i<3; i++){
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(stopsLat[i], stopsLong[i]),
                map: gmap,
                title: stopsTitle[i],
                icon: image
            });
        }


        console.log("Marker gesetzt.");
    }

});