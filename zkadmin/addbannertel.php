<?php 
	require_once "../data/common.inc.php";
	header("Content-Type: text/html; charset=utf-8");
	session_start();
	$link=mysqli_connect($cfg_dbhost,$cfg_dbuser,$cfg_dbpwd);
	mysqli_select_db($link,$cfg_dbname);
	mysqli_query($link,"set names utf8");
	if(isset($_POST['sub'])){
		//var_dump($_FILES);exit;
		if ((($_FILES["img"]["type"] == "image/gif")|| ($_FILES["img"]["type"] == "image/jpeg")|| ($_FILES["img"]["type"] == "image/pjpeg") || ($_FILES["img"]["type"] == "image/png"))){
		  	if ($_FILES["img"]["error"] > 0){
		    		echo "Return Code: " . $_FILES['img']["error"] . "<br />";
		    }else{

		      	if (file_exists("images/banner/" . $_FILES['img']["name"])){
		      		echo "<script>alert('图片名称重复！');location.href='/zkadmin/addbannertel.php';</script>";
		      	}else{
			    	move_uploaded_file($_FILES['img']["tmp_name"],"images/banner/" . $_FILES['img']["name"]);
			    	$img="images/banner/" . $_FILES['img']["name"];
		      	}
		    }
	  	}else{
	  		echo "<script>alert('图片上传失败！');location.href='/zkadmin/addbannertel.php';</script>";
	  	}
	  	if(isset($img)){
	  		$alt=$_POST['alt'];
	  		$url=$_POST['url'];
	  		$hot=$_POST['hot'];
	  		$sql="insert into dede_bannertel values(null,'$img','$url','$alt','$hot')";
	  		mysqli_query($link,$sql);
	  		echo "<script>alert('添加成功！');location.href='/zkadmin/bannertel.php';</script>";
	  	}
	}
 ?>
 <html>
<head>
	<title></title>
	<style>
		form a.link{
			display: block;
			width: 140px;
		    height: 40px;
		    line-height: 40px;
		    text-decoration: none;
		    text-align: center;
		    -webkit-border-radius: 5px;
		    -moz-border-radius: 5px;
		    border-radius: 5px;
		    color: #fff;
		    background: #428fb9;
		    margin-bottom: 30px;
		}
		form a.link:hover,form dd:nth-of-type(2):hover span,form dt input:hover{
			background: #154b69;
		}
		form dd label{
			display: inline-block;
			width: 140px;
			line-height: 40px;
			margin-right: 15px;
			text-align: right;
		}
		form dd input{
			width: 400px;
			padding: 0 10px;
			height: 40px;
			border: solid 1px #ddd;
		}
		form dd{
			position: relative;
			margin-bottom: 20px;
		}
		form dd:nth-of-type(2) input{
			position: relative;
			z-index: 30;
			opacity: 0;
			filter:alpha(opacity=0);
		}
		form dd:nth-of-type(2) span{
			position: absolute;
			left: 160px;
			top: 8px;
			width: 140px;
			height: 40px;
			line-height: 40px;
			text-align: center;
			color: #fff;
			-webkit-border-radius: 3px;
			-moz-border-radius: 3px;
			border-radius: 3px;
			background: #666;
			z-index: 10;
			cursor: pointer;
		}
		form dt input{
			width: 80px;
			height: 30px;
			background: #428fb9;
			color: #fff;
			text-align: center;
			line-height: 30px;
			margin-left: 200px;
			border: 0;
		}
		.prew{
			display: inline-block;
		}
		.prew img{
			max-width: 800px;
		}
	</style>
</head>
<body>
	<form action="" method='post' enctype="multipart/form-data">
		<dl>
			<dd>
				<a href="javascript:;" onClick="javascript :history.back(-1);" class="link">返回Banner图</a>
			</dd>
			
			<dd>
				<label for="">上传banner图：</label>
				<input type="file" name='img' class="file">
				<span>选择文件</span>
			</dd>
			<dd>
				<label for="">图片：</label>
				<div class="prew">
					
				</div>
			</dd>
			<dd>
				<label for="">Alt（图片注释）：</label>
				<input type="text" name='alt'>
			</dd>
			<dd>
				<label for="">Url（跳转链接）：</label>
				<input type="text" name='url'>
			</dd>
			<dd>
				<label for="">排序(越高越前)：</label>
				<input type="text" name='hot'>
			</dd>
			<dt>
				<input type="submit" name='sub' value='提交'>
			</dt>
		</dl>
		<br/>	
	</form>
<script src="http://libs.baidu.com/jquery/2.1.1/jquery.min.js"></script>
<script>
function preview1(file) {
            var img = new Image(), url = img.src = URL.createObjectURL(file)
            var $img = $(img)
            img.onload = function() {
                URL.revokeObjectURL(url)
                $('.prew').empty().append($img)
            }
        };
         
        $(function() {
            $('.file').change(function(e) {
                var file = e.target.files[0]
                preview1(file)
            })
        })
</script>
</body>
 </html>