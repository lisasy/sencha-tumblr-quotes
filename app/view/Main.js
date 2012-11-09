Ext.define("sencha-tumblr-quotes.view.Main", {
    extend: 'Ext.tab.Panel',
    xtype: 'mainpanel',
    requires: [
        'sencha-tumblr-quotes.view.Home',
        'sencha-tumblr-quotes.view.QuotesView',
    ],
    config: {
        tabBarPosition: 'bottom',
        items:[
            {
                xtype: 'homeview'
            },
            {
                xtype: 'quotesview',
            }
        ]
    }
});
