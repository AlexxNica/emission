import * as storybook from "@storybook/react-native"
import * as React from "react"
import { ListView, NavigatorIOS, Route, TouchableHighlight, View, ViewProperties } from "react-native"

import { StorySection } from "./"
import StoryBrowser from "./story_browser"
import { Background, BodyText, Separator, Title } from "./styles"

interface Props extends ViewProperties {
  navigator: NavigatorIOS,
  route: Route
}

const Headline = () => <Title>Stories</Title>

const render = (props: Props) => {

  const ListViewItem = (item: StorySection) => {
    const showStoriesForSection = () => {
      props.navigator.push({ title: item.kind, component: StoryBrowser, passProps: { section: item } })
    }

    return (
      <View key={item.kind}>
        <TouchableHighlight onPress={showStoriesForSection}>
          <BodyText>{item.kind}</BodyText>
        </TouchableHighlight>
        <Separator />
      </View>
    )
  }

  const storybookDS = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    .cloneWithRows(storybook.getStorybook())

  return (
    <Background>
      <ListView style={{ flex: 1 }} dataSource={storybookDS} renderRow={ListViewItem} renderHeader={Headline} />
    </Background>
  )
}

// Export a pure component version
export default class StorybookBrowser extends React.PureComponent<Props, null> {
  render() { return render(this.props) }
}
