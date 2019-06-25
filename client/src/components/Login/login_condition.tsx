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

interface StateProps {
  loginConditionParams: LoginConditionParamsState
}
interface DispatchProps {
  resetLoginConditionParams: typeof resetLoginConditionParams
  updateLoginConditionParams: typeof updateLoginConditionParams
}
interface OwnState {}

type Props = OwnProps & StateProps & DispatchProps

class loginCondition extends React.Component<Props, OwnState> {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {
    this.props.loginConditionParams.loginForm.id = ''
    this.props.loginConditionParams.loginForm.pw = ''
  }

  onChangeID = e => {
    this.props.loginConditionParams.loginForm.id = e.target.value
  }
  onChangePW = e => {
    this.props.loginConditionParams.loginForm.pw = e.target.value
  }

  goResultPage = () => {
    const loginConditionParams = this.props.loginConditionParams
    this.props.updateLoginConditionParams(loginConditionParams)
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
          {/* PW 입력 */}
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
    resetLoginConditionParams,
    updateLoginConditionParams,
  },
)(styling(s)(loginCondition))
