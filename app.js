Ext.application({
    name: 'sencha-tumblr-quotes',

    views: ['Main'],
    stores: ['TumblrStore'],
    models: ['TumblrModel'],

    launch: function() {
        Ext.Viewport.add({
            xtype: 'mainpanel'
        });
    },

});
