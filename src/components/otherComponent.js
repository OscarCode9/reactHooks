import React, { Component } from 'react'
import { createCache, createResource } from 'simple-cache-provider';
const cache = createCache()

const UserDetailsResource = createResource(async function (){
  await sleep(3000)
  return 'Load a new user'
})


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


export default class otherComponent extends Component {
  constructor(){
    super()
    const user = UserDetailsResource.read(cache);
    this.state = {
      user
    }
  }
  

  render() {
    return (
      <div>
        <h1>My otherComponent, {this.state.user}</h1>
      </div>
    )
  }
}
