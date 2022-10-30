import React from 'react'
import { Switch,Route } from 'react-router-dom'
import { Detelis } from '../detelis/Detelis'
export const Router = () => {
  return (
    <div>
    <Switch>
      <Route exact path="/Detelis" component={Detelis}/>
     
     
     </Switch>
    
    </div>
  )
}
