import { ref } from 'vue';
import PageContent from '@/components/page-content';

export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>();

  const resetClick = () => {
    pageContentRef.value?.getPageData();
  };
  const queryClick = (queryInfo: any) => {
    pageContentRef.value?.getPageData(queryInfo);
  };

  return [pageContentRef, resetClick, queryClick];
}
