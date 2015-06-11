# Outdated IE Alert
Outdated IE Alert is a jQuery plugin that shows a well designed modal box to the visitor who's trying to view your site with an older version of Internet Explorer browser. The modal box encourages your visitors to upgrade their browser for a better experience using your site.

## When should I use it?
You should use it when you created a stunning modern website that looks and works amazing in modern browsers and you don't want to waste your time and money to make it work on legacy browsers like IE6, IE7 and IE8.

## How it works
This plugin will show a modal box to the visitor who is trying to view your website with with an older version of Internet Explorer browser. The modal box tries to convince them to upgrade to a newer version or to an another modern web browser. By clicking the upgrade button a new window/tab will be opened where your visitor can download a new browser. The modal box contains a title text, a basic text, a close button and an upgrade button. This plugin will detect user's idiom and will show texts in respectives idiom (fallback to english idiom).

### Dependecy
jQuery library

### Demo
[Demo](http://demo.com/index.html)

### Usage
Include jQuery library and then outdated-ie-alert.js and outdated-ie-alert.css files in your HTML document and initialize the plugin:
```html
<!--[if IE]>
	<link rel="stylesheet" href="outdated-ie-alert.css"/>
	<script src="outdated-ie-alert.js"></script>
	<script>
		$(document).ready(function(){
			$("body").outdatedIeAlert();
		});
	</script>
<![endif]-->
```
### Documentation
You can pass an object with the following options:
```javascript
$("body").outdatedIeAlert({
	support : "ie8",
	overlayClose : false,
	closeBtn : true,
	title : ?,
	text : ?,
	upgradeTitle : ?,
	upgradeLink : ?
});
```

<b>`support`</b> <i>(string - optional - default: "ie8")</i><br/>
Defines on which version of Internet Explorer will the modal box appear. Available options:<br/>
<i>ie9</i> - Modal box will appear on Internet Explorer 9, 8, 7, 6.<br/>
<i>ie8</i> - Modal box will appear on Internet Explorer 8, 7, 6.<br/>
<i>ie7</i> - Modal box will appear on Internet Explorer 7, 6.<br/>
<i>ie6</i> - Modal box will appear on Internet Explorer 6.

<b>`overlayClose`</b> <i>(boolean - optional - default: false)</i><br/>
Defines whether the modal should be closed when clicked on the overlay

<b>`closeBtn`</b> <i>(boolean - optional - default: true)</i><br/>
By default user can close the modal box and by doing this he will not upgrade his browser. But you can hide the close button by setting closeBtn to FALSE

<b>`title`</b> <i>(string - optional)</i><br/>
Defines the modal title text. If not specified, this plugin will detect user's idiom and use the following text (translated to user's idiom):<br/>
<i>"Did you know that your Internet Explorer is out of date?"</i>

<b>`text`</b> <i>(string - optional)</i><br/>
Defines the modal warning text. If not specified, this plugin will detect user's idiom and use the following text (translated to user's idiom):<br/>
<i>"To get the best possible experience using our site we recommend that you upgrade to a modern web browser. To download a newer web browser click on the Upgrade button."</i>

<b>`upgradeTitle`</b> <i>(string - optional)</i><br/>
Defines the upgrade button text. If not specified, this plugin will detect user's idiom and use the following text (translated to user's idiom):<br/>
<i>"Upgrade"</i>

<b>`upgradeLink`</b> <i>(string - optional)</i><br/>
Defines the upgrade button link. If not specified, this plugin will detect user's idiom and use the following website (in user's idiom):<br/>
<i>http://outdatedbrowser.com</i>

### Credits
Based on https://github.com/nmsdvid/ie-alert
