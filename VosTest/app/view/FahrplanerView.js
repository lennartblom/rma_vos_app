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
    alias: 'widget.fahrplanerview',

    requires: [
        'Ext.Img',
        'Ext.form.FieldSet',
        'Ext.field.Search',
        'Ext.dataview.DataView',
        'Ext.XTemplate',
        'Ext.Button'
    ],

    config: {
        layout: 'fit',
        items: [
            {
                xtype: 'image',
                id: 'netzBackground',
                src: 'resources/images/background/verbindungen.png'
            },
            {
                xtype: 'container',
                height: 110,
                id: 'inputOrt',
                width: 320,
                items: [
                    {
                        xtype: 'fieldset',
                        id: 'inputfields',
                        items: [
                            {
                                xtype: 'searchfield',
                                id: 'startort',
                                label: 'Start',
                                autoCorrect: true,
                                placeHolder: 'Aktueller Ort'
                            },
                            {
                                xtype: 'searchfield',
                                id: 'ziel',
                                label: 'Ziel',
                                autoCorrect: true,
                                placeHolder: 'Zielort'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                docked: 'top',
                height: 348,
                id: 'linienInformationen',
                top: 140,
                width: '100%',
                scrollable: 'horizontal',
                items: [
                    {
                        xtype: 'dataview',
                        docked: 'top',
                        height: 100,
                        id: 'lineOne',
                        style: 'background-color: rgba(255,255,255, 0.6);',
                        width: '100%',
                        scrollable: false,
                        itemTpl: [
                            '<div>Data View Item {string}</div>'
                        ]
                    },
                    {
                        xtype: 'dataview',
                        docked: 'top',
                        height: 100,
                        id: 'lineTwo',
                        margin: '10 0 0 0 ',
                        style: 'background-color: rgba(255,255,255, 0.6);',
                        width: '100%',
                        scrollable: false,
                        itemTpl: [
                            '<div>Data View Item {string}</div>'
                        ]
                    },
                    {
                        xtype: 'dataview',
                        docked: 'top',
                        height: 100,
                        id: 'lineThree',
                        margin: '10 0 0 0',
                        style: 'background-color: rgba(255,255,255, 0.6);',
                        width: '100%',
                        scrollable: false,
                        itemTpl: [
                            '<div>Data View Item {string}</div>'
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                bottom: '30px',
                id: 'goals_border_bottom1',
                style: 'background-color:rgba(211, 83, 0, 0.9);\ndisplay:block;\nheight:5px;\noverflow:hidden;',
                width: '255px'
            },
            {
                xtype: 'button',
                border: '',
                bottom: '0px',
                centered: false,
                disabled: false,
                docked: 'bottom',
                height: '65px',
                hidden: false,
                html: '<h1 style="line-height:65px;font-size:15px;">zurück</h1>',
                id: 'BackButton',
                right: '0px',
                style: '-moz-border-radius: 46px;\n-webkit-border-radius: 46px;\nborder-radius: 46px; /* border radius */\n-moz-background-clip: padding;\n-webkit-background-clip: padding-box;\nbackground-clip: padding-box; /* prevents bg color from leaking outside the border */\nbackground-color: rgba(51, 73, 93, 0.9);\nfloat:right;\ndisplay:block;\nfont-size:11px;',
                styleHtmlContent: true,
                width: 65,
                text: 'back'
            }
        ]
    }

});