<?php
$z[0]=Array("top","\r\n  <m:item name='网站栏目管理' link='catalog_main.php' ischannel='1' addalt='创建栏目' linkadd='catalog_add.php?listtype=all' rank='t_List,t_AccList' target='main' />\r\n  <m:item name='所有档案列表' link='content_list.php' rank='a_List,a_AccList' target='main' />\r\n  <m:item name='等审核的档案' link='content_list.php?arcrank=-1' rank='a_Check,a_AccCheck' target='main' />\r\n  <m:item name='我发布的文档' link='content_list.php?mid=1' rank='a_List,a_AccList,a_MyList' target='main' />\r\n  <m:item name='内容回收站' link='recycling.php' ischannel='1' addalt='清空回收站' addico='images/gtk-del.png' linkadd='archives_do.php?dopost=clear&aid=no&recycle=1' rank='a_List,a_AccList,a_MyList' target='main' />\r\n  <m:item name='上传新文件' link='media_add.php' rank='' target='main' />\r\n",53,935);
$z[0][4]=array();
$z[0][4]['item']="1_";
$z[0][4]['name']="常用操作";
$z[0][4]['display']="block";
$z[1]=Array("top","\r\n  <m:item name='采集节点管理' link='co_main.php' rank='co_ListNote' target='main' />\r\n  <m:item name='临时内容管理' link='co_url.php' rank='co_ViewNote' target='main' />\r\n  <m:item name='导入采集规则' link='co_get_corule.php' rank='co_GetOut' target='main'/>\r\n  <m:item name='监控采集模式' link='co_gather_start.php' rank='co_GetOut' target='main'/>\r\n  <m:item name='采集未下载内容' link='co_do.php?dopost=coall' rank='co_GetOut' target='main'/>\r\n",967,1569);
$z[1][4]=array();
$z[1][4]['item']="3_";
$z[1][4]['name']="采集管理";
$z[1][4]['display']="none";
$z[1][4]['rank']="co_NewRule,co_ListNote,co_ViewNote,co_Switch,co_GetOut";
$z[2]=Array("top","\r\n  <m:item name='更新系统缓存' link='sys_cache_up.php' rank='sys_ArcBatch' target='main' />\r\n  <m:item name='文档批量维护' link='content_batch_up.php' rank='sys_ArcBatch' target='main' />\r\n  <m:item name='搜索关键词维护' link='search_keywords_main.php' rank='sys_Keyword' target='main' />\r\n  <m:item name='文档关键词维护' link='article_keywords_main.php' rank='sys_Keyword' target='main' />\r\n  <m:item name='重复文档检测' link='article_test_same.php' rank='sys_ArcBatch' target='main' />\r\n  <m:item name='自动摘要|分页' link='article_description_main.php' rank='sys_Keyword' target='main' />\r\n  <m:item name='TAG标签管理' link='tags_main.php' rank='sys_Keyword' target='main' />\r\n  <m:item name='数据库内容替换' link='sys_data_replace.php' rank='sys_ArcBatch' target='main' />\r\n",1573,2465);
$z[2][4]=array();
$z[2][4]['item']="1_3_3";
$z[2][4]['name']="批量维护";
$z[2][4]['display']="block";
$z[3]=Array("top","\r\n  <m:item name='一键更新网站' link='makehtml_all.php' rank='sys_MakeHtml' target='main' />\r\n  <m:item name='更新系统缓存' link='sys_cache_up.php' rank='sys_ArcBatch' target='main' />\r\n  \r\n",2469,2768);
$z[3][4]=array();
$z[3][4]['item']="5_";
$z[3][4]['name']="自动任务";
$z[3][4]['notshowall']="1";
$z[3][4]['display']="block";
$z[3][4]['rank']="sys_MakeHtml";
$z[4]=Array("top","\r\n  <m:item name='更新主页HTML' link='makehtml_homepage.php' rank='sys_MakeHtml' target='main' />\r\n  <m:item name='更新栏目HTML' link='makehtml_list.php' rank='sys_MakeHtml' target='main' />\r\n  <m:item name='更新文档HTML' link='makehtml_archives.php' rank='sys_MakeHtml' target='main' />\r\n  <m:item name='更新网站地图' link='makehtml_map_guide.php' rank='sys_MakeHtml' target='main' />\r\n  <m:item name='更新RSS文件' link='makehtml_rss.php' rank='sys_MakeHtml' target='main' />\r\n  <m:item name='获取JS文件' link='makehtml_js.php' rank='sys_MakeHtml' target='main' />\r\n  <m:item name='更新专题HTML' link='makehtml_spec.php' rank='sys_MakeHtml' target='main' />\r\n",2772,3555);
$z[4][4]=array();
$z[4][4]['item']="5_";
$z[4][4]['name']="HTML更新";
$z[4][4]['notshowall']="1";
$z[4][4]['display']="none";
$z[4][4]['rank']="sys_MakeHtml";
$z[5]=Array("top","\r\n\r\n",3559,3654);
$z[5][4]=array();
$z[5][4]['item']="6_";
$z[5][4]['name']="会员管理";
$z[5][4]['display']="none";
$z[5][4]['rank']="member_List,member_Type";

?>