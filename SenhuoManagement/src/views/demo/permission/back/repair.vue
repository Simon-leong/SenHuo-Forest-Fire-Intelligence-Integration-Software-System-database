<template>
  <PageWrapper
    title="维修组权限"
    contentBackground
    contentClass="p-4"
    content="维修组可见页面：全部"
  >
    <!--    content="由于刷新的时候会请求用户信息接口，会根据接口重置角色信息，所以刷新后界面会恢复原样，如果不需要，可以注释 src/layout/default/index内的获取用户信息接口"-->
    <!--    <CurrentPermissionMode />-->

    <p style="color:#3c3f41;">
      <!--      当前角色: <a> {{ userStore.getRoleList }} </a>-->
      当前角色: <a> {{ '森火平台管理员' }} </a>
    </p>
    <!--    <Alert class="mt-4" type="info" message="点击后请查看左侧菜单变化" show-icon />-->

    <!--    <div class="mt-4">-->
    <!--      权限切换(请先切换权限模式为前端角色权限模式):-->
    <!--      <Space>-->
    <!--        <a-button @click="changeRole(RoleEnum.SUPER)" :type="isSuper ? 'primary' : 'default'">-->
    <!--          {{ RoleEnum.SUPER }}-->
    <!--        </a-button>-->
    <!--        <a-button @click="changeRole(RoleEnum.TEST)" :type="isTest ? 'primary' : 'default'">-->
    <!--          {{ RoleEnum.TEST }}-->
    <!--        </a-button>-->
    <!--      </Space>-->
    <!--    </div>-->
  </PageWrapper>
</template>
<script lang="ts">
import {computed, defineComponent} from 'vue';
import {Alert, Space} from 'ant-design-vue';
import {useUserStore} from '/@/store/modules/user';
import {RoleEnum} from '/@/enums/roleEnum';
import {usePermission} from '/@/hooks/web/usePermission';
import {PageWrapper} from '/@/components/Page';
import CurrentPermissionMode from '../CurrentPermissionMode.vue';

export default defineComponent({
  components: {Space, Alert, CurrentPermissionMode, PageWrapper},
  setup() {
    const {changeRole} = usePermission();
    const userStore = useUserStore();

    return {
      userStore,
      RoleEnum,
      isSuper: computed(() => userStore.getRoleList.includes(RoleEnum.SUPER)),
      isTest: computed(() => userStore.getRoleList.includes(RoleEnum.TEST)),
      changeRole,
    };
  },
});
</script>
<style lang="less" scoped>
.demo {
  background-color: @component-background;
}
</style>
