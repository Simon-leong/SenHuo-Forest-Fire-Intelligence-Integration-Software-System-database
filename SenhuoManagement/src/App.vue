<template>
  <!-- 配置提供者 -->
  <ConfigProvider :locale="getAntdLocale">
    <!-- 应用程序提供者 -->
    <AppProvider>
      <!-- 路由视图 -->
      <RouterView />
    </AppProvider>
  </ConfigProvider>
</template>

<script lang="ts" setup>
  import { ConfigProvider } from 'ant-design-vue';
  import { AppProvider } from '/@/components/Application';
  import { useTitle } from '/@/hooks/web/useTitle';
  import { useLocale } from '/@/locales/useLocale';

  import 'dayjs/locale/zh-cn';
  // 支持多语言
  const { getAntdLocale } = useLocale();

  // 监听页面变化并动态更改网站标题
  useTitle();
</script>

<style>
  svg {
    display: inline-block;
  }
</style>
