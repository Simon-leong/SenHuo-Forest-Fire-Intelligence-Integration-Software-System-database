<template>
  <div class="m-5 result-success">
    <!-- <Result
      status="success"
      title="提交成功"
      sub-title="提交结果页用于反馈一系列操作任务的处理结果， 如果仅是简单操作，使用 Message 全局提示反馈即可。 本文字区域可以展示简单的补充说明，如果有类似展示 “单据”的需求，下面这个灰色区域可以呈现比较复杂的内容。"
    > -->
    <Result status="success">
      <template #extra>
        <a-button key="console" type="primary"> 导出航迹监控数据 </a-button>
        <a-button key="buy"> 新建项目 </a-button>
        <a-button key="buy"> 删除项目 </a-button>
      </template>
    </Result>
    <div class="result-success__content">
      <Descriptions title="项目名称">
        <DescriptionItem label="起飞点"> (101.504038,27.944161) </DescriptionItem>
        <DescriptionItem label="负责人"> 1号操作员</DescriptionItem>
        <DescriptionItem label=""> 2023-4-12 12:32~2023-4-12 18:32</DescriptionItem>
      </Descriptions>
      <Steps :current="1" progress-dot size="small">
        <Step title="大疆精灵一号">
          <template #description>
            <!-- <div>大疆精灵一号</div> -->
            <p>2023-4-12 12:32</p>
          </template>
        </Step>
        <Step title="1号火点">
          <template #description>
            <p>(101.381694,27.915074)</p>
          </template>
        </Step>
        <Step title="2号火点">
          <template #description>
            <p>(101.438979,27.922258)</p>
          </template>
        </Step>
        <Step title="3号火点">
          <template #description>
            <p>(101.435431,27.9783)</p>
          </template>
        </Step>
      </Steps>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { Result, Steps, Descriptions } from 'ant-design-vue';
  export default defineComponent({
    components: {
      Result,
      Steps,
      Step: Steps.Step,
      Descriptions,
      DescriptionItem: Descriptions.Item,
    },
  });
</script>
<style lang="less" scoped>
  .result-success {
    padding: 48px 32px;
    background-color: @component-background;

    &__content {
      padding: 24px 40px;
      background-color: @background-color-light;
    }
  }
</style>
