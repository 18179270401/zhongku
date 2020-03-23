<?php
/**
 * 后台管理菜单项
 *
 * @version        $Id: inc_menu.php 1 10:32 2010年7月21日Z tianya $
 * @package        DedeCMS.Administrator
 * @copyright      Copyright (c) 2007 - 2010, DesDev, Inc.
 * @license        http://help.dedecms.com/usersguide/license.html
 * @link           http://www.dedecms.com
 */
require_once(dirname(__FILE__)."/../config.php");

//载入可发布频道
$addset = '';

//检测可用的内容模型
if($cfg_admin_channel = 'array' && count($admin_catalogs) > 0)
{
    $admin_catalog = join(',', $admin_catalogs);
    $dsql->SetQuery(" SELECT channeltype FROM `#@__arctype` WHERE id IN({$admin_catalog}) GROUP BY channeltype ");
}
else
{
    $dsql->SetQuery(" SELECT channeltype FROM `#@__arctype` GROUP BY channeltype ");
}
$dsql->Execute();
$candoChannel = '';
while($row = $dsql->GetObject())
{
    $candoChannel .= ($candoChannel=='' ? $row->channeltype : ','.$row->channeltype);
}
if(empty($candoChannel)) $candoChannel = 1;
$dsql->SetQuery("SELECT id,typename,addcon,mancon FROM `#@__channeltype` WHERE id IN({$candoChannel}) AND id<>-1 AND isshow=1 ORDER BY id ASC");
$dsql->Execute('mm');
while($row = $dsql->GetObject('mm'))
{
    $addset .= "  <m:item name='{$row->typename}' ischannel='1' link='{$row->mancon}?channelid={$row->id}' linkadd='{$row->addcon}?channelid={$row->id}' channelid='{$row->id}' rank='' target='main' />\r\n";
}
//////////////////////////

$adminMenu1 = $adminMenu2 = '';
if($cuserLogin->getUserType() >= 10)
{
    $adminMenu1 = "
";
$adminMenu2 = "
    ";
}
$remoteMenu = ($cfg_remote_site=='Y')? "<m:item name='远程服务器同步' link='makeremote_all.php' rank='sys_ArcBatch' target='main' />" : "";
$menusMain = "
-----------------------------------------------

<m:top item='1_' name='常用操作' display='block'>
  <m:item name='网站栏目管理' link='catalog_main.php' ischannel='1' addalt='创建栏目' linkadd='catalog_add.php?listtype=all' rank='t_List,t_AccList' target='main' />
  <m:item name='banner管理' link='banner.php' rank='sys_verify' target='main' />
  <m:item name='手机banner管理' link='bannertel.php' rank='sys_verify' target='main' />
  <m:item name='内容回收站' link='recycling.php' ischannel='1' addalt='清空回收站' addico='images/gtk-del.png' linkadd='archives_do.php?dopost=clear&aid=no&recycle=1' rank='a_List,a_AccList,a_MyList' target='main' />
  <m:item name='上传新文件' link='media_add.php' rank='' target='main' />
  <m:item name='留言记录' link='leave_message.php' rank='' target='main' />
  <m:item name='附件数据管理' link='media_main.php' rank='sys_Upload,sys_MyUpload' target='main' />
  <m:item name='一键更新网站' link='makehtml_all.php' rank='sys_MakeHtml' target='main' />
  <m:item name='更新系统缓存' link='sys_cache_up.php' rank='sys_ArcBatch' target='main' />
  <m:item name='更新主页HTML' link='makehtml_homepage.php' rank='sys_MakeHtml' target='main' />
  <m:item name='更新栏目HTML' link='makehtml_list.php' rank='sys_MakeHtml' target='main' />
  <m:item name='更新文档HTML' link='makehtml_archives.php' rank='sys_MakeHtml' target='main' />
  <m:item name='内容模型管理' link='mychannel_main.php' rank='c_List' target='main' />
  <m:item name='联动类别管理' link='stepselect_main.php' rank='c_Stepseclect' target='main' />
  <m:item name='自定义表单' link='diy_main.php' rank='c_List' target='main' />
  <m:item name='默认模板管理' link='templets_main.php' rank='temp_All' target='main'/>
  <m:item name='标签源码管理' link='templets_tagsource.php' rank='temp_All' target='main'/>
  <m:item name='系统基本参数' link='sys_info.php' rank='sys_Edit' target='main' />
  <m:item name='系统日志管理' link='log_list.php' rank='sys_Log' target='main' />
  <m:item name='图片水印设置' link='sys_info_mark.php' rank='sys_Edit' target='main' />
  <m:item name='数据库备份/还原' link='sys_data.php' rank='sys_Data' target='main' />
  <m:item name='SQL命令行工具' link='sys_sql_query.php' rank='sys_Data' target='main' />
  <m:item name='系统错误修复[S]' link='sys_repair.php' rank='sys_verify' target='main' />
</m:top>

-----------------------------------------------
";