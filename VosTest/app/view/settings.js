/*
 * File: app/view/settings.js
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

Ext.define('MyApp.view.settings', {
    extend: 'Ext.Container',

    requires: [
        'Ext.Label',
        'Ext.Button',
        'Ext.field.Toggle',
        'Ext.field.Radio',
        'Ext.SegmentedButton',
        'Ext.Img'
    ],

    config: {
        height: '100%',
        id: 'settings',
        width: '100%',
        items: [
            {
                xtype: 'container',
                centered: true,
                docked: 'top',
                height: '100%',
                id: 'container_settings_view',
                style: 'padding-top:60px;',
                width: '320px',
                layout: 'fit',
                items: [
                    {
                        xtype: 'label',
                        height: '25px',
                        html: '<p>Einstellungen:</p>',
                        id: 'headline_settings',
                        margin: '5px',
                        style: 'font-family:Helvetica;\ntext-transform:uppercase;\nfont-size:13px;'
                    },
                    {
                        xtype: 'container',
                        bottom: '30px',
                        id: 'settings_border_bottom',
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
                        id: 'settings_button_back',
                        right: '0px',
                        style: '-moz-border-radius: 46px;\n-webkit-border-radius: 46px;\nborder-radius: 46px; /* border radius */\n-moz-background-clip: padding;\n-webkit-background-clip: padding-box;\nbackground-clip: padding-box; /* prevents bg color from leaking outside the border */\nbackground-color: rgba(51, 73, 93, 0.9);\nfloat:right;\ndisplay:block;\nfont-size:11px;',
                        styleHtmlContent: true,
                        width: 65,
                        text: 'back'
                    },
                    {
                        xtype: 'container',
                        centered: false,
                        id: 'settings_wrapper_container',
                        layout: 'fit'
                    },
                    {
                        xtype: 'container',
                        id: 'settings_form_wrapper',
                        top: '30px',
                        width: '100%',
                        items: [
                            {
                                xtype: 'togglefield',
                                label: 'Field'
                            },
                            {
                                xtype: 'radiofield',
                                label: 'Field',
                                name: 'field'
                            },
                            {
                                xtype: 'sliderfield',
                                label: 'Field'
                            },
                            {
                                xtype: 'segmentedbutton',
                                items: [
                                    {
                                        xtype: 'button',
                                        text: 'MyButton3'
                                    },
                                    {
                                        xtype: 'button',
                                        text: 'MyButton4'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'image',
                centered: false,
                docked: 'top',
                height: '100%',
                id: 'goals_background1',
                width: '320px',
                src: 'resources/images/background/achievements.png'
            }
        ]
    }

});