<template>
  <!-- <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>

  <el-row class="mb-4">
    <el-button plain>Plain</el-button>
    <el-button type="primary" plain>Primary</el-button>
    <el-button type="success" plain>Success</el-button>
    <el-button type="info" plain>Info</el-button>
    <el-button type="warning" plain>Warning</el-button>
    <el-button type="danger" plain>Danger</el-button>
  </el-row>

  <el-row class="mb-4">
    <el-button round>Round</el-button>
    <el-button type="primary" round>Primary</el-button>
    <el-button type="success" round>Success</el-button>
    <el-button type="info" round>Info</el-button>
    <el-button type="warning" round>Warning</el-button>
    <el-button type="danger" round>Danger</el-button>
  </el-row>

  <el-row>
    <el-button :icon="Search" circle />
    <el-button type="primary" :icon="Edit" circle />
    <el-button type="success" :icon="Check" circle />
    <el-button type="info" :icon="Message" circle />
    <el-button type="warning" :icon="Star" circle />
    <el-button type="danger" :icon="Delete" circle />
  </el-row> -->
  <div class="gis-viewer-content">
    <GisViewer ref="gisViewerRef" />
  </div>
</template>

<script setup name="show">
import GisViewer from "@/components/GisViewer/index";

const res = {
  code: 200,
  message: "获取资源信息成功",
  dataType: "LIST",
  respBody: {
    routes: [
      {
        综合态势: [
          {
            path: "/situationsubsystem",
            name: "综合态势",
            component: "/situationsubsystem/views/home.vue",
            meta: {
              title: "综合态势",
              icon: "",
              breadcrumb: true,
              iconType: 0,
            },
            hidden: false,
            alwaysShow: false,
          },
          {
            path: "/situationsubsystem",
            name: "卫星状态",
            component: "/situationsubsystem/views/satStatus/satStatus.vue",
            meta: {
              title: "卫星状态",
              icon: "",
              breadcrumb: true,
              iconType: 0,
            },
            hidden: false,
            alwaysShow: false,
          },
          {
            path: "/situationsubsystem",
            name: "设备状态",
            component: "/situationsubsystem/views/satStatus/satStatus.vue",
            meta: {
              title: "设备状态",
              icon: "",
              breadcrumb: true,
              iconType: 0,
            },
            hidden: false,
            alwaysShow: false,
          },
          {
            path: "/situationsubsystem",
            name: "健康状态",
            component: "/situationsubsystem/views/health/healthInfo/index.vue",
            meta: {
              title: "健康状态",
              icon: "",
              breadcrumb: true,
              iconType: 0,
            },
            hidden: false,
            alwaysShow: false,
          },
        ],
      },
      {
        构型保持: [
          {
            path: "orbitcalsubsystem/ascendingNode",
            name: "升交点预报",
            component: "Layout3",
            meta: {
              title: "升交点预报",
              icon: "rwgufxt_rwgu",
              breadcrumb: true,
              iconType: 1,
            },
            hidden: false,
            alwaysShow: false,
          },
          {
            path: "orbitcalsubsystem/ephemeris",
            name: "星历预报",
            component: "Layout3",
            meta: {
              title: "星历预报",
              icon: "rwgufxt_rwgu",
              breadcrumb: true,
              iconType: 1,
            },
            hidden: false,
            alwaysShow: false,
          },
          {
            path: "orbitcalsubsystem/gatewayStation",
            name: "信关站预报",
            component: "Layout3",
            meta: {
              title: "信关站预报",
              icon: "rwgufxt_rwgu",
              breadcrumb: true,
              iconType: 1,
            },
            hidden: false,
            alwaysShow: false,
          },
          {
            path: "orbitcalsubsystem/satellitePoint",
            name: "星下点预报",
            component: "Layout3",
            meta: {
              title: "星下点预报",
              icon: "rwgufxt_rwgu",
              breadcrumb: true,
              iconType: 1,
            },
            hidden: false,
            alwaysShow: false,
          },
          {
            path: "orbitcalsubsystem/shadow",
            name: "地影预报",
            component: "Layout3",
            meta: {
              title: "地影预报",
              icon: "rwgufxt_rwgu",
              breadcrumb: true,
              iconType: 1,
            },
            hidden: false,
            alwaysShow: false,
          },
          {
            path: "orbitcalsubsystem/computeForecast",
            name: "轨道服务计算",
            component: "Layout3",
            meta: {
              title: "轨道服务计算",
              icon: "rwgufxt_rwgu",
              breadcrumb: true,
              iconType: 1,
            },
            hidden: false,
            alwaysShow: false,
          },
        ],
      },
      {
        健康管理: [
          {
            path: "/healthSubsystem/healthStatusMonitor/historyAlarms",
            name: "健康状态监视",
            component: "Layout",
            meta: {
              title: "健康状态监视",
              icon: "el-icon-data-board",
              breadcrumb: true,
              iconType: 0,
            },
            hidden: false,
            alwaysShow: true,
            children: [
              {
                path: "/healthSubsystem/healthStatusMonitor/currentAlarms",
                name: "当前告警",
                component:
                  "healthSubsystem/healthStatusMonitor/currentAlarms/index",
                meta: {
                  title: "当前告警",
                  icon: "",
                  breadcrumb: true,
                  iconType: 0,
                },
                hidden: false,
                alwaysShow: false,
              },
              {
                path: "/healthSubsystem/healthStatusMonitor/historyAlarms",
                name: "历史告警",
                component:
                  "healthSubsystem/healthStatusMonitor/historyAlarms/index",
                meta: {
                  title: "历史告警",
                  icon: "",
                  breadcrumb: true,
                  iconType: 0,
                },
                hidden: false,
                alwaysShow: false,
              },
            ],
          },
          {
            path: "/healthSubsystem/faultDiagnosis",
            name: "故障诊断与处置",
            component: "Layout",
            meta: {
              title: "故障诊断与处置",
              icon: "el-icon-first-aid-kit",
              breadcrumb: true,
              iconType: 0,
            },
            hidden: false,
            alwaysShow: true,
            children: [
              {
                path: "/healthSubsystem/faultDiagnosis/diagnosticRules",
                name: "诊断规则图形化录入",
                component:
                  "healthSubsystem/faultDiagnosis/diagnosticRules/index",
                meta: {
                  title: "诊断规则图形化录入",
                  icon: "",
                  breadcrumb: true,
                  iconType: 0,
                },
                hidden: false,
                alwaysShow: false,
              },
              {
                path: "/healthSubsystem/faultDiagnosis/knowledgeRasoning",
                name: "规则知识推理",
                component:
                  "healthSubsystem/faultDiagnosis/knowledgeRasoning/index",
                meta: {
                  title: "规则知识推理",
                  icon: "",
                  breadcrumb: true,
                  iconType: 0,
                },
                hidden: false,
                alwaysShow: false,
              },
              {
                path: "/healthSubsystem/faultDiagnosis/diagnosticResults",
                name: "诊断结果显示",
                component:
                  "healthSubsystem/faultDiagnosis/diagnosticResults/index",
                meta: {
                  title: "诊断结果显示",
                  icon: "",
                  breadcrumb: true,
                  iconType: 0,
                },
                hidden: false,
                alwaysShow: false,
              },
            ],
          },
        ],
      },
      {
        卫星管理: [
          {
            path: "/satelliteSubsystem/dashboard",
            name: "数据交互",
            component: "Layout",
            meta: {
              title: "数据交互",
              icon: "el-icon-document-copy",
              breadcrumb: true,
              iconType: 0,
            },
            hidden: false,
            alwaysShow: true,
            children: [
              {
                path: "/satelliteSubsystem/dataexchange/dataMonitor",
                name: "数据监视",
                component: "satelliteSubsystem/dataexchange/dataMonitor/index",
                meta: {
                  title: "数据监视",
                  icon: "",
                  breadcrumb: true,
                  iconType: 0,
                },
                hidden: false,
                alwaysShow: false,
              },
              {
                path: "/satelliteSubsystem/dataexchange/dataTracking",
                name: "遥测遥控过程追踪",
                component: "satelliteSubsystem/dataexchange/dataTracking/index",
                meta: {
                  title: "遥测遥控过程追踪",
                  icon: "",
                  breadcrumb: true,
                  iconType: 0,
                },
                hidden: false,
                alwaysShow: false,
              },
              {
                path: "/satelliteSubsystem/dataexchange/fileManage",
                name: "文件传输",
                component: "satelliteSubsystem/dataexchange/fileManage/index",
                meta: {
                  title: "文件传输",
                  icon: "",
                  breadcrumb: true,
                  iconType: 0,
                },
                hidden: false,
                alwaysShow: false,
              },
            ],
          },
          {
            path: "/satelliteSubsystem/planmangement",
            name: "计划",
            component: "Layout",
            meta: {
              title: "计划",
              icon: "el-icon-edit-outline",
              breadcrumb: true,
              iconType: 0,
            },
            hidden: false,
            alwaysShow: true,
            children: [
              {
                path: "/satelliteSubsystem/planmangement/planQuery",
                name: "计划查询",
                component: "satelliteSubsystem/planmangement/planQuery/index",
                meta: {
                  title: "计划查询",
                  icon: "",
                  breadcrumb: true,
                  iconType: 0,
                },
                hidden: false,
                alwaysShow: false,
              },
              {
                path: "/satelliteSubsystem/planmangement/taskManage",
                name: "任务管理",
                component: "satelliteSubsystem/planmangement/taskManage/index",
                meta: {
                  title: "任务管理",
                  icon: "",
                  breadcrumb: true,
                  iconType: 0,
                },
                hidden: false,
                alwaysShow: false,
              },
              {
                path: "/satelliteSubsystem/planmangement/scheduleLog",
                name: "调度日志",
                component: "satelliteSubsystem/planmangement/scheduleLog/index",
                meta: {
                  title: "调度日志",
                  icon: "",
                  breadcrumb: true,
                  iconType: 0,
                },
                hidden: false,
                alwaysShow: false,
              },
            ],
          },
          {
            path: "/satellitesystem/telecontrol",
            name: "遥控",
            component: "Layout",
            meta: {
              title: "遥控",
              icon: "el-icon-setting",
              breadcrumb: true,
              iconType: 0,
            },
            hidden: false,
            alwaysShow: true,
            children: [
              {
                path: "/satelliteSubsystem/telecontrol/injectProcess",
                name: "注入加工",
                component: "satelliteSubsystem/telecontrol/injectProcess/index",
                meta: {
                  title: "注入加工",
                  icon: "",
                  breadcrumb: true,
                  iconType: 0,
                },
                hidden: false,
                alwaysShow: false,
              },
              {
                path: "/satelliteSubsystem/telecontrol/telecontrolOrder",
                name: "遥控发令",
                component:
                  "satelliteSubsystem/telecontrol/telecontrolOrder/index",
                meta: {
                  title: "遥控发令",
                  icon: "",
                  breadcrumb: true,
                  iconType: 0,
                },
                hidden: false,
                alwaysShow: false,
              },
              {
                path: "/satelliteSubsystem/telecontrol/telecontrolMonitor",
                name: "发令情况监视",
                component:
                  "satelliteSubsystem/telecontrol/telecontrolMonitor/index",
                meta: {
                  title: "发令情况监视",
                  icon: "",
                  breadcrumb: true,
                  iconType: 0,
                },
                hidden: false,
                alwaysShow: false,
              },
            ],
          },
          {
            path: "/satelliteSubsystem/telemetry",
            name: "遥测",
            component: "Layout",
            meta: {
              title: "遥测",
              icon: "el-icon-position",
              breadcrumb: true,
              iconType: 0,
            },
            hidden: false,
            alwaysShow: true,
            children: [
              {
                path: "/satelliteSubsystem/telemetry/telemetryCustom",
                name: "遥测定制",
                component: "satelliteSubsystem/telemetry/telemetryCustom/index",
                meta: {
                  title: "遥测定制",
                  icon: "",
                  breadcrumb: true,
                  iconType: 0,
                },
                hidden: false,
                alwaysShow: false,
              },
              {
                path: "/satelliteSubsystem/telemetry/telemetryResult",
                name: "遥测显示",
                component: "satelliteSubsystem/telemetry/telemetryResult/index",
                meta: {
                  title: "遥测显示",
                  icon: "",
                  breadcrumb: true,
                  iconType: 0,
                },
                hidden: false,
                alwaysShow: false,
              },
              {
                path: "/satelliteSubsystem/telemetry/sourceCode",
                name: "源码显示",
                component: "satelliteSubsystem/telemetry/sourceCode/index",
                meta: {
                  title: "源码显示",
                  icon: "",
                  breadcrumb: true,
                  iconType: 0,
                },
                hidden: false,
                alwaysShow: false,
              },
              {
                path: "/satelliteSubsystem/telemetry/resultQuery",
                name: "遥测结果查询",
                component: "satelliteSubsystem/telemetry/resultQuery/index",
                meta: {
                  title: "遥测结果查询",
                  icon: "",
                  breadcrumb: true,
                  iconType: 0,
                },
                hidden: false,
                alwaysShow: false,
              },
            ],
          },
          {
            path: "/satelliteSubsystem/oribit",
            name: "轨道",
            component: "Layout",
            meta: {
              title: "轨道",
              icon: "el-icon-guide",
              breadcrumb: true,
              iconType: 0,
            },
            hidden: false,
            alwaysShow: true,
            children: [
              {
                path: "/satelliteSubsystem/oribit/instantaneous",
                name: "瞬时根数",
                component: "satelliteSubsystem/oribit/instantaneous/index",
                meta: {
                  title: "瞬时根数",
                  icon: "",
                  breadcrumb: true,
                  iconType: 0,
                },
                hidden: false,
                alwaysShow: false,
              },
              {
                path: "/satelliteSubsystem/oribit/twolineTle",
                name: "两行根数",
                component: "satelliteSubsystem/oribit/twolineTle/index",
                meta: {
                  title: "两行根数",
                  icon: "",
                  breadcrumb: true,
                  iconType: 0,
                },
                hidden: false,
                alwaysShow: false,
              },
            ],
          },
          {
            path: "satelliteSubsystem/datatransfile",
            name: "数传",
            component: "Layout3",
            meta: {
              title: "数传",
              icon: "ykfxt_ykpz",
              breadcrumb: true,
              iconType: 1,
            },
            hidden: false,
            alwaysShow: false,
          },
        ],
      },
      {
        资源调度: [
          {
            path: "resourcesubsystem/planManage/demandManage",
            name: "需求管理",
            component: "Layout",
            meta: {
              title: "需求管理",
              icon: "rwgufxt_xqgl",
              breadcrumb: true,
              iconType: 1,
            },
            hidden: false,
            alwaysShow: true,
            children: [
              {
                path: "/resourcesubsystem/planManage/eventManage",
                name: "事件管理",
                component: "resourcesubsystem/planManage/eventManage/index",
                meta: {
                  title: "事件管理",
                  icon: "",
                  breadcrumb: true,
                  iconType: 0,
                },
                hidden: false,
                alwaysShow: false,
              },
              {
                path: "/resourcesubsystem/planManage/demandManage",
                name: "需求管理",
                component: "resourcesubsystem/planManage/demandManage/index",
                meta: {
                  title: "需求管理",
                  icon: "rwgufxt_rwgu",
                  breadcrumb: true,
                  iconType: 0,
                },
                hidden: false,
                alwaysShow: false,
              },
            ],
          },
          {
            path: "/resourcesubsystem/missionPlan/modeManage",
            name: "计划编排",
            component: "Layout",
            meta: {
              title: "计划编排",
              icon: "rwgufxt_rwgu",
              breadcrumb: true,
              iconType: 1,
            },
            hidden: false,
            alwaysShow: true,
            children: [
              {
                path: "/resourcesubsystem/missionPlan/inbound",
                name: "过境信息",
                component: "resourcesubsystem/missionPlan/inbound/index",
                meta: {
                  title: "过境信息",
                  icon: "",
                  breadcrumb: true,
                  iconType: 0,
                },
                hidden: false,
                alwaysShow: false,
              },
              {
                path: "/resourcesubsystem/missionPlan/planGeneration",
                name: "计划生成",
                component: "resourcesubsystem/missionPlan/planGeneration/index",
                meta: {
                  title: "计划生成",
                  icon: "",
                  breadcrumb: true,
                  iconType: 0,
                },
                hidden: false,
                alwaysShow: false,
              },
              {
                path: "/resourcesubsystem/missionPlan/modeManage",
                name: "模版管理",
                component: "resourcesubsystem/missionPlan/modeManage/index",
                meta: {
                  title: "模版管理",
                  icon: "",
                  breadcrumb: true,
                  iconType: 0,
                },
                hidden: false,
                alwaysShow: false,
              },
              {
                path: "/resourcesubsystem/missionPlan/planConfirm",
                name: "跟踪计划确认",
                component: "resourcesubsystem/missionPlan/planConfirm/index",
                meta: {
                  title: "跟踪计划确认",
                  icon: "",
                  breadcrumb: true,
                  iconType: 0,
                },
                hidden: false,
                alwaysShow: false,
              },
              {
                path: "/resourcesubsystem/missionPlan/taskPlan",
                name: "载荷任务规划",
                component: "resourcesubsystem/missionPlan/taskPlan/index",
                meta: {
                  title: "载荷任务规划",
                  icon: "",
                  breadcrumb: true,
                  iconType: 0,
                },
                hidden: false,
                alwaysShow: false,
              },
            ],
          },
          {
            path: "/resourcesubsystem/schedulePlan/taskManage",
            name: "调度计划",
            component: "Layout",
            meta: {
              title: "调度计划",
              icon: "rwgufxt_ddjh",
              breadcrumb: true,
              iconType: 1,
            },
            hidden: false,
            alwaysShow: true,
            children: [
              {
                path: "/resourcesubsystem/schedulePlan/taskManage",
                name: "任务管理",
                component: "resourcesubsystem/schedulePlan/taskManage/index",
                meta: {
                  title: "任务管理",
                  icon: "",
                  breadcrumb: true,
                  iconType: 0,
                },
                hidden: false,
                alwaysShow: false,
              },
              {
                path: "/resourcesubsystem/schedulePlan/scheduleLog",
                name: "调度日志",
                component: "resourcesubsystem/schedulePlan/scheduleLog/index",
                meta: {
                  title: "调度日志",
                  icon: "",
                  breadcrumb: true,
                  iconType: 0,
                },
                hidden: false,
                alwaysShow: false,
              },
              {
                path: "/resourcesubsystem/schedulePlan/actuatorManage",
                name: "执行器管理",
                component:
                  "resourcesubsystem/schedulePlan/actuatorManage/index",
                meta: {
                  title: "执行器管理",
                  icon: "",
                  breadcrumb: true,
                  iconType: 0,
                },
                hidden: false,
                alwaysShow: false,
              },
            ],
          },
          {
            path: "resourcesubsystem/taskStatus",
            name: "任务链接状态",
            component: "Layout3",
            meta: {
              title: "任务链接状态",
              icon: "el-icon-connection",
              breadcrumb: true,
              iconType: 0,
            },
            hidden: false,
            alwaysShow: false,
          },
        ],
      },
      {
        驾驶舱: [],
      },
      {
        设备信息: [
          {
            path: "equipmentsubsystem/equipment",
            name: "设备信息",
            component: "Layout3",
            meta: {
              title: "设备信息",
              icon: "rwgufxt_rwgu",
              breadcrumb: true,
              iconType: 1,
            },
            hidden: false,
            alwaysShow: false,
          },
          {
            path: "equipmentsubsystem/parameter",
            name: "设备监视",
            component: "Layout3",
            meta: {
              title: "设备监视",
              icon: "rwgufxt_rwgu",
              breadcrumb: true,
              iconType: 1,
            },
            hidden: false,
            alwaysShow: false,
          },
          {
            path: "equipmentsubsystem/planquery",
            name: "设备计划",
            component: "Layout3",
            meta: {
              title: "设备计划",
              icon: "rwgufxt_rwgu",
              breadcrumb: true,
              iconType: 1,
            },
            hidden: false,
            alwaysShow: false,
          },
          {
            path: "equipmentsubsystem/paramterControl",
            name: "参数控制",
            component: "Layout3",
            meta: {
              title: "参数控制",
              icon: "el-icon-setting",
              breadcrumb: true,
              iconType: 0,
            },
            hidden: false,
            alwaysShow: false,
          },
        ],
      },
      {
        配置管理: [
          {
            path: "/configSubsystem/system/center",
            name: "权限管理",
            component: "Layout",
            meta: {
              title: "权限管理",
              icon: "el-icon-set-up",
              breadcrumb: true,
              iconType: 0,
            },
            hidden: false,
            alwaysShow: true,
            children: [
              {
                path: "/configSubsystem/system/center",
                name: "中心管理",
                component: "configSubsystem/system/center/Index",
                meta: {
                  title: "中心管理",
                  icon: "",
                  breadcrumb: true,
                  iconType: 0,
                },
                hidden: false,
                alwaysShow: false,
              },
              {
                path: "/configSubsystem/system/dept",
                name: "用户组管理",
                component: "configSubsystem/system/dept/Index",
                meta: {
                  title: "用户组管理",
                  icon: "",
                  breadcrumb: true,
                  iconType: 0,
                },
                hidden: false,
                alwaysShow: false,
              },
              {
                path: "/configSubsystem/system/user",
                name: "用户管理",
                component: "configSubsystem/system/user/Index",
                meta: {
                  title: "用户管理",
                  icon: "",
                  breadcrumb: true,
                  iconType: 0,
                },
                hidden: false,
                alwaysShow: false,
              },
              {
                path: "/configSubsystem/system/menu",
                name: "菜单管理",
                component: "configSubsystem/system/menu/Index",
                meta: {
                  title: "菜单管理",
                  icon: "",
                  breadcrumb: true,
                  iconType: 0,
                },
                hidden: false,
                alwaysShow: false,
              },
              {
                path: "/configSubsystem/system/role",
                name: "角色管理",
                component: "configSubsystem/system/role/Index",
                meta: {
                  title: "角色管理",
                  icon: "",
                  breadcrumb: true,
                  iconType: 0,
                },
                hidden: false,
                alwaysShow: false,
              },
              {
                path: "/configSubsystem/system/resource",
                name: "资源管理",
                component: "configSubsystem/system/resource/Index",
                meta: {
                  title: "资源管理",
                  icon: "",
                  breadcrumb: true,
                  iconType: 0,
                },
                hidden: false,
                alwaysShow: false,
              },
              {
                path: "/configSubsystem/client",
                name: "客户端管理",
                component: "configSubsystem/system/client/Index",
                meta: {
                  title: "客户端管理",
                  icon: "",
                  breadcrumb: true,
                  iconType: 0,
                },
                hidden: false,
                alwaysShow: false,
              },
            ],
          },
          {
            path: "/configSubsystem/satellite",
            name: "卫星配置",
            component: "Layout",
            meta: {
              title: "卫星配置",
              icon: "el-icon-setting",
              breadcrumb: true,
              iconType: 0,
            },
            hidden: false,
            alwaysShow: true,
            children: [
              {
                path: "/configSubsystem/satellite",
                name: "基础配置",
                component: "configSubsystem/satellite/index",
                meta: {
                  title: "基础配置",
                  icon: "",
                  breadcrumb: true,
                  iconType: 0,
                },
                hidden: false,
                alwaysShow: false,
              },
              {
                path: "/configSubsystem/satellite/taskParamsConfig",
                name: "任务参数配置",
                component: "configSubsystem/satellite/taskParamsConfig/index",
                meta: {
                  title: "任务参数配置",
                  icon: "",
                  breadcrumb: true,
                  iconType: 0,
                },
                hidden: false,
                alwaysShow: false,
              },
              {
                path: "/configSubsystem/satellite/advancedConfig",
                name: "遥测高级配置",
                component: "configSubsystem/satellite/advancedConfig/index",
                meta: {
                  title: "遥测高级配置",
                  icon: "",
                  breadcrumb: true,
                  iconType: 0,
                },
                hidden: false,
                alwaysShow: true,
                children: [
                  {
                    path: "/configSubsystem/satellite/advancedConfig/statusConfig",
                    name: "状态管理",
                    component:
                      "configSubsystem/satellite/advancedConfig/statusConfig/index",
                    meta: {
                      title: "状态管理",
                      icon: "",
                      breadcrumb: true,
                      iconType: 0,
                    },
                    hidden: false,
                    alwaysShow: false,
                  },
                  {
                    path: "/configSubsystem/satellite/advancedConfig/templateConfig",
                    name: "模板管理",
                    component:
                      "configSubsystem/satellite/advancedConfig/templateConfig/index",
                    meta: {
                      title: "模板管理",
                      icon: "",
                      breadcrumb: true,
                      iconType: 0,
                    },
                    hidden: false,
                    alwaysShow: false,
                  },
                  {
                    path: "/configSubsystem/satellite/advancedConfig/telemetryPlayBack",
                    name: "遥测回放",
                    component:
                      "configSubsystem/satellite/advancedConfig/telemetryPlayBack/index",
                    meta: {
                      title: "遥测回放",
                      icon: "",
                      breadcrumb: true,
                      iconType: 0,
                    },
                    hidden: false,
                    alwaysShow: false,
                  },
                ],
              },
            ],
          },
          {
            path: "/configSubsystem/monitor",
            name: "日志管理",
            component: "Layout",
            meta: {
              title: "日志管理",
              icon: "el-icon-data-line",
              breadcrumb: true,
              iconType: 0,
            },
            hidden: false,
            alwaysShow: true,
            children: [
              {
                path: "/configSubsystem/system/systemlog",
                name: "系统日志",
                component: "configSubsystem/system/systemlog/Index",
                meta: {
                  title: "系统日志",
                  icon: "",
                  breadcrumb: true,
                  iconType: 0,
                },
                hidden: false,
                alwaysShow: false,
              },
              {
                path: "/configSubsystem/system/loginlog",
                name: "登录日志",
                component: "configSubsystem/system/loginlog/Index",
                meta: {
                  title: "登录日志",
                  icon: "",
                  breadcrumb: true,
                  iconType: 0,
                },
                hidden: false,
                alwaysShow: false,
              },
              {
                path: "/configSubsystem/system/operatelog",
                name: "操作日志",
                component: "configSubsystem/system/operatelog/index",
                meta: {
                  title: "操作日志",
                  icon: "",
                  breadcrumb: true,
                  iconType: 0,
                },
                hidden: false,
                alwaysShow: false,
              },
              {
                path: "/configSubsystem/system/jobLog",
                name: "调度日志",
                component: "configSubsystem/system/jobLog/index",
                meta: {
                  title: "调度日志",
                  icon: "",
                  breadcrumb: true,
                  iconType: 0,
                },
                hidden: false,
                alwaysShow: false,
              },
            ],
          },
        ],
      },
      {
        模拟仿真: [
          {
            path: "simulationsubsystem/consteSimulate/trackSimulate",
            name: "星座仿真",
            component: "Layout",
            meta: {
              title: "星座仿真",
              icon: "mnfzfxt_xzfz",
              breadcrumb: true,
              iconType: 1,
            },
            hidden: false,
            alwaysShow: true,
            children: [
              {
                path: "/simulationsubsystem/consteSimulate/trackSimulate",
                name: "轨道仿真",
                component:
                  "simulationsubsystem/consteSimulate/trackSimulate/index",
                meta: {
                  title: "轨道仿真",
                  icon: "",
                  breadcrumb: true,
                  iconType: 0,
                },
                hidden: false,
                alwaysShow: false,
              },
              {
                path: "/simulationsubsystem/consteSimulate/satelliteConfig",
                name: "卫星管理",
                component:
                  "simulationsubsystem/consteSimulate/satelliteConfig/index",
                meta: {
                  title: "卫星管理",
                  icon: "",
                  breadcrumb: true,
                  iconType: 0,
                },
                hidden: false,
                alwaysShow: false,
              },
              {
                path: "/simulationsubsystem/consteSimulate/faultlibraryConfig",
                name: "卫星故障库管理",
                component:
                  "simulationsubsystem/consteSimulate/faultlibraryConfig/index",
                meta: {
                  title: "卫星故障库管理",
                  icon: "",
                  breadcrumb: true,
                  iconType: 0,
                },
                hidden: false,
                alwaysShow: false,
              },
              {
                path: "/simulationsubsystem/consteSimulate/faultConfig",
                name: "卫星故障仿真",
                component:
                  "simulationsubsystem/consteSimulate/faultConfig/index",
                meta: {
                  title: "卫星故障仿真",
                  icon: "",
                  breadcrumb: true,
                  iconType: 0,
                },
                hidden: false,
                alwaysShow: false,
              },
              {
                path: "/simulationsubsystem/consteSimulate/algorithmConfig",
                name: "卫星公式管理",
                component:
                  "simulationsubsystem/consteSimulate/algorithmConfig/index",
                meta: {
                  title: "卫星公式管理",
                  icon: "",
                  breadcrumb: true,
                  iconType: 0,
                },
                hidden: false,
                alwaysShow: false,
              },
              {
                path: "/simulationsubsystem/consteSimulate/constellationFaultConfig",
                name: "星座故障仿真",
                component:
                  "simulationsubsystem/consteSimulate/constellationFaultConfig/index",
                meta: {
                  title: "星座故障仿真",
                  icon: "",
                  breadcrumb: true,
                  iconType: 0,
                },
                hidden: false,
                alwaysShow: false,
              },
              {
                path: "/simulationsubsystem/consteSimulate/fileManage",
                name: "文件管理",
                component:
                  "simulationsubsystem/consteSimulate/fileManage/index",
                meta: {
                  title: "文件管理",
                  icon: "",
                  breadcrumb: true,
                  iconType: 0,
                },
                hidden: false,
                alwaysShow: false,
              },
            ],
          },
          {
            path: "simulationsubsystem/stationSimulate/equipConfig",
            name: "站网资源仿真",
            component: "Layout",
            meta: {
              title: "站网资源仿真",
              icon: "mnfzfxt_zwzyfz",
              breadcrumb: true,
              iconType: 1,
            },
            hidden: false,
            alwaysShow: true,
            children: [
              {
                path: "/simulationsubsystem/stationSimulate/stationManage",
                name: "站点管理",
                component:
                  "simulationsubsystem/stationSimulate/stationManage/index",
                meta: {
                  title: "站点管理",
                  icon: "",
                  breadcrumb: true,
                  iconType: 0,
                },
                hidden: false,
                alwaysShow: false,
              },
              {
                path: "/simulationsubsystem/stationSimulate/equipConfig",
                name: "设备管理",
                component:
                  "simulationsubsystem/stationSimulate/equipConfig/index",
                meta: {
                  title: "设备管理",
                  icon: "",
                  breadcrumb: true,
                  iconType: 0,
                },
                hidden: false,
                alwaysShow: false,
              },
              {
                path: "/simulationsubsystem/stationSimulate/faultlibraryConfig",
                name: "设备故障库管理",
                component:
                  "simulationsubsystem/stationSimulate/faultlibraryConfig/index",
                meta: {
                  title: "设备故障库管理",
                  icon: "",
                  breadcrumb: true,
                  iconType: 0,
                },
                hidden: false,
                alwaysShow: false,
              },
              {
                path: "/simulationsubsystem/stationSimulate/faultConfig",
                name: "设备故障仿真",
                component:
                  "simulationsubsystem/stationSimulate/faultConfig/index",
                meta: {
                  title: "设备故障仿真",
                  icon: "",
                  breadcrumb: true,
                  iconType: 0,
                },
                hidden: false,
                alwaysShow: false,
              },
            ],
          },
          {
            path: "simulationsubsystem/userSimulate/demandConfig",
            name: "轨道预报",
            component: "Layout",
            meta: {
              title: "轨道预报",
              icon: "el-icon-money",
              breadcrumb: true,
              iconType: 0,
            },
            hidden: false,
            alwaysShow: true,
            children: [
              {
                path: "/simulationsubsystem/userSimulate/userManage",
                name: "用户仿真",
                component: "simulationsubsystem/userSimulate/userManage/index",
                meta: {
                  title: "用户仿真",
                  icon: "",
                  breadcrumb: true,
                  iconType: 0,
                },
                hidden: false,
                alwaysShow: false,
              },
            ],
          },
          {
            path: "simulationsubsystem/threedSimulate",
            name: "三维卫星仿真",
            component: "Layout3",
            meta: {
              title: "三维卫星仿真",
              icon: "mnfzfxt_swwxfz",
              breadcrumb: true,
              iconType: 1,
            },
            hidden: false,
            alwaysShow: false,
          },
        ],
      },
    ],
    permissions: [
      "situationDisplay:view",
      "situationdisplayhome:view",
      "situationequipStatus:view",
      "situationsatStatus:view",
      "situationhealth:view",
      "shadow:view",
      "computeForecast:view",
      "orbitcal:view",
      "ephemeris:view",
      "gatewayStation:view",
      "satellitePoint:view",
      "ascendingNode:view",
      "healthStatusMonitor:view",
      "diagnosticRules:view",
      "healthcare:view",
      "faultDiagnosis:view",
      "knowledgeRasoning:view",
      "diagnosticResults:view",
      "currentAlarms:view",
      "historyAlarms:view",
      "sourceCode:view",
      "telemetry:view",
      "dataexchange:view",
      "dataTracking:view",
      "resultQuery:view",
      "satellitescheduleLog",
      "planmangement:view",
      "telecontrol:view",
      "telecontrolMonitor:view",
      "dataMonitor:view",
      "datatransfile:view",
      "fileManage:view",
      "twolineTle:view",
      "satellitetaskManage:view",
      "satelliteManagement:view",
      "telemetryResult:view",
      "instantaneous:view",
      "telecontrolOrder:view",
      "injectProcess:view",
      "satePlanQuery:view",
      "oribit:view",
      "telemetryCustom:view",
      "taskStatus:view",
      "planGeneration:view",
      "demandManage:view",
      "schedulePlan:view",
      "planManage:view",
      "taskManage:view",
      "missionPlan:view",
      "eventManage:view",
      "taskPlan.view",
      "taskPlan:view",
      "planConfirm:view",
      "actuatorManage:view",
      "scheduleLog:view",
      "inbound:view",
      "modeManage:view",
      "cockpit:view",
      "equipment:view",
      "paramterControl:view",
      "equipmentplanquery:view",
      "parameter:view",
      "user:export",
      "role:view",
      "menu:export",
      "dept:view",
      "log:view",
      "dept:delete",
      "monitor:view",
      "templateConfig:view",
      "center:view",
      "statusConfig:view",
      "client:view",
      "satellite:view",
      "advancedConfig:view",
      "client:update",
      "system:view",
      "menu:add",
      "operatelog:view",
      "resource:view",
      "user:view",
      "user:add",
      "monitor:loginlog",
      "client:add",
      "dept:add",
      "generalManage:view",
      "role:add",
      "menu:delete",
      "user:reset",
      "client:delete",
      "role:delete",
      "telemetryPlayBack:view",
      "jobLog:view",
      "dept:export",
      "client:decrypt",
      "user:update",
      "user:delete",
      "menu:view",
      "taskParamsConfig:view",
      "menu:update",
      "dept:update",
      "role:export",
      "role:update",
      "faultlibraryConfig:view",
      "faultConfig:view",
      "algorithmConfig:view",
      "trackSimulate:view",
      "satelliteConfig:view",
      "constellationFaultConfig:view",
      "demandConfig:view",
      "equipConfig:view",
      "stationManage:view",
      "stationSimulate:view",
      "threedSimulate:view",
      "consteSimulate:view",
      "userManage:view",
      "simulation:view",
    ],
  },
  success: true,
};
const names = ["卫星状态", "卫星管理", "三维卫星仿真"];

function test(res) {
  let routers = res.respBody.routes;
  routers = routers.map((route) => {
    let newItem = {};
    Object.keys(route).forEach((key) => {
      console.log(key);
      console.log(route[key]);
      if (key === "children") {
        route[key] = routeKey.filter((keyItem) => {
          if (names.includes(keyItem.name)) {
            return false;
          } else {
            return true;
          }
        });
      }
      // const routeKey = route[key];
      // filterRouters.push({
      //   [key]: routeKey.filter(
      //     keyItem => {
      //       if (keyItem.path.includes('sceneDisplaySubsystem')) {
      //         return keyItem.tabType === store.state.storageInfo.sceneDisplayTabName;
      //       } else {
      //         return true;
      //       }
      //     }
      //   )
      // });
    });
    return route;
  });
  console.log(routers);
}
test(res);
</script>

<style scoped>
.gis-viewer-content {
  width: 900px;
  height: 900px;
  background: aquamarine;
}
</style>