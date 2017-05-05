<?php 
	if(isset($_GET['trigger']) && $_GET['trigger'] == 1) {
		error_reporting(E_ALL);
		exec('gpio mode 7 out');
		usleep(10000);
		exec('gpio mode 7 in');
	}
?>
<!DOCTYPE html>
<html>
	<head>
		<title>Garage Opener</title>
	</head>
	<body>
		<div class='awrap'>
      <a href='?trigger=1'>Open door</a>
		</div>
	</body>
</html>
