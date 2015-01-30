/*
 * File: app/view/weckerView.js
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

Ext.define('VosNavigator.view.weckerView', {
    extend: 'Ext.Container',
    alias: 'widget.weckerview',

    requires: [
        'Ext.Img',
        'Ext.Container',
        'Ext.field.Toggle',
        'Ext.field.Select',
        'Ext.field.Checkbox',
        'Ext.Label',
        'Ext.Button'
    ],

    config: {
        itemId: 'mycontainer1',
        items: [
            {
                xtype: 'image',
                height: '100%',
                id: 'wecker_bg',
                src: 'resources/images/background/wecker.png'
            },
            {
                xtype: 'container',
                centered: true,
                docked: 'top',
                height: '100%',
                margin: '10% 0',
                width: '100%'
            },
            {
                xtype: 'container',
                centered: true,
                height: '60%',
                id: 'menu',
                width: '100%',
                items: [
                    {
                        xtype: 'togglefield',
                        itemId: 'mytogglefield',
                        width: '100%',
                        label: 'Wecker ein',
                        labelWidth: '75%',
                        name: 'toggle_alarm',
                        value: 1
                    },
                    {
                        xtype: 'selectfield',
                        id: 'select_music',
                        itemId: 'myselectfield',
                        label: 'Ton',
                        name: 'select_music',
                        options: [
                            {
                                text: 'Super Mario Tune',
                                value: 0
                            },
                            {
                                text: 'The Legend of Zelda  Tune',
                                value: 1
                            },
                            {
                                text: 'Tune',
                                value: 2
                            }
                        ]
                    },
                    {
                        xtype: 'checkboxfield',
                        id: 'link_verbindung',
                        itemId: 'mycheckbox3',
                        label: 'Kürzester Weg',
                        labelWidth: '80%',
                        name: 'link_verbindung'
                    },
                    {
                        xtype: 'togglefield',
                        id: 'toggle_alarmStop',
                        itemId: 'mytogglefield1',
                        label: 'Mehrfach klingeln',
                        labelWidth: '75%',
                        name: 'toggle_alarmStop'
                    },
                    {
                        xtype: 'label',
                        html: 'Alarm vor jedem Umstieg',
                        styleHtmlContent: true
                    },
                    {
                        xtype: 'container',
                        docked: 'bottom',
                        id: 'slider',
                        items: [
                            {
                                xtype: 'sliderfield',
                                id: 'weckRadius',
                                itemId: 'mysliderfield',
                                style: 'background: none;\nmargin-left: auto;\nmargin-right: auto;',
                                styleHtmlContent: true,
                                width: '90%',
                                label: '',
                                maxValue: 2000,
                                minValue: 200
                            },
                            {
                                xtype: 'label',
                                html: '200 m vor dem Zielpunkt',
                                id: 'sliderValueLabel',
                                style: 'text-align: center;',
                                styleHtmlContent: true
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                bottom: 0,
                height: 65,
                id: 'backButtonContainer1',
                width: '100%',
                items: [
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
                        id: 'weckerBackButton',
                        right: '0px',
                        style: '-moz-border-radius: 46px;\n-webkit-border-radius: 46px;\nborder-radius: 46px; /* border radius */\n-moz-background-clip: padding;\n-webkit-background-clip: padding-box;\nbackground-clip: padding-box; /* prevents bg color from leaking outside the border */\nbackground-color: #3d4f5e;\nopacity: 0.9;\ncolor:#fff;\nline-height:65px;\nfloat:right;\ndisplay:block;\nfont-size:11px;',
                        styleHtmlContent: true,
                        width: 65,
                        text: 'back'
                    },
                    {
                        xtype: 'container',
                        bottom: '30px',
                        id: 'goals_border_bottom2',
                        style: 'background-color:rgba(211, 83, 0, 0.9);\ndisplay:block;\nheight:5px;\noverflow:hidden;',
                        width: '255px'
                    }
                ]
            }
        ]
    }

});