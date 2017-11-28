import React from 'react';
import Message from '../Message/Message';

const messageList = ({data}) => {
  return (
    <div>
      {data.map(x => <Message key={x.id} data={x} />)}
    </div>
  )
}

export default messageList;
