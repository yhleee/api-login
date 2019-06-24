import * as React from 'react'
import { connect } from 'react-redux'
import { RootState } from 'common/reducer'
import { LayoutTitleState, resetLayoutTitle } from '../Layout/ducks/LayoutTitle'

import { DynamicCx } from 'common/types'
import { styling } from 'common/utils'
import * as s from './login.scss'
import LoginCondition from './login_condition'
import { History } from 'history'
import StockSearch from '../Stock/stock_search'

interface OwnProps {
  cx?: DynamicCx
  history?: History
}

interface StateProps {
  layoutTitle: LayoutTitleState
}

interface DispatchProps {
  resetLayoutTitle: typeof resetLayoutTitle
}

type Props = OwnProps & StateProps & DispatchProps

class Login extends React.Component<Props, {}> {
  constructor(props) {
    super(props)
  }

  render() {
    const { cx, history } = this.props
    return (
      <>
        <LoginCondition {...{ history }} />
      </>
    )
  }
}

export default connect<StateProps, DispatchProps, OwnProps>(
  (state: RootState) => ({
    layoutTitle: state.layoutTitle,
  }),
  {
    resetLayoutTitle,
  },
)(styling(s)(Login))
