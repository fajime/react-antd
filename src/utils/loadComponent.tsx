import { lazy } from 'react';

export const loadComponent = (selected: any) => lazy(() => import(`./../components/${selected}`));
