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

Ext.define('MyApp.view.mainView', {
    extend: 'Ext.Container',

    requires: [
        'Ext.Img',
        'Ext.Label',
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
                xtype: 'label',
                height: 76,
                html: '<h2>Vos - Navigator</h2>',
                id: 'uberschrift',
                style: 'background-color: white;\nopacity: 0.7;\ncolor: #34495e;\ntext-align:center;',
                styleHtmlContent: true
            },
            {
                xtype: 'container',
                id: 'button_cont',
                items: [
                    {
                        xtype: 'image',
                        centered: true,
                        docked: 'bottom',
                        height: 31,
                        hidden: false,
                        id: 'startbutton',
                        itemId: 'myimg1',
                        minHeight: '25%',
                        minWidth: '100%',
                        styleHtmlContent: true,
                        width: 163,
                        src: 'resources/images/button_png/start.png'
                    },
                    {
                        xtype: 'image',
                        centered: true,
                        height: 409,
                        hidden: true,
                        id: 'startbuttonInv',
                        maxHeight: '25%',
                        maxWidth: '100%',
                        styleHtmlContent: true,
                        width: 451,
                        src: 'resources/images/button_png/start_inv.png'
                    },
                    {
                        xtype: 'image',
                        height: 160,
                        id: 'wecker',
                        src: 'resources/images/button_png/Wecker.png'
                    }
                ]
            }
        ]
    }

});