<?php
	require_once "../data/common.inc.php";
	header("Content-Type: text/html; charset=utf-8");
	session_start();
	$link=mysqli_connect($cfg_dbhost,$cfg_dbuser,$cfg_dbpwd);
	mysqli_select_db($link,$cfg_dbname);
	mysqli_query($link,"set names utf8");
	if(isset($_GET['id'])){
		$id=$_GET['id'];
		$sql="delete from dede_bannertel where id='$id'";
		mysqli_query($link,$sql);
		echo "<script>alert('删除成功！');location.href='/zkadmin/bannertel.php'</script>";
	}
?>
<html>
<head>
	<style>
		.banner a{
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
		.banner a:hover{
			background: #154b69;
		}
		table{
			border: solid 1px #ddd;
			border-bottom: 0;
		}
		tr{
			height: 35px;

		}
		td{
			text-align: center;
			border-right: solid 1px #ddd;
			border-bottom: solid 1px #ddd;
			padding: 5px 0;
		}
	</style>
</head>
<body>
	<div class="banner">
		<a href="/zkadmin/addbannertel.php">添加banner图</a>
	</div>
	<table cellpadding="0" cellspacing="0" width='100%'>
		<thead>
			<tr>
				<td>ID</td>
				<td>banner图</td>
				<td>跳转链接</td>
				<td>操作</td>
			</tr>
		</thead>
		<tbody>
		<?php 
			$sql="select * from dede_bannertel order by hot desc";
			$rs=mysqli_query($link,$sql);
			while($banner=mysqli_fetch_array($rs,MYSQLI_ASSOC)){
				$ba[]=$banner;
			}
			if(isset($ba)){
				foreach($ba as $value){
					?>
						<tr>
							<td><?php echo $value['id']; ?></td>
							<td><img src="/zkadmin/<?php echo $value['img']; ?>" alt="<?php echo $value['alt']; ?>" style="max-width:800px;width:800px;height:200px;"></td>
							<td><?php echo $value['url']; ?></td>
							<td><a href="/zkadmin/editbannertel.php?id=<?php echo $value['id']; ?>">修改</a>&nbsp;<a href="/zkadmin/bannertel.php?id=<?php echo $value['id']; ?>">删除</a></td>
						</tr>
					<?php
				}
			}
		 ?>
		</tbody>
	</table>
</body>
</html>