import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { client} from '../client.js'
import { feedQuery, searchQuery } from '../utils/data';
import MasonryLayout from './MasonryLayout';
import Spinner from './Spinner';

function Feed() {

  const [loading,setLoading] = useState(false);
  const [pins,setPins] = useState(null);

  const {categoryId} = useParams();

  useEffect(() => {
    setLoading(true);
    
    if(categoryId){
      const query = searchQuery(categoryId);
      client.fetch(query).then((data) => {
        setPins(data);
        setLoading(false);
        console.log(data);
      })
    } else{
      client.fetch(feedQuery).then((data) => {
        setPins(data);
        setLoading(false);
      })
    }
  },[categoryId])

  if(loading){
    return <Spinner message= {`we are adding new ideas to your feed`} />
  }
  if(!pins?.length){
    return <h2>No pins available</h2>
  }
  return (
    <div>
      {pins && <MasonryLayout pins={pins}/>}
    </div>
  )
}

export default Feed;