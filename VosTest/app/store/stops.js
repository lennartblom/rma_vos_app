/*
 * File: app/store/stops.js
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

Ext.define('VosNavigator.store.stops', {
    extend: 'Ext.data.Store',

    requires: [
        'VosNavigator.model.stop',
        'Ext.data.proxy.Sql'
    ],

    config: {
        model: 'VosNavigator.model.stop',
        storeId: 'stops',
        proxy: {
            type: 'sql',
            database: 'vosnavigator.db',
            table: 'stops'
        }
    }
});