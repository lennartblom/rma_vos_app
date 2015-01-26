/*
 * File: app/view/mainView.js
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

Ext.define('VosNaviagtor.view.mainView', {
    extend: 'Ext.Container',

    requires: [
        'Ext.Img',
        'Ext.Container'
    ],

    config: {
        layout: 'fit',
        scrollable: false,
        items: [
            {
                xtype: 'image',
                centered: false,
                hidden: false,
                id: 'background',
                width: '100%',
                src: 'resources/images/background/std_bg.png'
            },
            {
                xtype: 'container',
                height: '50px',
                id: 'logo',
                style: 'display:block;\nbackground-color: rgba(255,255,255, 0.7);',
                styleHtmlContent: true,
                width: '320px',
                items: [
                    {
                        xtype: 'image',
                        height: '300%',
                        id: 'vosLogo',
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
                        id: 'weckerButton',
                        left: '40px',
                        top: 80,
                        width: 100,
                        items: [
                            {
                                xtype: 'image',
                                centered: false,
                                height: '100%',
                                id: 'button',
                                width: '100%',
                                src: 'resources/images/button_png/Wecker.png'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        height: 124,
                        id: 'start',
                        left: 98,
                        top: '222px',
                        width: 124,
                        items: [
                            {
                                xtype: 'image',
                                hidden: false,
                                id: 'startbutton',
                                minHeight: '100%',
                                minWidth: '100%',
                                styleHtmlContent: true,
                                src: 'resources/images/button_png/start.png'
                            },
                            {
                                xtype: 'image',
                                height: '100%',
                                hidden: true,
                                id: 'startbuttonInv',
                                minHeight: '100%',
                                minWidth: '100%',
                                styleHtmlContent: true,
                                width: '100%',
                                src: 'resources/images/button_png/start_inv.png'
                            }
                        ]
                    }
                ]
            }
        ]
    }

});