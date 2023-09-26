<template>
  <PageWrapper :class="prefixCls" title="火势上报">
    <CollapseContainer title="详情填写">
      <a-form :form="form" @submit="handleSubmit">
        <a-form-item label="地点" :label-col="{ span: 4 }" :wrapper-col="{ span: 12 }">
          <a-input v-model:value="location"/>
        </a-form-item>
        <a-form-item label="面积" :label-col="{ span: 4 }" :wrapper-col="{ span: 12 }">
          <a-input v-model:value="area"/>
        </a-form-item>
        <a-form-item label="火源" :label-col="{ span: 4 }" :wrapper-col="{ span: 12 }">
          <a-input v-model:value="source"/>
        </a-form-item>
        <a-form-item label="预估经济损失" :label-col="{ span: 4 }" :wrapper-col="{ span: 12 }">
          <a-input v-model:value="lost"/>
        </a-form-item>
        <a-form-item label="人员伤亡情况" :label-col="{ span: 4 }" :wrapper-col="{ span: 12 }">
          <a-input v-model:value="death"/>
        </a-form-item>
        <a-form-item label="火势大小" :label-col="{ span: 4 }" :wrapper-col="{ span: 12 }">
          <a-radio-group v-model:value="scale">
            <a-radio-button value="small">小</a-radio-button>
            <a-radio-button value="medium">中</a-radio-button>
            <a-radio-button value="large">大</a-radio-button>
          </a-radio-group>
        </a-form-item>
        <a-form-item :wrapper-col="{ offset: 4 }">
          <a-button type="primary" html-type="submit">提交</a-button>
        </a-form-item>
      </a-form>
    </CollapseContainer>

  </PageWrapper>
</template>
<script lang="ts">
import {Progress, Row, Col} from 'ant-design-vue';
import {defineComponent} from 'vue';
import Icon from '/@/components/Icon/index';
import {cardList} from './data';
import {PageWrapper} from '/@/components/Page';
import {List} from 'ant-design-vue';
import {useMessage} from '/@/hooks/web/useMessage';
import {CollapseContainer} from '/@/components/Container/index';

export default defineComponent({
  components: {
    Icon,
    Progress,
    PageWrapper,
    [List.name]: List,
    [List.Item.name]: List.Item,
    AListItemMeta: List.Item.Meta,
    [Row.name]: Row,
    [Col.name]: Col,
    CollapseContainer
  },
  setup() {
    return {
      prefixCls: 'list-basic',
      list: cardList,
      pagination: {
        show: true,
        pageSize: 3,
      },
    };
  },
  data() {
    return {
      form: null,
      location: '凉山州木里县雅砻江镇立尔村',
      area: '3047.7805公顷',
      source: '雷击引起',
      scale: 'large',
      lost: "9731.12万元",
      time: "2019年3月30日至4月10日",
      jingdu: "101.22",
      weidu: "28.55",
      death:
        "31人遇难(27名森林消防人员和4名地方干部群众牺牲)",
    }
      ;
  },
  methods: {
    handleSubmit() {
      const {createMessage} = useMessage();
      createMessage.success("提交成功");
    },
  },
});
</script>

