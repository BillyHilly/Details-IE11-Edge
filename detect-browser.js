
	//Detect Browsers Script
 		 // Opera
  		//var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

  		// Firefox 1.0+
 		//var isFirefox = typeof InstallTrigger !== 'undefined';

  		// Safari 3.0+ "[object HTMLElementConstructor]" 
  		//var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);

  		// Internet Explorer 6-11
  		var isIE = /*@cc_on!@*/false || !!document.documentMode;

  		// Edge 20+
  		var isEdge = !isIE && !!window.StyleMedia;

  		// Chrome 1+
  		//var isChrome = !!window.chrome && !!window.chrome.webstore;

  		// Blink engine detection
  		//var isBlink = (isChrome || isOpera) && !!window.CSS;
		
		// DO STUFF HERE:
		

			// IE & EDGE details polyfill
			//SRC: https://stackoverflow.com/questions/51304178/html-details-tag-does-not-work-in-ie-edge 
			if ( (isIE==true) || (isEdge==true) ) {
				var deetsPolyfill = document.createElement('script');
			 	 deetsPolyfill.setAttribute('type','text/javascript');
			 	 deetsPolyfill.setAttribute('src','https://cdn.jsdelivr.net/npm/details-polyfill@1/index.min.js');
				document.head.appendChild(deetsPolyfill);
				
			//IE & EDGE custom CSS
				var ieCSS = document.createElement('link');
				 ieCSS.setAttribute('type', 'text/css');
				 ieCSS.setAttribute('rel','stylesheet');
				 ieCSS.setAttribute('href', '/_resources14/19t_css/ie11-edge.min.css');
				document.head.appendChild(ieCSS);
  			}
			

		
