<!DOCTYPE html>
<html>
	<head>
		<title>
			A Journey into Madness
		</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<style>
			@charset "utf-8";
			@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
			html {
				scroll-behavior: smooth;
			}
			#backgroundVideo {
				position: fixed;
				right: 0;
				bottom: 0;
				min-width: 100%;
				min-height: 100%;
			}
			.content {
				position: relative;
				background-color: #b69b57;
				background-image: url("light-paper-fibers.png");
				padding: 20px;
				margin: auto;
				width: 80%;
				border: 0px solid black;
				padding: 25px;
				font-family: 'Nunito', sans-serif;
			}
			.subtitle {
				position: relative;
				bottom: 1.32em;
				text-align: center;
			}
			h1 {
				text-align: center;
				text-shadow: 0 0 10px black;
			}
			h2 {
				text-align: center;
				position: relative;
				margin: -0.25em;
			}
			p {
				overflow-wrap: break-word;
			}
			input[type=textarea] {
				border: 0em;
				text-align: center;
				width: 85%;
				background: none;
				font-family: 'Nunito', sans-serif;
			}
			label {
				display: none;
			}
			.detailBox {
				box-shadow: 0 0 8px 10px rgba(0, 0, 0, 0.2);
				width: 80%;
				display: block;
				margin: auto;
				margin-top: 0.5em;
				margin-bottom: 1em;
				padding: 0.1px 1em;
			}
			.boxNum {
				float: right;
				position: relative;
				top: 0.25em;
				left: 0.25em;
			}
			.boxContents {
				overflow-wrap: break-word;
				display: none;
				font-size: 0.75em;
				position: relative;
				bottom: 0.75em;
				width: 100%;
			}
			.boxSummary {
				text-align: center;
				position: relative;
				bottom: 1em;
			}
			.visible {
				display: block;
			}
			img {
				display: block;
				width: 80%;
				margin: auto;
				margin-bottom: 1em;
				mix-blend-mode: multiply;
				max-width: 27.5em;
				height: auto;
			}
			.column {
				float: left;
				width: 50%;
				margin-bottom: -0.5em;
			}
			.row:after {
				content: "";
				display: table;
				clear: both;
			}
@media screen and (max-width: 1200px) {
				.column {
				width: 100%;
			}
		}
		</style>
	</head>
	<body>
		<video autoplay muted loop id="backgroundVideo">
			<source src="background.mp4" type="video/mp4">
			Your browser does not support HTML5 video.
		</video>
		<div class="content">
			<h1 id="home"><u>A Journey into Madness</u></h1>
			<label>A hidden text box used to access hidden portions of the document.</label><div class="subtitle"><input id="hidden" type="textarea" value="Things are not always as they seem" onclick="this.value = ''"></div>
			<h2>An Introduction</h2>
			<p>This document was created to discuss my ideas about an event I'm calling <i>"In Choro Lunae"</i>. The event encompasses the return of the gods Madness and Sanity, and their impact on the world.</p>
			<p>Locked away long ago for not playing by 	the rules of the other gods, the duo of Madness and Sanity have returned, fed by the horrors the world has faced in the previous event. Their impact on mortals and the mortal world is extreme to say the least‑a sickening madness that spreads in all directions whenever those two gods remain in this world‑and their effects can even spread to the otherworldly with dire consequences for them and for their patron god.</p>
			<p> The madness is a slow horror‑hiding deep in the minds of those who dwell in Terrillam‑and by the time it's realized what's happening it will most likely be too late for many. The people of this world must learn what caused this, how it was prevented before, and how it may be stopped.</p>
			<p>Insanity, however, is a difficult and unique thing to overcome. It obscures us from what has happened, and even from what is happening. In the world of insanity, knowing how to save yourself is not an easy task.</p>
		</div>
		<br>
		<div class="content">
			<h2>A Sample Explaination</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum diam eu scelerisque aliquet. Etiam efficitur ligula ac massa tincidunt fringilla. Aenean ac vulputate felis. Nam ullamcorper ultricies risus vitae maximus. Donec id elementum neque, quis pulvinar lorem. Sed iaculis vel turpis nec convallis. Sed condimentum tempor nunc, quis rutrum enim ultricies eu. Etiam luctus lacus non varius aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent in nibh ac massa sollicitudin accumsan id non ipsum. Proin ac euismod neque. Morbi arcu risus, accumsan id ligula ac, commodo blandit diam.</p>
			<p>Aliquam ut massa nec urna ultrices ornare. Morbi gravida sed lectus id aliquam. Morbi porta metus quis nulla malesuada tristique. Proin lobortis fermentum lorem, vitae semper ante placerat eget. Nam lorem enim, faucibus et magna sed, sodales lobortis ante. Integer quis auctor mauris. In eget venenatis turpis. Nulla suscipit elit eu aliquet varius.</p>
			<div class="row">
				<div class="column">
					<img src="https://i.redd.it/06s1oalqk6011.png">
				</div>
				<div class="column">
					<div class="detailBox" onclick="toggleContent(this)">
						<span class="boxNum">
					1
						</span>
						<h3> Lorem Ipsum</h3>
						<div class="boxSummary">
					dolor sit amet, consectetur adipiscing elit.
						</div>
						<p class="boxContents">
							Etiam rutrum diam eu scelerisque aliquet. Etiam efficitur ligula ac massa tincidunt fringilla. Aenean ac vulputate felis. Nam ullamcorper ultricies risus vitae maximus. Donec id elementum neque, quis pulvinar lorem. Sed iaculis vel turpis nec convallis.
						</p>
					</div>
					<div class="detailBox" onclick="toggleContent(this)">
						<span class="boxNum">
					2
						</span>
						<h3> Lorem Ipsum</h3>
						<div class="boxSummary">
					dolor sit amet, consectetur adipiscing elit.
						</div>
						<p class="boxContents">
							Etiam rutrum diam eu scelerisque aliquet. Etiam efficitur ligula ac massa tincidunt fringilla. Aenean ac vulputate felis. Nam ullamcorper ultricies risus vitae maximus. Donec id elementum neque, quis pulvinar lorem. Sed iaculis vel turpis nec convallis.
						</p>
					</div>
					<div class="detailBox" onclick="toggleContent(this)">
						<span class="boxNum">
					3
						</span>
						<h3> Lorem Ipsum</h3>
						<div class="boxSummary">
					dolor sit amet, consectetur adipiscing elit.
						</div>
						<p class="boxContents">
							Etiam rutrum diam eu scelerisque aliquet. Etiam efficitur ligula ac massa tincidunt fringilla. Aenean ac vulputate felis. Nam ullamcorper ultricies risus vitae maximus. Donec id elementum neque, quis pulvinar lorem. Sed iaculis vel turpis nec convallis.
						</p>
					</div>
					<div class="detailBox" onclick="toggleContent(this)">
						<span class="boxNum">
					4
						</span>
						<h3> Lorem Ipsum</h3>
						<div class="boxSummary">
					dolor sit amet, consectetur adipiscing elit.
						</div>
						<p class="boxContents">
							Etiam rutrum diam eu scelerisque aliquet. Etiam efficitur ligula ac massa tincidunt fringilla. Aenean ac vulputate felis. Nam ullamcorper ultricies risus vitae maximus. Donec id elementum neque, quis pulvinar lorem. Sed iaculis vel turpis nec convallis.
						</p>
					</div>
					<div class="detailBox" onclick="toggleContent(this)">
						<span class="boxNum">
					5
						</span>
						<h3> Lorem Ipsum</h3>
						<div class="boxSummary">
					dolor sit amet, consectetur adipiscing elit.
						</div>
						<p class="boxContents">
							Etiam rutrum diam eu scelerisque aliquet. Etiam efficitur ligula ac massa tincidunt fringilla. Aenean ac vulputate felis. Nam ullamcorper ultricies risus vitae maximus. Donec id elementum neque, quis pulvinar lorem. Sed iaculis vel turpis nec convallis.
						</p>
					</div>
				</div>
			</div>
			<p> Mauris sapien massa, sagittis ut nulla sit amet, interdum bibendum elit. Mauris imperdiet at lectus sed rutrum. Proin metus quam, dignissim id pretium eu, pulvinar id magna. Cras mollis sit amet odio a viverra. Suspendisse ac est a libero volutpat elementum. Etiam iaculis mauris sem, ac euismod diam laoreet eget. Praesent convallis dui pellentesque augue fringilla, eu tincidunt velit fermentum. Aliquam sed commodo leo. Donec feugiat libero sit amet ante luctus, in malesuada lorem bibendum. Nunc ante quam, pellentesque a varius in, eleifend sed quam. Nunc varius, dolor ut commodo bibendum, nibh libero eleifend neque, at auctor libero magna pharetra sem. Mauris turpis lorem, gravida ac euismod hendrerit, pharetra in quam.</p>
			<p>Etiam ullamcorper pretium metus, quis placerat odio ornare id. Cras nisl erat, luctus eget ligula vitae, placerat consectetur enim. Pellentesque placerat mauris consectetur ultrices rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc hendrerit, nunc et placerat egestas, dolor augue molestie odio, eu viverra arcu velit et dolor. In sit amet erat enim. Curabitur sapien nulla, tempor at lorem at, cursus tempor felis. Nullam suscipit suscipit lacinia.</p>
			<p>Aliquam justo tortor, dictum et urna vel, efficitur convallis lacus. Suspendisse ornare, nunc sit amet eleifend sodales, mauris ipsum ullamcorper risus, id rutrum orci tortor non enim. Nullam tincidunt dictum justo vitae feugiat. Phasellus viverra quam justo, sollicitudin gravida ligula tempus ut. Pellentesque id purus eu ex dignissim porttitor in ut neque. Vivamus aliquam metus quis aliquet maximus. Vestibulum nibh neque, feugiat vitae risus non, ultrices dignissim leo. In eget nisl at velit accumsan iaculis eget et lacus. Nullam euismod, nulla in cursus malesuada, elit nibh blandit quam, quis ullamcorper leo quam ac elit. Nunc tincidunt id odio nec sagittis. Nunc sit amet tristique mauris. Curabitur dignissim facilisis nisi vel tempus. Nam et cursus velit. Curabitur pretium, orci a laoreet consequat, lorem ex viverra nunc, sed aliquet leo purus vitae ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed mollis, ligula faucibus consequat gravida, nisl nulla molestie leo, sed varius nunc ante mattis libero.</p>
		</div>
		<br>
		<div class="content">
			<h2>Sample Content Box Grid</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum diam eu scelerisque aliquet. Etiam efficitur ligula ac massa tincidunt fringilla. Aenean ac vulputate felis. Nam ullamcorper ultricies risus vitae maximus. Donec id elementum neque, quis pulvinar lorem. Sed iaculis vel turpis nec convallis. Sed condimentum tempor nunc, quis rutrum enim ultricies eu. Etiam luctus lacus non varius aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent in nibh ac massa sollicitudin accumsan id non ipsum. Proin ac euismod neque. Morbi arcu risus, accumsan id ligula ac, commodo blandit diam.</p>
			<div class="row">
				<div class="column">
					<div class="detailBox" onclick="toggleContent(this)">
						<h3> Lorem Ipsum</h3>
						<div class="boxSummary">
					dolor sit amet, consectetur adipiscing elit.
						</div>
						<p class="boxContents">
							Etiam rutrum diam eu scelerisque aliquet. Etiam efficitur ligula ac massa tincidunt fringilla. Aenean ac vulputate felis. Nam ullamcorper ultricies risus vitae maximus. Donec id elementum neque, quis pulvinar lorem. Sed iaculis vel turpis nec convallis.
						</p>
					</div><div class="detailBox" onclick="toggleContent(this)">
						<h3> Lorem Ipsum</h3>
						<div class="boxSummary">
					dolor sit amet, consectetur adipiscing elit.
						</div>
						<p class="boxContents">
							Etiam rutrum diam eu scelerisque aliquet. Etiam efficitur ligula ac massa tincidunt fringilla. Aenean ac vulputate felis. Nam ullamcorper ultricies risus vitae maximus. Donec id elementum neque, quis pulvinar lorem. Sed iaculis vel turpis nec convallis.
						</p>
					</div>
				</div>
				<div class="column">
					<div class="detailBox" onclick="toggleContent(this)">
						<h3> Lorem Ipsum</h3>
						<div class="boxSummary">
					dolor sit amet, consectetur adipiscing elit.
						</div>
						<p class="boxContents">
							Etiam rutrum diam eu scelerisque aliquet. Etiam efficitur ligula ac massa tincidunt fringilla. Aenean ac vulputate felis. Nam ullamcorper ultricies risus vitae maximus. Donec id elementum neque, quis pulvinar lorem. Sed iaculis vel turpis nec convallis.
						</p>
					</div><div class="detailBox" onclick="toggleContent(this)">
						<h3> Lorem Ipsum</h3>
						<div class="boxSummary">
					dolor sit amet, consectetur adipiscing elit.
						</div>
						<p class="boxContents">
							Etiam rutrum diam eu scelerisque aliquet. Etiam efficitur ligula ac massa tincidunt fringilla. Aenean ac vulputate felis. Nam ullamcorper ultricies risus vitae maximus. Donec id elementum neque, quis pulvinar lorem. Sed iaculis vel turpis nec convallis.
						</p>
					</div>
				</div>
			</div>
			<p>Aliquam ut massa nec urna ultrices ornare. Morbi gravida sed lectus id aliquam. Morbi porta metus quis nulla malesuada tristique. Proin lobortis fermentum lorem, vitae semper ante placerat eget. Nam lorem enim, faucibus et magna sed, sodales lobortis ante. Integer quis auctor mauris. In eget venenatis turpis. Nulla suscipit elit eu aliquet varius.</p>
		</div>
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js" type="text/javascript"></script>
		<script>
			$("#hidden").keypress(function (e) {
    			if(e.which == 13 && !e.shiftKey) {        
        			console.log(this.value);
        			e.preventDefault();
    			}
			});
			function toggleContent(box) {
				content = box.getElementsByClassName("boxContents").item(0);
				if(window.getSelection().toString() == 0) {
				content.classList.toggle("visible");
				}
			}
		</script>
	</body>
</html>