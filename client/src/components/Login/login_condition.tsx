import * as React from 'react'
import { Icon, Input, Menu, Slider, Tag, Carousel } from 'antd'
import { DynamicCx } from 'common/types'
import { styling } from 'common/utils'
import FormCategory from 'components/common/FormCategory'
import * as s from './login.scss'
import { SearchPage } from 'common/types/enum/searchOptions'
import { History } from 'history'

import { connect } from 'react-redux'
import { RootState } from '../../common/reducer'
import { CategoryFormResult } from '../../common/types/entities/search'
import { getSearchBrandList } from '../../common/services/search'
import { BrandParams } from '../../common/types/entities/brand'
import {
  resetLoginConditionParams,
  LoginConditionParamsState,
  updateLoginConditionParams,
} from './ducks/loginConditionParams'

const SubMenu = Menu.SubMenu
const { CheckableTag } = Tag

interface OwnProps {
  cx?: DynamicCx
  history?: History
}

interface OwnState {}
interface StateProps {
  loginConditionParams: LoginConditionParamsState
}
interface DispatchProps {
  //resetLoginConditionParams: typeof resetLoginConditionParams
  updateLoginConditionParams: typeof updateLoginConditionParams
}

// type Props = OwnProps & StateProps & DispatchProps

type Props = OwnProps & StateProps

class SearchCondition extends React.Component<Props, OwnState> {
  constructor(props) {
    super(props)
    this.state = {
      brandList: [],
    }
  }

  async componentDidMount() {
    this.props.loginConditionParams.searchForm.id = ''
    this.props.loginConditionParams.searchForm.pw = ''
    // this.props.searchConditionParams.searchForm.categoryId = ''
    // this.props.searchConditionParams.searchForm.benefit = ''
    // this.props.searchConditionParams.searchForm.brand = ''
    // this.props.searchConditionParams.searchForm.startValue = 0
    // this.props.searchConditionParams.searchForm.endValue = 200000

    //const brandList = await getSearchBrandList('00')

    //this.setState({ ...this.state, brandList: this.state.brandList.concat(brandList) })
  }

  // onPriceRangeChange = ([startVal, endVal]) => {
  //   this.props.searchConditionParams.searchForm.endValue = endVal
  //   this.props.searchConditionParams.searchForm.startValue = startVal
  // }

  onChangeID = e => {
    this.props.loginConditionParams.searchForm.id = e.target.value
  }
  onChangePW = e => {
    this.props.loginConditionParams.searchForm.pw = e.target.value
  }

  goResultPage = () => {
    //const searchConditionParams = this.props.searchConditionParams
    //this.props.updateSearchConditionParams(searchConditionParams)
    this.props.history.push('/app/loginresult')
    // window.location.href = '/app/loginresult';
  }

  render() {
    const { cx } = this.props

    return (
      <>
        <div>
          {/* ID 입력 */}
          <Input
            placeholder="Olive One ID"
            onChange={this.onChangeID}
            style={{
              paddingRight: 20,
              paddingLeft: 20,
              fontSize: 50,
              height: '80px',
              lineHeight: '80px',
              marginBottom: '30px',
            }}
          />
        </div>
        <div>
          {/* 검색어 입력 영역 */}
          <Input
            type="password"
            placeholder="Olive One Password"
            onChange={this.onChangePW}
            style={{
              paddingRight: 20,
              paddingLeft: 20,
              fontSize: 50,
              height: '80px',
              lineHeight: '80px',
              marginBottom: '30px',
            }}
          />
        </div>
        <div className={cx('footer-wrap')} onClick={this.goResultPage}>
          <div className={cx('search-button')}>로그인</div>
        </div>
      </>
    )
  }
}

export default connect<StateProps, DispatchProps, OwnProps>(
  (state: RootState) => ({
    loginConditionParams: state.loginConditionParams,
  }),
  {
    //resetSearchConditionParams,
    updateLoginConditionParams,
  },
)(styling(s)(SearchCondition))
