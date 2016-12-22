#GeoLocationLibrary

这是一个为了方便使用 Geolocation 创建的库，我将一些操作封装在了函数当中，比如说我想将在一个 `section#map` 元素上显示谷歌地图，那么我只需用下面一行代码即可。

    phon.showGoogleMap(document.getElementById("map"));

![googlemap](https://github.com/hwaphon/GeoLocationLibrary/blob/master/googlemap.png)
注意，千万不要使用 `div` 元素作为父元素包裹地图，否则会出现一些意想不到的结果。
### 前提

如果你要使用本库，可以将 `phon-geolocation.min.js` 下载下来引入到你的项目中去，如果你想知道函数是如何实现的，可以下载 `phon-geolocation.js` 阅读源码。

如果你想要使用 `google` 地图，那么你还需要引入 `Google API`， 你可以将下面的代码复制粘贴到你的项目中去。

    <script src="http://maps.google.com/maps/api/js?sensor=true"></script>

### 函数

- isSupport() - 返回浏览器是否支持 `Geolocation`， 返回值为 `true` 或者 `false` 。
- getLocation(successHandler) - 这里你只需要指定 `successHandler`， 而 `errorHandler` 已经在内部实现，如果出现错误，你可以打开控制台，那里会有相关提示。 
- enableHighAccuracy(accuracy) - 指定是否启用高精确度，也就是 `getCurrentPosition()` 方法中 `options` 中的参数值。
- setTimeout(timeout) - 设置获取地理位置的超时时间， 以 ms 为单位。
- setMaximumAge(age) - 设置每次获取的 `postion` 的生命周期。
- getLatitude(handler) - 获取纬度。
- getLongitude(handler) - 获取经度。
- showGoogleMap(element) - 显示 `google` 地图。 
### 使用示例

在控制台打印纬度

	function printLatitude (latitude) {
		console.log(latitude);
	}

	phon.getLatitude(printLatitude);

获取地理信息

	function printLocation(position) {
		var latitude = position.coords.latitude;
		var longitude = position.coords.longitude;

		console.log(latitude);
		console.log(longitude);
	}

	phon.getLocation(printLocation);
