<?php


// http://129.28.174.115:8001/a/jishuzhichi/leave_message.php


require_once(dirname(__FILE__).'/../../zkadmin/config.php');
CheckPurview('a_New,a_AccNew');
require_once(DEDEINC.'/customfields.func.php');
require_once(DEDEADMIN.'/inc/inc_archives_functions.php');
if(file_exists(DEDEDATA.'/template.rand.php'))
{
    require_once(DEDEDATA.'/template.rand.php');
}


empty($dopost) ? $dopost='save' : $dopost='';
if($dopost=='save') {
    // 接收参数
    $subject = $_POST['subject'];
    $company = $_POST['company'];
    $username = $_POST['username'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $country = $_POST['country'];
    $address = $_POST['address'];
    $detail = $_POST['detail'];

    // 判断信息是否完整
    // 判断公司名称是否为空
    if(empty($company)){
        exit(json_encode(['code'=>10001, 'message'=>'公司名称不能为空！']));
    }
    // 判断用户姓名是否为空
    if(empty($username)){
        exit(json_encode(['code'=>10001, 'message'=>'姓名不能为空！']));
    }
    // 判断用户邮箱是否为空
    if(empty($email)){
        exit(json_encode(['code'=>10001, 'message'=>'电子邮箱不能为空！']));
    }
    // 判断用户电话号码是否为空
    if(!preg_match("/^1[3456789]\d{9}$/", $mobile)){
        exit(json_encode(['code'=>10001, 'message'=>'手机号码填写不正确，或者未填写！']));
    }


    $now_time = date('Y-m-d H:i:s', time());

    //保存到主表
    $query = "INSERT INTO `dede_leave_message`(subject,company,username,email,mobile,country,address,create_time,detail)
    VALUES ('$subject','$company','$username','$email','$mobile','$country','$address','$now_time', '$detail');";

    if(!$dsql->ExecuteNoneQuery($query)) {
        // $gerr = $dsql->GetError();
        // ShowMsg("把数据保存到数据库主表 `#@__archives` 时出错，请把相关信息提交给DedeCms官方。".str_replace('"','',$gerr),"javascript:;");
        // exit();
        exit(json_encode(['code'=>10001, 'message'=>'保存失败！']));
        
    }

    exit(json_encode(['code'=>200, 'message'=>'保存成功！']));


    
}else{
    exit(json_encode(['code'=>10001, 'message'=>'参数错误']));
}






