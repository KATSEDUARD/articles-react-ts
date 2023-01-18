import { createTypedHooks } from 'easy-peasy';
import { ArticlesModel } from '../interfaces/interfaces';

const typedHooks = createTypedHooks<ArticlesModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreState = typedHooks.useStoreState;