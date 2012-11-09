Ext.define("sencha-tumblr-quotes.view.QuotesView", {
    extend: 'Ext.dataview.DataView',
    xtype:'quotesview',
    requires: [
    	'sencha-tumblr-quotes.store.TumblrStore'
    ],
    config: {
    	title: 'Quotes',
    	iconCls: 'star',
    	iconMask: true,
    	store: 'TumblrStore',
    	styleHTMLContent: true,
    	scrollable: 'vertical',
    	itemTpl: [
    		'{text}, {date}'
    	]
    }
});
