import * as React from 'react'
import { connect } from 'react-redux'
import { RootState } from 'common/reducer'
import { LayoutTitleState, resetLayoutTitle } from '../Layout/ducks/LayoutTitle'
import MenuList from './menu_list'
import { DynamicCx } from 'common/types'
import { styling } from 'common/utils'
import * as s from './login.scss'
import ShopNotice from '../Notice/store_notice'
import SimpleNotice from '../Notice/simple_notice'

interface OwnProps {
  cx?: DynamicCx
}

interface StateProps {
  layoutTitle: LayoutTitleState
}

interface DispatchProps {
  resetLayoutTitle: typeof resetLayoutTitle
}

type Props = OwnProps & StateProps & DispatchProps

const Login: React.FC<Props> = ({ cx, resetLayoutTitle }) => {
  resetLayoutTitle()
  return <>test</>
}

export default connect<StateProps, DispatchProps, OwnProps>(
  (state: RootState) => ({
    layoutTitle: state.layoutTitle,
  }),
  {
    resetLayoutTitle,
  },
)(styling(s)(Login))
