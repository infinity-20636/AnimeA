import { FC, Suspense } from "react"
import { Routes, Route } from "react-router-dom"



export enum PAGE_LIST{
  HOME = "/",
  CALENDAR = "/calendar",
  FORUM = "/forum",
  SHOP = "/shop",
  USERS = "/users",
  CART = "/cart",
  NOTIFICATION = "/notification",
  ACCOUNT = "/account",
  AUTH = "/auth",
  ANIMELIST= "/animeList",
  ANIMEWATCH = "/animeWatch",
  NOTFOUND = "*",
  
}
export type RoutePagesType = {
  path: string;
  element: JSX.Element;
}
export type RoutesPagesType = RoutePagesType[]

interface IAppRouterProps{
  pages: RoutePagesType[]
}

export const AppRoutes: FC<IAppRouterProps> = ({pages})=> {
  console.log(pages);
  
return (
        <>
            <Suspense fallback={<span>Loading...</span>}>
        <Routes>
        {
            pages.map(page => (
                <Route path={page.path} element={[page.element]}/>
            ))
          }
        </Routes>
      </Suspense>
        </>
    )
}