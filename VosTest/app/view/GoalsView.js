/*
 * File: app/view/goalsView.js
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

Ext.define('VosNavigator.view.goalsView', {
    extend: 'Ext.Container',
    alias: 'widget.goalsview',

    alternateClassName: [
        'backButton'
    ],
    requires: [
        'Ext.Button',
        'Ext.Label',
        'Ext.dataview.List',
        'Ext.XTemplate',
        'Ext.Img'
    ],

    config: {
        height: '100%',
        id: 'goals',
        width: '100%',
        items: [
            {
                xtype: 'container',
                centered: true,
                docked: 'top',
                height: '100%',
                id: 'container_goal_view',
                style: 'padding-top:60px;',
                width: '320px',
                layout: 'fit',
                items: [
                    {
                        xtype: 'container',
                        baseCls: 'orangeBorder',
                        bottom: '30px',
                        id: 'goals_border_bottom',
                        width: '255px'
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
                        id: 'goalsBackButton',
                        right: '0px',
                        styleHtmlContent: true,
                        width: 65,
                        text: 'back'
                    },
                    {
                        xtype: 'container',
                        centered: false,
                        id: 'goals_wrapper',
                        layout: 'fit',
                        items: [
                            {
                                xtype: 'container',
                                docked: 'top',
                                height: '100px',
                                id: 'daily_goals',
                                margin: '5px',
                                top: '0px',
                                width: '100%',
                                layout: 'fit',
                                items: [
                                    {
                                        xtype: 'label',
                                        baseCls: 'uppercaseHeadline',
                                        height: '25px',
                                        html: '<p>Besuche folgende Sehnswürdigkeiten:</p>',
                                        id: 'label_daily_goals',
                                        style: 'font-family:Helvetica;\ntext-transform:uppercase;\nfont-size:13px;'
                                    },
                                    {
                                        xtype: 'list',
                                        height: '200px',
                                        id: 'sights_daily',
                                        top: '25px',
                                        width: '100%',
                                        itemCls: 'sights_list',
                                        itemTpl: [
                                            '<div>{name}</div>'
                                        ],
                                        store: 'sights'
                                    },
                                    {
                                        xtype: 'label',
                                        height: '25px',
                                        html: '<p>Verbleibende Zeit:</p>',
                                        id: 'dailyGoalsLabel',
                                        top: '250px'
                                    },
                                    {
                                        xtype: 'label',
                                        baseCls: 'textCenterSmall',
                                        height: '25px',
                                        html: '<p>6 Stunden 23 Minuten</p>',
                                        id: 'dailyGoalsCounter',
                                        style: 'font-size:11px;\ntext-align:center;',
                                        top: '270px'
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                docked: 'top',
                                height: '100px',
                                id: 'weekly_goals',
                                margin: '5px',
                                top: 300,
                                width: '100%',
                                items: [
                                    {
                                        xtype: 'label',
                                        height: '25px',
                                        html: '<p>Wochenziele:</p>',
                                        id: 'label_weekly_goals',
                                        style: 'font-family:Helvetica;\ntext-transform:uppercase;\nfont-size:13px;'
                                    },
                                    {
                                        xtype: 'dataview',
                                        height: '175px',
                                        html: '<p>Besuche den Löwenpudel</p>',
                                        id: 'dataview_weekly_goals',
                                        top: '25px',
                                        width: '100%',
                                        emptyText: 'Paintball spielen in Belm',
                                        itemTpl: [
                                            '<div>Data View Item {string}</div>'
                                        ],
                                        maxItemCache: 5
                                    },
                                    {
                                        xtype: 'label',
                                        height: '25px',
                                        html: '<p>Verbleibende Zeit:</p>',
                                        id: 'weeklyGoalsLabel',
                                        top: '200px'
                                    },
                                    {
                                        xtype: 'label',
                                        height: '25px',
                                        html: '<p>3 Tage 6 Stunden 23 Minuten</p>',
                                        id: 'weeklyGoalsCounter',
                                        style: 'font-size:11px;\ntext-algin:center;',
                                        top: '225px'
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
                id: 'goals_background',
                width: '320px',
                src: 'resources/images/background/game.png'
            }
        ]
    }

});