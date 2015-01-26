Ext.define('MyApp.view.wecker', {
    extend: 'Ext.Container',
 
    requires: [
        'Ext.Container',
        'Ext.field.Toggle',
        'Ext.field.Select',
        'Ext.Label',
        'Ext.Img'
    ],
 
    config: {
        items: [
            {
                xtype: 'container',
                centered: true,
                docked: 'bottom',
                height: '60%',
                id: 'menu',
                width: '100%',
                items: [
                    {
                        xtype: 'togglefield',
                        id: 'alarm_on',
                        label: 'Wecker ein',
                        labelWidth: '75%'
                    },
                    {
                        xtype: 'selectfield',
                        id: 'select_song',
                        label: 'Field'
                    },
                    {
                        xtype: 'togglefield',
                        id: 'ringAtStop',
                        label: 'Mehr fach klingeln',
                        labelWidth: '75%'
                    },
                    {
                        xtype: 'label',
                        height: '20%',
                        html: 'Alarm vor jedem Umstieg',
                        id: 'slider_text1',
                        style: 'text-aline: center;',
                        styleHtmlContent: true
                    },
                    {
                        xtype: 'container',
                        docked: 'bottom',
                        id: 'slider_box',
                        items: [
                            {
                                xtype: 'sliderfield',
                                id: 'slider_dist',
                                styleHtmlContent: true,
                                label: ''
                            },
                            {
                                xtype: 'label',
                                docked: 'bottom',
                                height: '20%',
                                html: '0 m vor dem Ziel',
                                id: 'slider_text',
                                style: 'text-aline: center;',
                                styleHtmlContent: true
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'image',
                height: '100%',
                id: 'wecker_bg',
                src: 'resources/images/background/wecker.png'
            }
        ]
    }
 
});
