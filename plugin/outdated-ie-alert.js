/*
* Outdated IE Alert! jQuery plugin
* Version 1.0
* https://github.com/AndersonMamede/outdated-ie-alert
* Based on IE Alert! jQuery plugin - https://github.com/inso/ie-alert
*/

(function($){
	var i18n = {
		
		getText : function(key){
			var lang = (window.navigator.userLanguage || window.navigator.language || "").split("-")[0];
			return (i18n[lang] || i18n["en"])[key];
		},
		
		en : {
			title : "Did you know that your Internet Explorer is out of date?",
			text : "To get the best possible experience using our site we recommend that you upgrade to a modern web browser. To download a newer web browser click on the Upgrade button.",
			upgradeTitle : "Upgrade",
			upgradeLink : "http://outdatedbrowser.com/en"
		},
		
		pt : {
			title : "Você sabia que seu Internet Explorer está ultrapassado?",
			text : "Para ter a melhor experiência possível em nosso site, recomendamos que você utilize um <b>navegador atualizado</b>. Para fazer o download de um novo navegador, clique no botão Atualizar.",
			upgradeTitle : "Atualizar",
			upgradeLink : "http://outdatedbrowser.com/br"
		}
	};
	
	var defaultOptions = {
		support : "ie8",
		overlayClose : false,
		closeBtn : true,
		title : i18n.getText("title"),
		text : i18n.getText("text"),
		upgradeTitle : i18n.getText("upgradeTitle"),
		upgradeLink : i18n.getText("upgradeLink")
	};
	
	var initialize = function($obj, options){
		var panel = [
			"<div class='ie-l-t-c'></div>",
			"<div class='ie-t'></div>",
			"<div class='ie-r-t-c'></div>",
			"<div class='ie-l'></div>",
			"<div class='ie-c'>",
				"<span class='ie-span'>" + options.title + "</span>",
				"<p class='ie-p'>" + options.text + "</p>",
				"<div class='ie-u'>",
					"<div class='ie-u-l'></div>",
						"<a href='" + options.upgradeLink + "' target='_blank'>",
							"<div class='ie-u-c'>",
								"<span class='ie-u-s'>" + options.upgradeTitle + "</span>",
							"</div>",
						"</a>",
						"<div class='ie-u-r'></div>",
					"</div>",
				"</div>",
			"<div class='ie-r'></div>",
			"<div class='ie-l-b-c'></div>",
			"<div class='ie-b'></div>",
			"<div class='ie-r-b-c'></div>"
		].join("");
		
		var iepanel = $("<div id='outdated-ie-alert-panel'>" + panel + "</div>");
		var ieoverlay = $("<div id='outdated-ie-alert-overlay'></div>").css("height", $(document).height());
		
		var active = function(){
			$obj.prepend(iepanel, ieoverlay);
			
			$(".ie-l, .ie-r").css("height", $(".ie-c").css("height"));
			$(".ie-u").css("margin-left", -($(".ie-u-c").width() / 2 + 14));
			
			if(!options.closeBtn){
				$(".ie-r-t-c").css("background-position", "-145px -58px").click(function(e){
					e.preventDefault();
				});
			}else{
				$(".ie-r-t-c").click(function(){
					iepanel.fadeOut(100);
					ieoverlay.fadeOut("slow");
				});
			}
			
			if(options.overlayClose){
				ieoverlay.click(function(){
					iepanel.fadeOut(100);
					ieoverlay.fadeOut("slow");
				});
			}
			
			if(ie == 6){
				iepanel.addClass("ie6-style");
				overlay.css("background", "#D6D6D6");
				$obj.css("margin", "0");
			}
		}
		
		if(options.support == "ie9" && ie < 10){ // the modal box will appear on IE9, IE8, IE7, IE6
			active();
		}else if(options.support == "ie8" && ie < 9){ // the modal box will appear on IE8, IE7, IE6
			active();
		}else if(options.support == "ie7" && ie < 8){ // the modal box will appear on IE7, IE6
			active();
		}else if(options.support == "ie6" && ie < 7){ // the modal box will appear only on IE6 and below
			active();
		}
	};
	
	$.fn.outdatedIeAlert = function(options){
		options = $.extend({}, defaultOptions, options);
		
		return this.each(function(){
			ie = (function(){
				var undef,
					v = 3,
					div = document.createElement("div"),
					all = div.getElementsByTagName("i");
				
				while(
					div.innerHTML = '<!--[if gt IE ' +(++v) + ']><i></i><![endif]-->',
					all[0]
				);
				
				return v > 4 ? v : undef;
			}());
			
			if(ie >= 5){
				initialize($(this), options);
			}
		});
	};
})(jQuery);
