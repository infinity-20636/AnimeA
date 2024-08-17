import { useEffect, type FC } from "react";
import {
  Account,
  Auth,
  Calendar,
  Forum,
  Home,
  NotFound,
  Notification,
  Shop,
  Users,
  AnimeList,
  AnimeWatch
} from "@/page";
import { Header } from "../components/Header";
import "../assets/style/fonts.scss";
import "../assets/style/global.scss";
import appMainStyle from "../App.module.scss";
import { LeftPanel } from "../components/LeftPanel";
import { AppRoutes, PAGE_LIST, RoutePagesType } from "./routes/AppRoutes";
import { Provider, useSelector } from "react-redux";
import { RootState, store } from "@/store/store";
import { useNavigate } from "react-router-dom";
import { Cart } from "@/page/Cart";

interface IAppProps {}
const App: FC<IAppProps> = ({}) => {
  const RoutesLIst: RoutePagesType[] = [
    {
      path: PAGE_LIST.HOME,
      element: <Home />,
    },
    {
      path: PAGE_LIST.CART,
      element: <Cart />,
    },
   
    {
      path: PAGE_LIST.CALENDAR,
      element: <Calendar />,
    },
    {
      path: PAGE_LIST.FORUM,
      element: <Forum />,
    },
    {
      path: PAGE_LIST.SHOP,
      element: <Shop />,
    },
    {
      path: PAGE_LIST.USERS,
      element: <Users />,
    },
    {
      path: PAGE_LIST.NOTIFICATION,
      element: <Notification />,
    },

    {
      path: PAGE_LIST.ACCOUNT,
      element: <Account />,
    },
    {
      path: PAGE_LIST.ANIMELIST,
      element: <AnimeList />,
    },
    {
      path: PAGE_LIST.ANIMEWATCH,
      element: <AnimeWatch />,
    },
    { path: PAGE_LIST.NOTFOUND, element: <NotFound /> },
  ];
  const { isAuth } = useSelector((state: RootState) => state.auth);
  console.log(isAuth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      navigate(PAGE_LIST.AUTH);
    }else {
      navigate(PAGE_LIST.HOME);
    }
  }, [isAuth]);

  return (
    <>
    
      {isAuth ? (
        
        <main className={appMainStyle.main}>
          <Header />
          <LeftPanel />
          <AppRoutes pages={RoutesLIst} />
        </main>
      ) : (
        <Auth />
      )}
      
    </>
  );
};

export default App;
