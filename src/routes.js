// import
import Dashboard from "views/Dashboard/Dashboard";
import RTLPage from "views/Dashboard/RTL";
import Profile from "views/Dashboard/Profile";
import Penjualan from "views/Dashboard/Penjualan";
import Stok from "views/Dashboard/Stok";
import Laporan from "views/Dashboard/Laporan";
import SignIn from "views/Auth/SignIn.js";
import SignUp from "views/Auth/SignUp.js";

import {
  HomeIcon,
  StatsIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
  CartIcon,
} from "components/Icons/Icons";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/penjualan",
    name: "Penjualan & Reseller",
    rtlName: "المبيعات",
    icon: <CartIcon color="inherit" />,
    component: Penjualan,
    layout: "/admin",
  },
  {
    path: "/stok",
    name: "Stok & Gudang",
    rtlName: "المخزون",
    icon: <StatsIcon color="inherit" />,
    component: Stok,
    layout: "/admin",
  },
  {
    path: "/laporan",
    name: "Laporan & Analisis",
    rtlName: "التقارير",
    icon: <DocumentIcon color="inherit" />,
    component: Laporan,
    layout: "/admin",
  },
  {
    name: "ACCOUNT PAGES",
    category: "account",
    rtlName: "صفحات",
    state: "pageCollapse",
    views: [
      {
        path: "/profile",
        name: "Profile",
        rtlName: "لوحة القيادة",
        icon: <PersonIcon color="inherit" />,
        secondaryNavbar: true,
        component: Profile,
        layout: "/admin",
      },
      {
        path: "/signin",
        name: "Sign In",
        rtlName: "لوحة القيادة",
        icon: <DocumentIcon color="inherit" />,
        component: SignIn,
        layout: "/auth",
      },
      {
        path: "/signup",
        name: "Sign Up",
        rtlName: "لوحة القيادة",
        icon: <RocketIcon color="inherit" />,
        secondaryNavbar: true,
        component: SignUp,
        layout: "/auth",
      },
    ],
  },
];
export default dashRoutes;
