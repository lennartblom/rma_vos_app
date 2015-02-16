/*
 * File: app/view/fahrplanerView.js
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

Ext.define('VosNavigator.view.fahrplanerView', {
    extend: 'Ext.Container',
    alias: 'widget.fahrplanerView',

    requires: [
        'Ext.Img',
        'Ext.Button',
        'Ext.form.FieldSet',
        'Ext.field.Search',
        'Ext.dataview.DataView',
        'Ext.XTemplate'
    ],

    config: {
        height: '100%',
        itemId: 'mycontainer7',
        width: '100%',
        layout: 'fit',
        items: [
            {
                xtype: 'image',
                height: '100%',
                id: 'netzBackground',
                width: '100%',
                src: 'resources/images/background/verbindungen.png'
            },
            {
                xtype: 'button',
                baseCls: 'backButton',
                border: '',
                bottom: '0px',
                centered: false,
                disabled: false,
                docked: 'bottom',
                height: '65px',
                hidden: false,
                html: '<span>zurück</span>',
                id: 'fahrplanerBackButton',
                right: '0px',
                styleHtmlContent: true,
                width: 65,
                text: 'back'
            },
            {
                xtype: 'fieldset',
                height: '140px',
                id: 'search_field_set',
                title: 'Haltestellen',
                items: [
                    {
                        xtype: 'searchfield',
                        itemId: 'searchfieldStart',
                        label: 'Von'
                    },
                    {
                        xtype: 'searchfield',
                        itemId: 'searchfieldDestination',
                        label: 'Nach'
                    }
                ]
            },
            {
                xtype: 'container',
                docked: 'top',
                height: 348,
                id: 'linienInformationen',
                top: '150px',
                width: '100%',
                scrollable: 'horizontal',
                items: [
                    {
                        xtype: 'dataview',
                        baseCls: 'transparentWhite',
                        docked: 'top',
                        height: 340,
                        id: 'lineTwo',
                        margin: '10 0 0 0 ',
                        width: '100%',
                        scrollable: 'vertical',
                        itemTpl: [
                            '<div>Data View Item {string}</div>'
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                baseCls: 'orangeBorder',
                bottom: '30px',
                id: 'goals_border_bottom1',
                styleHtmlContent: true,
                width: '255px'
            }
        ]
    }

});