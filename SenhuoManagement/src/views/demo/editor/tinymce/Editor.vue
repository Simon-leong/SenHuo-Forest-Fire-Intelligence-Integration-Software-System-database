<template>
  <PageWrapper title="应急预案编辑">
    <CollapseContainer title="富文本表单">
      <BasicForm
        :labelWidth="100"
        :schemas="schemas"
        :actionColOptions="{ span: 24 }"
        @submit="handleSubmit"
      />
    </CollapseContainer>
  </PageWrapper>
</template>
<script lang="ts">
import {defineComponent, h} from 'vue';
import {BasicForm, FormSchema} from '/@/components/Form/index';
import {CollapseContainer} from '/@/components/Container/index';
import {useMessage} from '/@/hooks/web/useMessage';
import {Tinymce} from '/@/components/Tinymce/index';
import {PageWrapper} from '/@/components/Page';

const schemas: FormSchema[] = [
  {
    field: 'title',
    component: 'Input',
    // label: 'title',
    label: '题目',
    defaultValue: '应急预案编辑',
    rules: [{required: true}],
  },
  {
    field: 'tinymce',
    component: 'Input',
    // label: 'tinymce',
    label: '操作',
    defaultValue: '应急预案新版',
    rules: [{required: true}],
    render: ({model, field}) => {
      return h(Tinymce, {
        value: model[field],
        onChange: (value: string) => {
          model[field] = value;
        },
      });
    },
  },
];
export default defineComponent({
  components: {BasicForm, CollapseContainer, PageWrapper},
  setup() {
    const {createMessage} = useMessage();

    return {
      schemas,
      // handleSubmit: (values: any) => {
      //   createMessage.success('click search,values:' + JSON.stringify(values));
      // },
      handleSubmit: () => {
        // createMessage.success('click search,values:' + JSON.stringify(values));
        createMessage.success('上传成功');
      },
    };
  },
});
</script>
