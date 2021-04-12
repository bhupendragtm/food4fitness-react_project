import App from "./App";
import { Frontpage } from "./Component/Frontpage/Frontpage";
import { Blog } from "./Component/Blog/Blog";
import { BlogSingle } from "./Component/Blog/BlogSingle";

import loadData from "./Helpers/loadData";

const Routes = [
  {
    path: "/",
    exact: true,
    component: Frontpage,
    loadData: () => loadData("/home"),
  },
  {
    path: "/blog",
    component: Blog,
    exact: true,
    loadData: () => loadData("/blog"),
  },
  {
    path: "/blog/:slug",
    component: BlogSingle,
    exact: true,
    loadData: () => loadData("/blog/:slug"),
  },
];

export default Routes;
