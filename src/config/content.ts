import {dashboardContentEN} from './../screens/dashboard/dashboard.content';

export const useContent = (source: keyof typeof content) => {
  return content[source];
};

const content = {
  dashboard: dashboardContentEN,
};
