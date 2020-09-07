<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=utf-8");

include "library/config.php";
  
  $postjson = json_decode(file_get_contents('php://input'), true);

 if($postjson['action']=='register'){
	$password = md5($postjson['password']);
  	$query = mysqli_query($mysqli, "INSERT INTO users SET
  		username = '$postjson[username]',
  		email = '$postjson[email]',
  		phone = '$postjson[phone]',
		password = '$password'
  	");

  	if($query) $result = json_encode(array('success'=>true));
  	else $result = json_encode(array('success'=>false, 'msg'=>'error, please try again'));

  	echo $result;
  }
  elseif($postjson['action']=='login'){
	$password = md5($postjson['password']);
	$query = mysqli_query($mysqli, "SELECT * FROM users WHERE username = '$postjson[username]' AND password = '$password'");
	$check = mysqli_num_rows($query);

	if($check>0){
		$data = mysqli_fetch_array($query);
		$datauser = array(
			'user_id' => $data['user_id'],
			'username' => $data['username'],
			'email' => $data['email'],
			'phone' => $data['phone'],
			'password' => $data['password']
		);
		$result = json_encode(array('success'=>true, 'result'=>$datauser));
	}
	else{
		$result = json_encode(array('success'=>false, 'msg'=>'Username or Password Invalid'));
	}

	echo $result;
}
else if($postjson['action']=='bookticket'){
	$query = mysqli_query($mysqli, "INSERT INTO ticket SET
		movie_name = '$postjson[moviename]',
  		cinema_name = '$postjson[cinemaname]',
		showtime = '$postjson[showtime]',
		showdate = '$postjson[showdate]',
		seat = '$postjson[seat]',
  		user_id = '$postjson[userid]'
  	");

  	if($query) $result = json_encode(array('success'=>true));
  	else $result = json_encode(array('success'=>false));

  	echo $result;
  }
  elseif($postjson['action']=='getticket'){
	$data = array();
	$query = mysqli_query($mysqli, "SELECT * FROM ticket WHERE user_id = $postjson[userid]");

	while($row = mysqli_fetch_array($query)){

		$data[] = array(
			'ticket_id' => $row['ticket_id'],
			'movie_name' => $row['movie_name'],
			'cinema_name' => $row['cinema_name'],
			'showtime' => $row['showtime'],
			'showdate' => $row['showdate'],
			'seat' => $row['seat'],
			'user_id' => $row['user_id']
		);
	}
  
  if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
  else $result = json_encode(array('success'=>false));
  
  echo $result;
}
elseif($postjson['action']=='getwatchlist'){
	$data = array();
	$query = mysqli_query($mysqli, "SELECT * FROM watchlist WHERE user_id = $postjson[userid]");

	while($row = mysqli_fetch_array($query)){

		$data[] = array(
			'watchlist_id' => $row['watchlist_id'],
			'movie_name' => $row['movie_name'],
			'movie_image' => $row['movie_image'],
			'user_id' => $row['user_id']
		);
	}
  
  if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
  else $result = json_encode(array('success'=>false));
  
  echo $result;
}
elseif($postjson['action']=='addwatchlist'){
	$query = mysqli_query($mysqli, "SELECT * FROM watchlist WHERE user_id = $postjson[userid] AND movie_name = '$postjson[moviename]'");
	$check = mysqli_num_rows($query);

	if($check>0){
		$result = json_encode(array('success'=>false, 'msg'=>'Already added to Watchlist'));
	}
	else{
		$query = mysqli_query($mysqli, "INSERT INTO watchlist SET
		movie_name = '$postjson[moviename]',
  		movie_image = '$postjson[movieimage]',
  		user_id = '$postjson[userid]'
		");

		if($query) $result = json_encode(array('success'=>true));
		else $result = json_encode(array('success'=>false));
	}
  
  echo $result;
}
elseif($postjson['action']=='delete'){
	$query = mysqli_query($mysqli, "DELETE FROM watchlist WHERE watchlist_id='$postjson[watchlist_id]'");

	if($query) $result = json_encode(array('success'=>true, 'result'=>'success'));
	else $result = json_encode(array('success'=>false, 'result'=>'error'));

	echo $result;

}
elseif($postjson['action']=='editprofile'){
	$query = mysqli_query($mysqli, "UPDATE users SET 
		username='$postjson[username]',
		email='$postjson[email]',
		phone='$postjson[phone]' WHERE user_id='$postjson[user_id]'");
	
	$query = mysqli_query($mysqli, "SELECT * FROM users WHERE username = '$postjson[username]'");
	if($query){
		$data = mysqli_fetch_array($query);
		$datauser = array(
			'user_id' => $data['user_id'],
			'username' => $data['username'],
			'email' => $data['email'],
			'phone' => $data['phone'],
			'password' => $data['password'],
		);
		$result = json_encode(array('success'=>true, 'result'=>$datauser));
	}
	else $result = json_encode(array('success'=>false, 'msg'=>'error'));

	echo $result;

}