/*
 * File: app/controller/searchViewController.js
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

Ext.define('VosNavigator.controller.searchViewController', {
    extend: 'Ext.app.Controller',

    config: {
        searchType: '',
        startOrt: 'start',
        zielOrt: 'ziel',

        refs: {
            searchResultList: 'list#searchResultList',
            searchField: 'searchfield#searchField',
            searchView: '#searchView',
            FahrplanerView: '#FahrplanerView',
            lineTwo: 'dataview#lineTwo',
            lineThree: 'dataview#lineThree'
        },

        control: {
            "searchfield#searchField": {
                keyup: 'onSearchfieldKeyup',
                clearicontap: 'onSearchfieldClearicontap'
            },
            "list#searchResultList": {
                itemtap: 'listTap'
            }
        }
    },

    onSearchfieldKeyup: function(textfield, e, eOpts) {
        var value = this.getSearchField().getValue();
        var store = Ext.getStore('stops');
        var dataView = this.getSearchResultList();

        if(value === ''){
            console.log('String ist leer. Filter wird geleert.');
            store.clearFilter();

        } else {
            console.log("Search refresh with: "+value);
            store.filter('name', value);
        }

        dataView.refresh();

    },

    listTap: function(dataview, index, target, record, e, eOpts) {


        console.log("itemTap");
        if(this.searchType==='start'){
            this.setStartOrt(record.get('name'));
        }else{
            this.setZielOrt(record.get('name'));
        }

        var linesData = record.get('lines');
        //var quantity = linesArray.getCount();



        var myPanel = Ext.create('Ext.Panel', {
            html: "<div class=\"buslineWrapper\"><div class=\"buslinesBoxLeft\"><div class=\"busIcon\" stlye=\"background-image:url(resources/images/icons/bus-icon-150x150.png)\"></div></div><div class=\"buslinesBoxRight\">"+ record.get('name')+ "</div><div class=\"clearing\"></div></div>"
        });

        dataView.removeAll();
        dataView.add([myPanel]);

        var store = Ext.getStore('stops');
        store.clearFilter();

        this.getSearchResultList().refresh();
        console.log("ende von if");
        this.getSearchView().hide();
        this.getFahrplanerView().show();
    },

    onSearchfieldClearicontap: function(textfield, e, eOpts) {
        Ext.getStore('stops').clearFilter();

    }

});