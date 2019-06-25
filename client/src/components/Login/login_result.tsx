import * as React from 'react'
import { connect } from 'react-redux'
import { RootState } from 'common/reducer'
import { LayoutTitleState, updateLayoutTile } from '../Layout/ducks/LayoutTitle'
import { DynamicCx } from 'common/types'
import { styling } from 'common/utils'
import * as s from './login.scss'
import { match } from 'react-router'
import { LoginConditionParamsState } from './ducks/loginConditionParams'
import { Link } from 'react-router-dom'
import { getAuthentication } from 'common/services/login'

interface OwnProps {
  cx?: DynamicCx
  match?: match
  location?: Location
}

interface StateProps {
  layoutTitle: LayoutTitleState
  loginConditionParams: LoginConditionParamsState
}

interface DispatchProps {
  updateLayoutTile: typeof updateLayoutTile
}

interface OwnState {}
type Props = OwnProps & StateProps & DispatchProps

class SearchResult extends React.Component<Props, OwnState> {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.updateLayoutTile('로그인')
  }

  render() {
    const { cx } = this.props

    return (
      <div>
        <div>로그인 하는중입니다</div>
        <div>ID {this.props.loginConditionParams.loginForm.id}</div>
        <div>PW {this.props.loginConditionParams.loginForm.pw}</div>

        {/*<Link className={cx()} to={`/app/login/check/${this.props.loginConditionParams.loginForm.id}`}/>*/}
      </div>
    )
  }
}

export default connect<StateProps, DispatchProps, OwnProps>(
  (state: RootState) => ({
    layoutTitle: state.layoutTitle,
    loginConditionParams: state.loginConditionParams,
  }),
  {
    updateLayoutTile,
  },
)(styling(s)(SearchResult))
