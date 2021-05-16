import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Top from './Top'
import Movies from './Movies'
import Sessions from './Sessions'

export default function App(){
    return(
        <>
        <Top />
        <BrowserRouter>
            <Switch>
                <Route path='/' exact>
                    <Movies />
                </Route>
                <Route path='/sessoes/:MovieId'>
                    <Sessions />
                </Route>
            </Switch>
        </BrowserRouter>
        </>
    )
}