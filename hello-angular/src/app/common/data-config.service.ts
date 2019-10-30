import { environment } from './../../environments/environment'
export const DataConfigService = {
    "path": "",
    "simulate": false,
    "httpUrl": "",
    "applicationHttpUrl": environment.application,
    "data": {
        //案例
        "getLineChartData": {
            "url": "",
            "simulate": true,
            "method": "get",
            "httpUrlType": "applicationHttpUrl",
            "description": "查询所有应用分类",
            "simulateUrl": "./../../mock-data/getLineChartData.json"
        },
        "getJiaoDuData": {
            "url": "",
            "simulate": true,
            "method": "get",
            "httpUrlType": "applicationHttpUrl",
            "description": "查询所有应用分类",
            "simulateUrl": "./../../mock-data/getJiaoDuData.json"
        },
        "getGaoDuData": {
            "url": "",
            "simulate": true,
            "method": "get",
            "httpUrlType": "applicationHttpUrl",
            "description": "查询所有应用分类",
            "simulateUrl": "./../../mock-data/getGaoDuData.json"
        },
        "getSanWeiData": {
            "url": "",
            "simulate": true,
            "method": "get",
            "httpUrlType": "applicationHttpUrl",
            "description": "查询所有应用分类",
            "simulateUrl": "./../../mock-data/getSanWeiData.json"
        },
        "getWorkspace": {
            "url": "/hlms/api/tenant/workspace",
            "simulate": false,
            "method": "get",
            "httpUrlType": "applicationHttpUrl",
            "description": "获取用户登录名",
            "simulateUrl": "./../../mock-data/getWorkspace.json"
        },
        "logout": {
            "url": "/hlms/api/tenant/login/logout",
            "simulate": false,
            "method": "get",
            "httpUrlType": "applicationHttpUrl",
            "description": "退出登录",
            "simulateUrl": "./../../mock-data/logout.json"
        },
        "getLocInfoAllTree": {
            "url": "/hlms/api/tenant/hlmsloc/locinfo_all_tree/",
            "simulate": false,
            "method": "getUrl",
            "httpUrlType": "applicationHttpUrl",
            "description": "空间信息全表及属性树查询",
            "simulateUrl": ""
        },
        "getLocInfoAllTreeTwo": {
            "url": "/hlms/api/tenant/hlmsloc/locInfo_tree",
            "simulate": false,
            "method": "get",
            "httpUrlType": "applicationHttpUrl",
            "description": "空间信息全表及属性树查询",
            "simulateUrl": ""
        },
        "getFuzzy": {
            "url": "/hlms/api/tenant/user/fuzzy",
            "simulate": false,
            "method": "post",
            "httpUrlType": "applicationHttpUrl",
            "description": "获取用户列表",
            "simulateUrl": "./../../mock-data/getFuzzy.json"
        },
        "getPersonLoc": {
            "url": "/hlms/api/clean/personLoc",
            "simulate": false,
            "method": "get",
            "httpUrlType": "applicationHttpUrl",
            "description": "保洁区域查询接口",
            "simulateUrl": "./../../mock-data/getPersonLoc.json"
        },
        "setPersonLoc": {
            "url": "/hlms/api/clean/personLoc",
            "simulate": false,
            "method": "post",
            "httpUrlType": "applicationHttpUrl",
            "description": "分配保洁区域新增接口",
            "simulateUrl": "./../../mock-data/setPersonLoc.json"
        },
        "getDictupdate": {
            "url": "/hlms/api/clean/dict/value",
            "simulate": false,
            "method": "get",
            "httpUrlType": "applicationHttpUrl",
            "description": "分配保洁区域新增接口",
            "simulateUrl": "./../../mock-data/getDictupdate.json"
        },
        "setDictupdate": {
            "url": "/hlms/api/clean/dict/update",
            "simulate": false,
            "method": "post",
            "httpUrlType": "applicationHttpUrl",
            "description": "分配保洁区域新增接口",
            "simulateUrl": "./../../mock-data/setDictupdate.json"
        },
        "keepalive": {
            "url": "/hlms/api/tenant/authentication/keepalive",
            "simulate": false,
            "method": "get",
            "httpUrlType": "applicationHttpUrl",
            "description": "心跳保活",
            "simulateUrl": "/mock-data/keepalive.json"
        },
        "getLogininfo": {
            "url": "/hlms/api/tenant/authentication/logininfo",
            "simulate": false,
            "method": "get",
            "httpUrlType": "applicationHttpUrl",
            "description": "根据token获取用户信息",
            "simulateUrl": "/mock-data/getLogininfo.json"
        },
        "getloginurl": {
            "url": "/hlms/api/tenant/authentication/getloginurl/",
            "simulate": false,
            "method": "getUrl",
            "httpUrlType": "applicationHttpUrl",
            "description": "根据token获取用户信息",
            "simulateUrl": "/mock-data/getloginurl.json"
        },
        "getuserlistbyrolecode": {
            "url": "/hlms/api/tenant/user/getuserlistbyrolecode",
            "simulate": false,
            "method": "post",
            "httpUrlType": "applicationHttpUrl",
            "description": "根据token获取用户信息",
            "simulateUrl": "/mock-data/getuserlistbyrolecode.json"
        },
        //专项类型
        "getSpecialKind": {
            "url": "/hlms/api/clean/special/kind/page",
            "simulate": false,
            "method": "post",
            "httpUrlType": "applicationHttpUrl",
            "description": "获取专项类型列表",
            "simulateUrl": "/mock-data/getSpecialKind.json"
        },
        "getOrderOonfigure": {
            "url": "/hlms/api/clean/dict/order_configure",
            "simulate": false,
            "method": "get",
            "httpUrlType": "applicationHttpUrl",
            "description": "获取工单派单配置",
            "simulateUrl": "/mock-data/getOrderOonfigure.json"
        },
        "setOrderOonfigure": {
            "url": "/hlms/api/clean/dict/batch_update",
            "simulate": false,
            "method": "post",
            "httpUrlType": "applicationHttpUrl",
            "description": "更新派单配置",
            "simulateUrl": "/mock-data/setOrderOonfigure.json"
        },
        "getResourceList": {
            "url": "/hlms/api/clean/resource/page",
            "simulate": false,
            "method": "post",
            "httpUrlType": "applicationHttpUrl",
            "description": "更新派单配置",
            "simulateUrl": "/mock-data/getResourceList.json"
        },
        "getDepartment": {
            "url": "/hlms/api/tenant/department/tree/",
            "simulate": false,
            "method": "getUrl",
            "httpUrlType": "applicationHttpUrl",
            "description": "获取部门树",
            "simulateUrl": ""
        },
        "queryworkspace": {
            "url": "/hlms/api/tenant/workspace",
            "simulate": false,
            "method": "get",
            "httpUrlType": "applicationHttpUrl",
            "description": "查询生态平台",
            "simulateUrl": "./../../mock-data/queryworkspace.json"
        },
        "addResource": {
            "url": "/hlms/api/clean/resource",
            "simulate": false,
            "method": "post",
            "httpUrlType": "applicationHttpUrl",
            "description": "新增资源",
            "simulateUrl": "./../../mock-data/addResource.json"
        },
        "editResource": {
            "url": "/hlms/api/clean/resource",
            "simulate": false,
            "method": "put",
            "httpUrlType": "applicationHttpUrl",
            "description": "修改资源",
            "simulateUrl": "./../../mock-data/editResource.json"
        },
        "deleteResource": {
            "url": "/hlms/api/clean/resource",
            "simulate": false,
            "method": "delete",
            "httpUrlType": "applicationHttpUrl",
            "description": "删除资源",
            "simulateUrl": "./../../mock-data/deleteResource.json"
        },
        "getDictList": {
            "url": "/hlms/api/clean/app/order/dict_list",
            "simulate": false,
            "method": "get",
            "httpUrlType": "applicationHttpUrl",
            "description": "资源类型查询接口（从字典获取）",
            "simulateUrl": "./../../mock-data/getDictList.json"
        },
        "getCleanResource": {
            "url": "/hlms/api/clean/resource/list/",
            "simulate": false,
            "method": "getUrl",
            "httpUrlType": "applicationHttpUrl",
            "description": "查询资源列表",
            "simulateUrl": "./../../mock-data/getCleanResource.json"
        },
        "getkind_save": {
            "url": "/hlms/api/clean/special/kind/kind_save",
            "simulate": false,
            "method": "post",
            "httpUrlType": "applicationHttpUrl",
            "description": "专项保洁任务类型新增接口",
            "simulateUrl": "./../../mock-data/getkind_save.json"
        },
        "getkind_code": {
            "url": "/hlms/api/clean/special/kind/kind_code/",
            "simulate": false,
            "method": "getUrl",
            "httpUrlType": "applicationHttpUrl",
            "description": "查询新增专项类型编码",
            "simulateUrl": "./../../mock-data/getkind_code.json"
        },
        "getkindUpdate": {
            "url": "/hlms/api/clean/special/kind/update",
            "simulate": false,
            "method": "post",
            "httpUrlType": "applicationHttpUrl",
            "description": "专项保洁任务类型修改接口",
            "simulateUrl": "./../../mock-data/getkindUpdate.json"
        },
        "getkind_info": {
            "url": "/hlms/api/clean/special/kind/kind_info/",
            "simulate": false,
            "method": "getUrl",
            "httpUrlType": "applicationHttpUrl",
            "description": "专项保洁任务类型查询详情接口",
            "simulateUrl": "./../../mock-data/getkind_info.json"
        },
        "deletekind": {
            "url": "/hlms/api/clean/special/kind/delete",
            "simulate": false,
            "method": "post",
            "httpUrlType": "applicationHttpUrl",
            "description": "专项保洁任务类型批量删除接口",
            "simulateUrl": "./../../mock-data/deletekind.json"
        },
        "getDepartMentInfo": {
            "url": "/hlms/api/tenant/department/tree/",
            "simulate": false,
            "method": "getUrl",
            "httpUrlType": "applicationHttpUrl",
            "description": "获取部门树（懒加载）",
            "simulateUrl": "/mock-data/addSpecialTask.json"
        },
        "getLocationInfo": {
            "url": "/hlms/api/tenant/hlmsloc/lazyLoad/locationInfo",
            "simulate": false,
            "method": "get",
            "httpUrlType": "applicationHttpUrl",
            "description": "获取空间树（懒加载）",
            "simulateUrl": "/mock-data/addSpecialTask.json"
        },
        "getLocation": {
            "url": "/hlms/api/tenant/hlmsloc/loc_info_tree/",
            "simulate": false,
            "method": "getUrl",
            "httpUrlType": "applicationHttpUrl",
            "description": "获取空间树",
            "simulateUrl": ""
        },
        "getSpecialTask": {
            "url": "/hlms/api/clean/special/getList",
            "simulate": false,
            "method": "get",
            "httpUrlType": "applicationHttpUrl",
            "description": "获取专项任务列表",
            "simulateUrl": "/mock-data/getSpecialTask.json"
        },
        "addSpecialTask": {
            "url": "/hlms/api/clean/special/add",
            "simulate": false,
            "method": "post",
            "httpUrlType": "applicationHttpUrl",
            "description": "专项保洁专项任务保存接口",
            "simulateUrl": "/mock-data/addSpecialTask.json"
        },
        "getKindList": {
            "url": "/hlms/api/clean/special/kind/list",
            "simulate": false,
            "method": "get",
            "httpUrlType": "applicationHttpUrl",
            "description": "查询专项类型数组",
            "simulateUrl": "/mock-data/getKindList.json"
        },
        "getUserlistbyrolecode": {
            "url": "/hlms/api/tenant/user/getuserlistbyrolecode",
            "simulate": false,
            "method": "post",
            "httpUrlType": "applicationHttpUrl",
            "description": "查询专项主管",
            "simulateUrl": "/mock-data/getUserlistbyrolecode.json"
        },
        "getTaskCode": {
            "url": "/hlms/api/clean/special/getCode",
            "simulate": false,
            "method": "get",
            "httpUrlType": "applicationHttpUrl",
            "description": "获取专项任务编码",
            "simulateUrl": "/mock-data/getTaskCode.json"
        },
        "getTaskDetail": {
            "url": "/hlms/api/clean/special/get",
            "simulate": false,
            "method": "get",
            "httpUrlType": "applicationHttpUrl",
            "description": "查询专项任务详情",
            "simulateUrl": "/mock-data/getTaskDetail.json"
        },
        "deleteTask": {
            "url": "/hlms/api/clean/special/delete",
            "simulate": false,
            "method": "delete",
            "httpUrlType": "applicationHttpUrl",
            "description": "删除专项任务列表",
            "simulateUrl": "/mock-data/deleteTask.json"
        },
        "updateTask": {
            "url": "/hlms/api/clean/special/update",
            "simulate": false,
            "method": "post",
            "httpUrlType": "applicationHttpUrl",
            "description": "更新专项任务",
            "simulateUrl": "/mock-data/updateTask.json"
        },
        "queryclean": {
            "url": "/hlms/api/tenant/knowledge/queryclean",
            "simulate": false,
            "method": "get",
            "httpUrlType": "applicationHttpUrl",
            "description": "保洁文档查询",
            "simulateUrl": "/mock-data/queryclean.json"
        },
        "getSpecialLog": {
            "url": "/hlms/api/clean/app/special/node_list",
            "simulate": false,
            "method": "get",
            "httpUrlType": "applicationHttpUrl",
            "description": "获取专项保洁工单进度列表",
            "simulateUrl": "/mock-data/getSpecialLog.json"
        },
        "getMenu": {
            "url": "/hlms/api/role/authentication/suite/1000001340364448",
            "simulate": false,
            "method": "get",
            "httpUrlType": "applicationHttpUrl",
            "description": "子系统菜单按钮查询",
            "simulateUrl": "/mock-data/getMenu.json"
        },
        "queryDeptHead": {
            "url": "/hlms/api/tenant/department/getDeptUsers",
            "simulate": false,
            "method": "get",
            "httpUrlType": "applicationHttpUrl",
            "description": "获取部门负责人",
            "simulateUrl": "/mock-data/queryDeptHead.json"
        },
        "getLocationSpecial": {
            "url": "/hlms/api/tenant/hlmsloc/locInfo_tree",
            "simulate": false,
            "method": "get",
            "httpUrlType": "applicationHttpUrl",
            "description": "获取空间树（特殊）",
            "simulateUrl": ""
        },
        "getOrderPage": {
            "url": "/hlms/api/clean/pc/order/page",
            "simulate": false,
            "method": "post",
            "httpUrlType": "applicationHttpUrl",
            "description": "应急保洁列表分页查询接口",
            "simulateUrl": "/mock-data/getOrderPage.json"
        },
        "getStatus_list": {
            "url": "/hlms/api/clean/pc/status_list",
            "simulate": false,
            "method": "get",
            "httpUrlType": "applicationHttpUrl",
            "description": "应急保洁列表分页查询接口",
            "simulateUrl": "/mock-data/getStatus_list.json"
        },
        "getOrder_info": {
            "url": "/hlms/api/clean/pc/order/order_info",
            "simulate": false,
            "method": "get",
            "httpUrlType": "applicationHttpUrl",
            "description": "应急保洁列表分页查询接口",
            "simulateUrl": "/mock-data/getOrder_info.json"
        },
        "getNodelist": {
            "url": "/hlms/api/clean/pc/order/nodelist",
            "simulate": false,
            "method": "get",
            "httpUrlType": "applicationHttpUrl",
            "description": "应急保洁列表分页查询接口",
            "simulateUrl": "/mock-data/getNodelist.json"
        },
        "getComplain_status_list": {
            "url": "/hlms/api/clean/pc/complain_status_list",
            "simulate": false,
            "method": "get",
            "httpUrlType": "applicationHttpUrl",
            "description": "应急保洁列表分页查询接口",
            "simulateUrl": "/mock-data/getComplain_status_list.json"
        },
        "getComplainpage": {
            "url": "/hlms/api/clean/pc/complain/page",
            "simulate": false,
            "method": "post",
            "httpUrlType": "applicationHttpUrl",
            "description": "应急保洁列表分页查询接口",
            "simulateUrl": "/mock-data/getComplainpage.json"
        },
        "getComplain_info": {
            "url": "/hlms/api/clean/pc/complain_info",
            "simulate": false,
            "method": "get",
            "httpUrlType": "applicationHttpUrl",
            "description": "应急保洁列表分页查询接口",
            "simulateUrl": "/mock-data/getComplain_info.json"
        },
        "nowHospital": {
            "url": "/hlms/api/tenant/user/used",
            "simulate": false,
            "method": "post",
            "httpUrlType": "applicationHttpUrl",
            "description": "传给后端当前选择的院区",
            "simulateUrl": "/mock-data/nowHospital.json"
        },
        "getDepartmentTree": {
            "url": "/hlms/api/onecall/third/tenant/getDepartmentTree",
            "simulate": false,
            "method": "get",
            "httpUrlType": "applicationHttpUrl",
            "description": "根据租户ID获取部门树",
            "simulateUrl": "./../../mock-data/getDepartmentTree.json"
        },
        "getCleanLocation": {
            "url": "/hlms/api/onecall/order/clean/location",
            "simulate": false,
            "method": "get",
            "httpUrlType": "applicationHttpUrl",
            "description": "获取保洁位置",
            "simulateUrl": "/mock-data/getCleanLocation.json"
        },
        "getlocinfotree": {
            "url": "/hlms/api/tenant/hlmsloc/loctreewithcodenotempty/",
            "simulate": false,
            "method": "getUrl",
            "httpUrlType": "applicationHttpUrl",
            "description": "根据租户ID获取报修空间树（修改）",
            "simulateUrl": "./../../mock-data/getRepairDepartmentTree.json"
        },
        "getCleanTypes": {
            "url": "/hlms/api/onecall/order/clean/types",
            "simulate": false,
            "method": "get",
            "httpUrlType": "applicationHttpUrl",
            "description": "获取保洁类型",
            "simulateUrl": "/mock-data/getCleanTypes.json"
        },
        "getComplain_label_list": {
            "url": "/hlms/api/clean/pc/complain_label_list",
            "simulate": false,
            "method": "get",
            "httpUrlType": "applicationHttpUrl",
            "description": "获取保洁类型",
            "simulateUrl": "/mock-data/getComplain_label_list.json"
        },
        "getPerson_status_list": {
            "url": "/hlms/api/clean/pc/person/person_status_list",
            "simulate": false,
            "method": "get",
            "httpUrlType": "applicationHttpUrl",
            "description": "人员考勤进度列表查询接口",
            "simulateUrl": "/mock-data/getPerson_status_list.json"
        },
        "getStatistics": {
            "url": "/hlms/api/clean/pc/person/statistics",
            "simulate": false,
            "method": "post",
            "httpUrlType": "applicationHttpUrl",
            "description": "人员考勤统计数据查询接口",
            "simulateUrl": "/mock-data/getStatistics.json"
        },
        "getPersonPage": {
            "url": "/hlms/api/clean/pc/person/page",
            "simulate": false,
            "method": "post",
            "httpUrlType": "applicationHttpUrl",
            "description": "人员考勤统计数据查询接口",
            "simulateUrl": "/mock-data/getPersonPage.json"
        },
        "getUsersByCodes": {
            "url": "/hlms/api/rbac/role/usersByCodes",
            "simulate": false,
            "method": "get",
            "httpUrlType": "applicationHttpUrl",
            "description": "用户查询接口(角色code)",
            "simulateUrl": "/mock-data/getUsersByCodes.json"
        },
        "getAttendence_statistics": {
            "url": "/hlms/api/clean/pc/person/attendence_statistics",
            "simulate": false,
            "method": "post",
            "httpUrlType": "applicationHttpUrl",
            "description": "用户查询接口(角色code)",
            "simulateUrl": "/mock-data/getAttendence_statistics.json"
        },
        "getComplain_brief_info": {
            "url": "/hlms/api/clean/pc/complain/complain_brief_info",
            "simulate": false,
            "method": "post",
            "httpUrlType": "applicationHttpUrl",
            "description": "用户查询接口(角色code)",
            "simulateUrl": "/mock-data/getComplain_brief_info.json"
        },
        "getOrder_statistics_records": {
            "url": "/hlms/api/clean/pc/order/order_statistics_records",
            "simulate": false,
            "method": "post",
            "httpUrlType": "applicationHttpUrl",
            "description": "用户查询接口(角色code)",
            "simulateUrl": "/mock-data/getOrder_statistics_records.json"
        },
        "getManager_check": {
            "url": "/hlms/api/clean/pc/complain/manager_complain_list",
            "simulate": false,
            "method": "post",
            "httpUrlType": "applicationHttpUrl",
            "description": "用户查询接口(角色code)",
            "simulateUrl": "/mock-data/getManager_check.json"
        },
        "getSpecial_statistics_records": {
            "url": "/hlms/api/clean/pc/order/special_statistics_records",
            "simulate": false,
            "method": "post",
            "httpUrlType": "applicationHttpUrl",
            "description": "用户查询接口(角色code)",
            "simulateUrl": "/mock-data/getSpecial_statistics_records.json"
        },
        "getComplain_info_list": {
            "url": "/hlms/api/clean/pc/complain/complain_info_list",
            "simulate": false,
            "method": "post",
            "httpUrlType": "applicationHttpUrl",
            "description": "用户查询接口(角色code)",
            "simulateUrl": "/mock-data/getComplain_info_list.json"
        },
        "getAttendence_rate": {
            "url": "/hlms/api/clean/pc/person/attendence_rate",
            "simulate": false,
            "method": "post",
            "httpUrlType": "applicationHttpUrl",
            "description": "用户查询接口(角色code)",
            "simulateUrl": "/mock-data/getAttendence_rate.json"
        },
        "getKind_list": {
            "url": "/hlms/api/clean/pc/order/kind_list",
            "simulate": false,
            "method": "get",
            "httpUrlType": "applicationHttpUrl",
            "description": "用户查询接口(角色code)",
            "simulateUrl": "/mock-data/getKind_list.json"
        },
        "getSpecial_status_list": {
            "url": "/hlms/api/clean/special/special_status_list/",
            "simulate": false,
            "method": "getUrl",
            "httpUrlType": "applicationHttpUrl",
            "description": "查询工单状态",
            "simulateUrl": "/mock-data/getKind_list.json"
        },
    }
}
