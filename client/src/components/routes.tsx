import * as React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Alert, Spin } from 'antd'
import Loadable from 'react-loadable'
import login from './Login/login'

const Loading: React.SFC<any> = props => {
  return (
    <Spin tip="불러오는 중...">
      <Alert message="데이터를 불러오고 있어요!" description="가끔 서버가 응답을 하지 않으면... 하아..." type="info" />
    </Spin>
  )
}

function createLoadable(componentImport) {
  return Loadable({
    loader: componentImport,
    loading: Loading,
  })
}

export const Example = createLoadable(() => import('./Example/Example'))
export const Login = createLoadable(() => import('./Login/login'))
export const LoginResult = createLoadable(() => import('./Login/login_result'))
export const TestAxios = createLoadable(() => import('./test/naverSelectiveList'))
export const Home = createLoadable(() => import('./Home/home'))
export const Survey = createLoadable(() => import('./Survey/survey'))
export const Ranking = createLoadable(() => import('./Ranking'))
export const RankingSearch = createLoadable(() => import('./Ranking/ranking_search'))
export const SearchResult = createLoadable(() => import('./Search/search_result'))
export const BarcodeScan = createLoadable(() => import('./Search/search_barcode'))
export const Search = createLoadable(() => import('./Search'))
export const StockList = createLoadable(() => import('./Stock/stock_list'))
export const BarcodeStock = createLoadable(() => import('./Stock/stock_barcode'))
export const StockSearch = createLoadable(() => import('./Stock/stock_search'))
export const ProductDetail = createLoadable(() => import('./Product/product_detail'))
export const RankingProductList = createLoadable(() => import('./Ranking/ranking_product_list'))
export const ProductCompareList = createLoadable(() => import('./Product/product_compare'))

export const PageNotFound = createLoadable(() => import('./Error/PageNotFound'))

const Routes = () => {
  return (
    <>
      <Switch>
        {/*<Redirect exact={true} from="" to="/app/home" />*/}
        {/*<Redirect exact={true} from="/" to="/app/home" />*/}
        {/*<Redirect exact={true} from="/app" to="/app/home" />*/}
        <Redirect exact={true} from="" to="/app/login" />
        <Redirect exact={true} from="/" to="/app/login" />
        <Redirect exact={true} from="/app" to="/app/login" />
        <Route path="/app/example" component={Example} />
        <Route path="/app/test/axios" component={TestAxios} />
        <Route path="/app/home" component={Home} />
        <Route path="/app/login" component={Login} />
        <Route path="/app/loginresult" component={LoginResult} />
        <Route path="/app/survey" component={Survey} />
        <Route path="/app/ranking/products" component={RankingProductList} />
        <Route path="/app/ranking/search/:searchType/:brandName" component={RankingSearch} />
        <Route path="/app/ranking/search/:searchType" component={RankingSearch} />
        <Route path="/app/ranking" component={Ranking} />
        <Route path="/app/search/result" component={SearchResult} />
        <Route path="/app/search/barcode" component={BarcodeScan} />
        <Route path="/app/search" component={Search} />
        <Route path="/app/stock/product/:goodsCode" component={StockSearch} />
        <Route path="/app/stock/list/:goodsCode" component={StockList} />
        <Route path="/app/stock/barcode" component={BarcodeStock} />
        <Route path="/app/stock/list" component={StockList} />
        <Route path="/app/stock" component={StockSearch} />
        <Route path="/app/product/detail/barcode/:barcode" component={ProductDetail} />
        <Route path="/app/product/detail/:goodsCode" component={ProductDetail} />
        <Route path="/app/product/compare/list" component={ProductCompareList} />

        <Route component={PageNotFound} />
      </Switch>
    </>
  )
}

export default Routes
