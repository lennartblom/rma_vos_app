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
            mapView: '#MapView',
            Percent: 'label#Percent'
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

        gmap.panTo(osnabrueck);

        console.log("Pan to OS");

        Ext.getStore('stops').load({
                callback : function(){
                    var redstation = new google.maps.MarkerImage("resources/images/icons/red_station.png", null, null, null, new google.maps.Size(25,25));
                    var greenstation = new google.maps.MarkerImage("resources/images/icons/green_station.png", null, null, null, new google.maps.Size(25,25));
                    var total = this.getCount();
                    var visited = 0;
                    var notVisited = 0;

                    for(i = 0; i< total; i++){
                        var stopPosition =  new google.maps.LatLng(this.getData().getAt(i).get('lat'), this.getData().getAt(i).get('long'));

                        if(this.getData().getAt(i).get('visited')){
                            icon = greenstation;
                            visited++;
                        } else {
                            icon = redstation;
                            notVisited++;
                        }

                        var marker = new google.maps.Marker({
                            position: stopPosition,
                            map: gmap,
                            title: this.getData().getAt(i).get('name'),
                            icon: icon
                        });
                    }
                    alert("Du hast bereits "+ Math.round(visited/(total/100)) + "% des Busnetztes besucht...");
                }
            }
        );

        console.log("Daten abgeholt");
        console.log("Marker gesetzt.");



    }

});