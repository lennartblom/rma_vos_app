/*
 * File: app/controller/Fahrplaner.js
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

Ext.define('VosNavigator.controller.Fahrplaner', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            MainView: '#MainView',
            fahrplanerBackButton: '#fahrplanerBackButton',
            FahrplanerView: '#FahrplanerView',
            mybutton: 'button#mybutton',
            lineOne: 'dataview#lineOne',
            lineTwo: 'dataview#lineTwo',
            searchView: '#searchView'
        },

        control: {
            "button#fahrplanerBackButton": {
                tap: 'fahrplanerBackButton'
            },
            "button#mybutton": {
                tap: 'storeTest'
            },
            "#lineOne": {
                itemtap: 'onLineOneItemTap'
            },
            "searchfield#searchfieldStart": {
                focus: 'onFocusSearchfieldStart'
            },
            "searchfield#searchfieldDestination": {
                focus: 'onFocusSearchfieldDestination'
            }
        }
    },

    fahrplanerBackButton: function(button, e, eOpts) {
        this.getFahrplanerView().hide();
        this.getMainView().show();
    },

    storeTest: function(button, e, eOpts) {
        this.stops.filter("id", 250);
    },

    onLineOneItemTap: function(list, index, item, record) {
        var dataView = this.getLineTwo();
        var linesData = record.get('lines');
        //var quantity = linesArray.getCount();



        var myPanel = Ext.create('Ext.Panel', {
            html: "<div class=\"buslineWrapper\"><div class=\"buslinesBoxLeft\"><div class=\"busIcon\" stlye=\"background-image:url(resources/images/icons/bus-icon-150x150.png)\"></div> " + this.getLines(linesData) + "</div><div class=\"buslinesBoxRight\">"+ record.get('name')+ "</div><div class=\"clearing\"></div></div>"
        });

        dataView.removeAll();
        dataView.add([myPanel]);
    },

    onFocusSearchfieldStart: function(textfield, e, eOpts) {
        this.getFahrplanerView().hide();
        this.getSearchView().setData({title:"Start"});
        this.getSearchView().show();
    },

    onFocusSearchfieldDestination: function(textfield, e, eOpts) {
        this.getFahrplanerView().hide();
        this.getSearchView().setData({title:"Ziel"});
        this.getSearchView().show();
    },

    getLines: function(data) {
        var len = data.length;
        var content = '';
        content += '<div class="busline">';

        for(var i=0;i<len;i++){
            content += '<a href="#">';
            content += data[i]['LineId'];
            content += '</a>';

        }

        content += '</div>';

        return content;
    }

});