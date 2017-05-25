import * as React from "react"
import { NativeSyntheticEvent, NativeTouchEvent, requireNativeComponent, ViewProperties } from "react-native"

export interface SwitchEvent extends NativeSyntheticEvent<NativeTouchEvent & { selectedIndex: number }> {}

interface Props extends ViewProperties {
  titles: string[]
  onSelectionChange: (event: SwitchEvent) => void
  selectedIndex: number
}

export default class SwitchView extends React.Component<Props, any> {
  static propTypes = {
    titles: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    onSelectionChange: React.PropTypes.func.isRequired,
    selectedIndex: React.PropTypes.number,
  }

  render() {
    const { style, props } = this.props
    // Height taken from ARSwitchView.m
    return <NativeSwitchView style={[{ height: 46 }, style]} {...props} />
  }
}

const NativeSwitchView: React.ComponentClass<any> = requireNativeComponent("ARSwitchView", SwitchView)
