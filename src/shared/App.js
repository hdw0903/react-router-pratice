import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Menu from '../components/Menu';
// import { About, Home, Posts } from '../pages';
import { About, Home, Posts } from '../pages/index.async';
import Button from '../components/Button';

class App extends Component {
  state = {
    SplitMe: null,
  };

  showSplitMe = () => {
    import('../components/SplitMe').then(({ default: Component }) => {
      console.log('this:', this);
      this.setState({
        SplitMe: Component,
      });
    });
    // import()는 Promise를 반환, then()의 파라마터로 결과값 default를 'Component'라는 이름으로 설정
  };
  render() {
    const { SplitMe } = this.state;
    return (
      <div>
        <Menu></Menu>
        {SplitMe && <SplitMe /> /* SplitMe 가 유효하면 렌더링을 해줍니다 */}
        <button onClick={this.showSplitMe}>ClickMe</button>
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
