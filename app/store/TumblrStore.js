Ext.define("sencha-tumblr-quotes.store.TumblrStore", {
    extend: 'Ext.data.Store',
    requires: [
    	'Ext.data.proxy.JsonP',
    	'sencha-tumblr-quotes.model.TumblrModel',
    ],
    config: {
    	model: 'sencha-tumblr-quotes.model.TumblrModel',
    	autoLoad: true,
    	proxy: {
    		type: 'jsonp',
    		url: 'http://api.tumblr.com/v2/blog/lisacanblog.tumblr.com/posts/quote?api_key=HssV7DgyS8RtT0uYE5qpSQJwSxs6nIWpx06mMt8kNprCGQqIo8&callback=Ext.util.JSONP.callback',
    		reader: {
    			callbackKey: 'callback',
    			type: 'json',
    			rootProperty: 'response.posts'
    		}
    	}
    }
});

//nested: response > posts
