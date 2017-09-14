// Licensed under the Apache License, Version 2.0 (the “License”); you may not
// use this file except in compliance with the License. You may obtain a copy of
// the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an “AS IS” BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
// License for the specific language governing permissions and limitations under
// the License.

import cancelHandled from '..'
import React from 'react'
import { shallow } from 'enzyme'

class SomeComponent extends React.Component {
  render() {
    return <div {...this.props}>Ctrine!</div>
  }
}

describe('Function “cancelHandled”', () => {
  it('cancels and stop the event propagation', () => {
    const HANDLER = jest.fn(() => true)
    const PREVENT_DEFAULT = jest.fn()
    const STOP_PROPAGATION = jest.fn()
    const WRAPPER = shallow(<SomeComponent onClick={cancelHandled(HANDLER)}/>)

    WRAPPER.simulate('click', {
      preventDefault: PREVENT_DEFAULT,
      stopPropagation: STOP_PROPAGATION
    })

    expect(PREVENT_DEFAULT).toHaveBeenCalled()
    expect(STOP_PROPAGATION).toHaveBeenCalled()
  })
})
