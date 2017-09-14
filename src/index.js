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
// @flow

function cancelEvent(e) {
  if (!e)
    return
  if (e.preventDefault)
    e.preventDefault()
  if (e.stopPropagation)
    e.stopPropagation()
}

type Handler = (...args:any) => boolean | void

/**
 * Creates a function that can be used as an event handler for React components.
 */
export function cancelHandled(handler:Handler) {
  return (e, ...otherArgs) => {
    if (handler(e, ...otherArgs))
      cancelEvent(e)
  }
}

export default cancelHandled
