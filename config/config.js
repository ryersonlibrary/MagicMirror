/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var config = {
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses.

	language: "en",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_center",
			config: {
				timeFormat: 12
			}
		},
		{
			module: "octomirror-module",
			position: "middle_center",
			config: {
				url: "http://192.168.1.19",
				api_key: ""
			}
		},
		{
			module: "compliments",
			position: "bottom_bar",
		},

		/*{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},*/
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
