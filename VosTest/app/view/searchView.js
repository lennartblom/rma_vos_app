/*
 * File: app/view/searchView.js
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

Ext.define('VosNavigator.view.searchView', {
    extend: 'Ext.Container',
    alias: 'widget.searchview',

    requires: [
        'Ext.Label',
        'Ext.XTemplate',
        'Ext.field.Search',
        'Ext.dataview.List'
    ],

    config: {
        id: 'searchView',
        items: [
            {
                xtype: 'label',
                docked: 'top',
                height: '30px',
                id: 'SearchTitle',
                tpl: [
                    '{title}haltestelle'
                ],
                width: '100%'
            },
            {
                xtype: 'searchfield',
                docked: 'top',
                id: 'searchField',
                itemId: 'searchField',
                label: 'Field'
            },
            {
                xtype: 'list',
                height: '100%',
                id: 'searchResultList',
                itemId: 'searchResultList',
                itemTpl: [
                    '<div>{name}</div>'
                ],
                store: 'stops'
            }
        ]
    }

});