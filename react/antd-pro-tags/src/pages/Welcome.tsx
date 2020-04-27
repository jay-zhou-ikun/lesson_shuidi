import React, { useState, useEffect } from 'react';

// Function Component   @types/react
{/* <> 泛型 props  */}
// 1. umi alley  react 开发框架  next.js ssr 
// tags  每一项是社么？ 
import { ITag } from './interface';
import {TagItem } from '../components/TagItem';
import { fetchData } from '../utils/fetch'; // fetch util  axios fetch 

const initialTags: ITag[] = [];

const WelcomePage: React.FC<{}> = () => {
  // hooks 可以讲class react 组件给干掉
  // useState 提供状态及修改   useEffects lifecycle 
  // tags 
  const [tags, setTag] = useState(initialTags)
  useEffect(() => {
    // umi mock ? antd 
    // lifecycle hooks函数副作用 
    // tags  -> api -> mock -> 真的api 
    const url = '/api/tag/all';
      fetchData(url, 'GET')
      .then(data => {
        console.log(data)
        setTag(data.data)
      })
  }, [])
  return (
    <div className="inputPageWrapper">
      {
        tags.map(tagObject => (
          <TagItem key={tagObject.id} title={tagObject.title}/>
        ))
      }
    </div>
  )
}

export default WelcomePage