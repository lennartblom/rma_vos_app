/*
 * File: app/view/mainScreen.js
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

Ext.define('VosNavigator.view.mainScreen', {
    extend: 'Ext.Container',
    alias: 'widget.mainScreen',

    requires: [
        'Ext.Img',
        'Ext.Container',
        'Ext.Button'
    ],

    config: {
        height: '100%',
        id: 'mainWrapper',
        width: '100%',
        items: [
            {
                xtype: 'image',
                centered: false,
                height: '100%',
                hidden: false,
                id: 'background',
                width: '100%',
                src: 'resources/images/background/std_bg.png'
            },
            {
                xtype: 'container',
                height: '60px',
                id: 'logo',
                style: 'display:block;\nbackground-color: rgba(255,255,255, 0.7);\npadding:0px;\nmargin:0px;',
                styleHtmlContent: true,
                width: '320px',
                items: [
                    {
                        xtype: 'image',
                        docked: 'top',
                        height: '50px',
                        id: 'vosLogo',
                        style: 'margin:0px;\npadding:0px;',
                        styleHtmlContent: true,
                        top: '5px',
                        width: '320px',
                        src: 'resources/images/logo/vos_navigator.png'
                    }
                ]
            },
            {
                xtype: 'container',
                id: 'button_cont',
                items: [
                    {
                        xtype: 'container',
                        height: 160,
                        id: 'wecker',
                        left: 5,
                        top: 35,
                        width: 100,
                        items: [
                            {
                                xtype: 'button',
                                handler: function(button, e) {
                                    alert("test");
                                },
                                height: 70,
                                id: 'weckerButton',
                                left: 15,
                                style: 'background-image: url(\'resources/images/button_png/Wecker.png\');\nbackground-repeat: no-repeat;\nbackground-positon: 0 0;\nbackground-size: 100%;\nbackground-opacity:0.9;\n-webkit-border-radius: 100%;\nborder-radius: 100%; /* border radius */\n-webkit-background-clip: padding-box;\nbackground-clip: padding-box; /* prevents bg color from leaking outside the border */\nbackground-color: rgba(51, 73, 93, 0.9);\ndisplay:block;\nfont-size:11px;\nopacity:0.9;',
                                styleHtmlContent: true,
                                top: -3,
                                width: 70,
                                text: ''
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        height: 100,
                        id: 'einstellungen',
                        left: 165,
                        top: 70,
                        width: 100,
                        items: [
                            {
                                xtype: 'button',
                                handler: function(button, e) {
                                    alert("test");
                                },
                                height: 70,
                                id: 'settingsButton',
                                left: 15,
                                style: 'background-image: url(\'resources/images/button_png/settings.png\');\nbackground-repeat: no-repeat;\nbackground-positon: 0 0;\nbackground-size: 100%;\nbackground-opacity:0.9;\n-webkit-border-radius: 100%;\nborder-radius: 100%; /* border radius */\n-webkit-background-clip: padding-box;\nbackground-clip: padding-box; /* prevents bg color from leaking outside the border */\nbackground-color: rgba(51, 73, 93, 0.9);\ndisplay:block;\nfont-size:11px;\nopacity:0.9;',
                                styleHtmlContent: true,
                                top: 0,
                                width: 70,
                                text: ''
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        height: 87,
                        hidden: false,
                        id: 'achievements',
                        left: 90,
                        top: 365,
                        width: 180,
                        items: [
                            {
                                xtype: 'button',
                                handler: function(button, e) {
                                    alert("test");
                                },
                                height: 70,
                                id: 'achieveButton',
                                left: 110,
                                style: 'background-image: url(\'resources/images/button_png/Achievments.png\');\nbackground-repeat: no-repeat;\nbackground-positon: 0 0;\nbackground-size: 100%;\nbackground-opacity:0.9;\n-webkit-border-radius: 100%;\nborder-radius: 100%; /* border radius */\n-webkit-background-clip: padding-box;\nbackground-clip: padding-box; /* prevents bg color from leaking outside the border */\nbackground-color: rgba(51, 73, 93, 0.9);\ndisplay:block;\nfont-size:11px;\nopacity:0.9;',
                                styleHtmlContent: true,
                                top: 20,
                                width: 70,
                                text: ''
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        height: 98,
                        hidden: false,
                        id: 'gameContainer',
                        left: 10,
                        top: 300,
                        width: 100,
                        items: [
                            {
                                xtype: 'button',
                                handler: function(button, e) {
                                    alert("test");
                                },
                                height: 70,
                                id: 'game',
                                left: 6,
                                style: 'background-image: url(\'resources/images/button_png/game.png\');\nbackground-repeat: no-repeat;\nbackground-positon: 0 0;\nbackground-size: 100%;\nbackground-opacity:0.9;\n-webkit-border-radius: 100%;\nborder-radius: 100%; /* border radius */\n-webkit-background-clip: padding-box;\nbackground-clip: padding-box; /* prevents bg color from leaking outside the border */\nbackground-color: rgba(51, 73, 93, 0.9);\ndisplay:block;\nfont-size:11px;\nopacity:0.9;',
                                styleHtmlContent: true,
                                top: 30,
                                width: 70,
                                text: ''
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        height: 124,
                        id: 'start',
                        left: 98,
                        top: 195,
                        width: 124,
                        items: [
                            {
                                xtype: 'button',
                                action: 'start',
                                height: '100%',
                                id: 'StartButton',
                                style: 'background-image: url(\'resources/images/button_png/start.png\');\nbackground-repeat: no-repeat;\nbackground-positon: 0 0;\nbackground-size: 124px;\nbackground-opacity:0.9;\n-webkit-border-radius: 100%;\nborder-radius: 100%; /* border radius */\n-webkit-background-clip: padding-box;\nbackground-clip: padding-box; /* prevents bg color from leaking outside the border */\nbackground-color: rgba(51, 73, 93, 0.9);\ndisplay:block;\nfont-size:11px;\nopacity:0.9;',
                                styleHtmlContent: true,
                                width: '100%',
                                text: ''
                            }
                        ]
                    }
                ]
            }
        ]
    }

});