import "react-native"

import * as React from "react"
import * as renderer from "react-test-renderer"

import { allStates } from "../../__stories__/consignments_search.story"

import Search from "../artist_search_results"

describe("For different states", () => {
  allStates.forEach(test => {
    const name = Object.keys(test)[0]
    const state = test[name]
    it(`Looks right when ${name}`, () => {
      const todo = renderer.create(<Search {...state}/>)
      expect(todo.toJSON()).toMatchSnapshot()
    })
  })
})
