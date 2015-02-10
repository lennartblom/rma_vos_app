/*
 * File: app/view/settingsView.js
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

Ext.define('VosNavigator.view.settingsView', {
    extend: 'Ext.Container',
    alias: 'widget.settingsview',

    requires: [
        'Ext.Container',
        'Ext.Button',
        'Ext.Label',
        'Ext.field.Slider',
        'Ext.Img'
    ],

    config: {
        height: '100%',
        itemId: 'goals1',
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
                        xtype: 'container',
                        baseCls: 'orangeBorder',
                        bottom: '30px',
                        id: 'settings_border_bottom',
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
                        id: 'settingsBackButton',
                        right: '0px',
                        styleHtmlContent: true,
                        width: 65,
                        text: 'back'
                    },
                    {
                        xtype: 'container',
                        centered: false,
                        id: 'settings_wrapper_container',
                        layout: 'fit',
                        items: [
                            {
                                xtype: 'label',
                                baseCls: 'uppercaseHeadline',
                                docked: 'top',
                                height: '25px',
                                html: '<p>Mitwirkende:</p>',
                                id: 'credits',
                                margin: '5px'
                            },
                            {
                                xtype: 'container',
                                baseCls: 'creditsTable',
                                height: '240px',
                                html: '<table id="creditsTable"> 	<tr> 		<td class="tableHeadline" colspan="3">Entwickler</td> 	</tr> 	<tr> 		<td>Thomas Schalldach</td> 		<td colspan="2">Fabian Brammer</td> 	</tr> 	<tr> 	</tr> 	<tr> 		<td colspan="3">Lennart Blom</td> 	</tr> 	<tr> 		<td class="tableHeadline" colspan="3">Besonderen Dank an Entwickler externer Plugins</td> 	</tr> 	<tr> 		<td class="tableHeadline">Entwickler</td> 		<td colsan="2" class="tableHeadline">Plugin</td> 	</tr> 	<tr> 		<td>brodybits - Chris Brody</td> 		<td>Brodysoft SQLitePlugin</td> 		<td class="gitURL"><a target="_new" href="#"><img src="resources/images/logo/git_logo.png" height="15px" width="auto"></a></td> 	</tr> 	<tr> 		<td>Sebastián Katzer</td> 		<td>BackgroundMode</td> 		<td class="gitURL"><a target="_new" href="#"><img src="resources/images/logo/git_logo.png" height="15px" width="auto"></a></td> 	</tr> 	<tr> 		<td>Rahul Pandey</td> 		<td>sqlDB</td> 		<td class="gitURL"><a target="_new" href="#"><img src="resources/images/logo/git_logo.png" height="15px" width="auto"></a></td> 	</tr> 	<tr> 		<td>Chris Scott</td> 		<td>CDV Background Geo Location</td> 		<td class="gitURL"><a target="_new" href="#"><img src="resources/images/logo/git_logo.png" height="15px" width="auto"></a></td> 	</tr> </table>',
                                id: 'creditsTable'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        id: 'settings_form_wrapper',
                        top: '280px',
                        width: '100%',
                        items: [
                            {
                                xtype: 'label',
                                baseCls: 'uppercaseHeadline',
                                height: '25px',
                                html: '<p>Einstellungen:</p>',
                                id: 'headline_settings',
                                margin: '5px'
                            },
                            {
                                xtype: 'label',
                                baseCls: 'textCenterSmall',
                                html: '<p>GPS Positionierungs Intervall</p>',
                                id: 'info1',
                                margin: '5px'
                            },
                            {
                                xtype: 'sliderfield',
                                baseCls: 'divCenter',
                                id: 'gpsPace',
                                style: 'background-color:none;',
                                label: 'GPS Pace',
                                value: [
                                    30
                                ],
                                maxValue: 120,
                                minValue: 5
                            },
                            {
                                xtype: 'label',
                                html: 'Aktuelle Position wird im 30 Sekunden Takt überprüft.',
                                id: 'label_settings',
                                margin: '5px'
                            },
                            {
                                xtype: 'label',
                                baseCls: 'textCenterSmall',
                                html: '<p>Je häufiger die Position überprüft wird, desto mehr Strom wird verbraucht.</p>',
                                id: 'info',
                                margin: '5px'
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
                src: 'resources/images/background/settings.png'
            }
        ]
    }

});