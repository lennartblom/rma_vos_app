/*
 * File: app/view/achievments_frontpage.js
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

Ext.define('MyApp.view.achievments_frontpage', {
    extend: 'Ext.Container',

    requires: [
        'Ext.Container',
        'Ext.Button',
        'Ext.Label',
        'Ext.field.Checkbox',
        'Ext.Img'
    ],

    config: {
        items: [
            {
                xtype: 'container',
                centered: true,
                docked: 'bottom',
                height: '100%',
                id: 'button_container',
                styleHtmlContent: true,
                width: '100%',
                layout: 'fit',
                items: [
                    {
                        xtype: 'button',
                        border: '',
                        bottom: '0px',
                        docked: 'bottom',
                        height: '65px',
                        html: '<h1 style="line-height:65px;font-size:15px;">back</h1>',
                        style: '-moz-border-radius: 46px;\n-webkit-border-radius: 46px;\nborder-radius: 46px; /* border radius */\n-moz-background-clip: padding;\n-webkit-background-clip: padding-box;\nbackground-clip: padding-box; /* prevents bg color from leaking outside the border */\nbackground-color: rgba(51, 73, 93, 0.9);\ndisplay:block;\nfloat:left;\nfont-size:11px;',
                        styleHtmlContent: true,
                        width: 65,
                        text: 'back'
                    },
                    {
                        xtype: 'button',
                        border: '',
                        bottom: '0px',
                        centered: false,
                        disabled: false,
                        height: '65px',
                        hidden: false,
                        html: '<h1 style="line-height:65px;font-size:15px;">score</h1>',
                        right: '0px',
                        style: '-moz-border-radius: 46px;\n-webkit-border-radius: 46px;\nborder-radius: 46px; /* border radius */\n-moz-background-clip: padding;\n-webkit-background-clip: padding-box;\nbackground-clip: padding-box; /* prevents bg color from leaking outside the border */\nbackground-color: rgba(51, 73, 93, 0.9);\nfloat:right;\ndisplay:block;\nfont-size:11px;',
                        styleHtmlContent: true,
                        width: 65,
                        text: 'score'
                    },
                    {
                        xtype: 'container',
                        height: '80%',
                        id: 'ui_forms',
                        top: '50px',
                        width: '100%',
                        items: [
                            {
                                xtype: 'container',
                                docked: 'top',
                                height: '60px',
                                id: 'netzerkundung_container',
                                items: [
                                    {
                                        xtype: 'label',
                                        height: '25px',
                                        html: '<p>Netzerkundung:</p>',
                                        id: 'netzerkundung'
                                    },
                                    {
                                        xtype: 'checkboxfield',
                                        label: 'Field'
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                height: '80px',
                                id: 'locations_visited_container',
                                top: '25px',
                                width: '100%',
                                items: [
                                    {
                                        xtype: 'label',
                                        height: '25px',
                                        html: '<p>Orte besucht:</p>',
                                        id: 'netzerkundung1'
                                    },
                                    {
                                        xtype: 'checkboxfield',
                                        label: 'Field'
                                    },
                                    {
                                        xtype: 'checkboxfield',
                                        label: 'Field'
                                    },
                                    {
                                        xtype: 'checkboxfield',
                                        label: 'Field'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        bottom: '30px',
                        id: 'border_bottom',
                        style: 'background-color:rgba(211, 83, 0, 0.9);\ndisplay:block;\nheight:5px;\noverflow:hidden;',
                        width: '70%'
                    }
                ]
            },
            {
                xtype: 'image',
                height: '100%',
                id: 'achievment_bg',
                src: 'resources/images/background/achievements.png'
            }
        ]
    }

});