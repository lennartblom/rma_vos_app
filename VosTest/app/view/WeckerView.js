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
        'Ext.field.Search',
        'Ext.field.Toggle',
        'Ext.field.Select',
        'Ext.field.Checkbox',
        'Ext.Label'
    ],

    config: {
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
                width: '100%',
                items: [
                    {
                        xtype: 'searchfield',
                        style: 'background:none;',
                        label: 'Wecker'
                    }
                ]
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
                        label: 'Wecker ein',
                        labelWidth: '75%',
                        name: 'toggle_alarm',
                        value: 1
                    },
                    {
                        xtype: 'selectfield',
                        id: 'select_music',
                        label: 'Ton',
                        name: 'select_music'
                    },
                    {
                        xtype: 'checkboxfield',
                        id: 'link_verbindung',
                        label: 'Busverbindung suchen',
                        labelWidth: '80%',
                        name: 'link_verbindung'
                    },
                    {
                        xtype: 'togglefield',
                        id: 'toggle_alarmStop',
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
                                style: 'background: none;\nmargin-left: auto;\nmargin-right: auto;',
                                styleHtmlContent: true,
                                width: '90%',
                                label: '',
                                maxValue: 2000
                            },
                            {
                                xtype: 'label',
                                html: '0 m vor dem Zielpunkt',
                                style: 'text-align: center;',
                                styleHtmlContent: true
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'searchfield',
                label: 'Field'
            }
        ]
    }

});