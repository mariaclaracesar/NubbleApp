import {ToastService} from './toastTypes';
import {useToastServiceZustand, useToastZustand} from './useToastZustand';

export function useToast(): ToastService['toast'] {
  // const {toast} = useToastContext();
  // return toast;

  return useToastZustand();
  // return toast;
}

export function useToastService(): Pick<
  ToastService,
  'showToast' | 'hideToast'
> {
  // const {showToast, hideToast} = useToastContext();
  // return {
  //   showToast,
  //   hideToast,
  // };

  return useToastServiceZustand();
}
