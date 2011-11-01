jQuery Rotator Plugin
=====================
This is a jQuery plugin for rotating lists. Useful for things like rotating
banners or ads.

Default Usage
-------------

	$(function() {
		$('.rotate').rotator();
	});

	<ul class="rotate">
		<li>Element 1</li>
		<li>Element 2</li>
	</ul>

Options
-------
**interval**: Specifies the time between each rotation in ms. Defaults to 4 seconds.
	$(function() {
		$('.rotate').rotator({
			interval: 1000
		});
	});
* * *
**fadetime**: Specifies the time spent doing the fade animation in ms. Defaults to 0.5 seconds.
	$(function() {
		$('.rotate').rotator({
			fadetime: 1500
		});
	});
* * *
**randomize**: If set to true, the first element displayed will be chosen at random. Defaults to false.
	$(function() {
		$('.rotate').rotator({
			randomize: true
		});
	});
* * *
**stopOnBlur**: If set to true, the animations will stop when the window loses focus. They will start back up when the window gains focus again. Defaults to false.
	$(function() {
		$('.rotate').rotator({
			stopOnBlur: true
		});
	});
* * *