import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Top from './Top'
import Movies from './Movies'
import Sessions from './Sessions'
import Seats from './Seats'

export default function App(){
    return(
        <>
        <Top />
        <BrowserRouter>
            <Switch>
                <Route path='/' exact>
                    <Movies />
                </Route>
                <Route path='/sessoes/:movieId' exact>
                    <Sessions />
                </Route>
                <Route path='/assentos/:sessionId' exact>
                    <Seats />
                </Route>
            </Switch>
        </BrowserRouter>
        </>
    )
}