import React from 'react';
import queryString from 'query-string';

const About = ({ location, match }) => {
  const query = queryString.parse(location.search);
  console.log('queryString :', queryString);
  //   query 경로 확인
  console.log('query :', query);
  const detail = query.detail === 'true'; //URL query로 받아오는 값은 문자열이라 true가 아니라 'true'
  // 조건부 렌더링을 위한 조건식
  console.log('detail :', detail);
  return (
    <div>
      <h2>
        About {match.params.name}
        {console.log(match)}
        {console.log(match.params)}
        {/*파라미터를 확인할수있음*/}
        {detail && 'detail: true'}
      </h2>
    </div>
  );
};

export default About;
