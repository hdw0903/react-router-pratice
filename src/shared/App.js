import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Menu from '../components/Menu';
import { About, Home, Posts } from '../pages';
import Button from '../components/Button';

class App extends Component {
  render() {
    return (
      <div>
        <Menu></Menu>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about/:name" component={About}>
            {/* :name = 파리미터 경로 설정 */}
          </Route>
          <Route path="/about" component={About}></Route>
          {/* Switch = exact 대신 사용, 매칭되는 첫번째 라우트만 보여줌 */}
          <Route path="/posts" component={Posts}></Route>
          <Route path="/history" component={Button}></Route>
          <Route
            render={({ location }) => (
              <div>
                <h2>이 페이지는 존재하지 않습니다:</h2>
                <p>{location.pathname}</p>
              </div>
            )}
          ></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
