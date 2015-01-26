/*
 * File: app/view/fahrplaner.js
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

Ext.define('MyApp.view.fahrplaner', {
    extend: 'Ext.Container',

    requires: [
        'Ext.Img',
        'Ext.form.FieldSet',
        'Ext.field.Search'
    ],

    config: {
        layout: 'fit',
        items: [
            {
                xtype: 'image',
                id: 'netzBackground',
                src: 'resources/images/background/verbindungen.png'
            },
            {
                xtype: 'container',
                height: 110,
                id: 'inputOrt',
                width: 320,
                items: [
                    {
                        xtype: 'fieldset',
                        centered: true,
                        left: -7,
                        width: '100%',
                        items: [
                            {
                                xtype: 'searchfield',
                                label: 'Start',
                                placeHolder: 'Start',
                                readOnly: false
                            },
                            {
                                xtype: 'searchfield',
                                label: 'Ziel',
                                labelWidth: '80%',
                                autoCorrect: true
                            }
                        ]
                    }
                ]
            }
        ]
    }

});