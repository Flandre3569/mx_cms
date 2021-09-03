import { useStore } from 'vuex';

export function usePermission(pageName: string, handleName: string) {
  const store = useStore();
  const permissions = store.state.login.permissions;
  const vertifyPermission = `system:${pageName}:${handleName}`;
  return !!permissions.find((item: any) => item === vertifyPermission);
}
