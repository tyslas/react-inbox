import React from 'react';
import Message from '../Message/Message';

const messageList = ({data, toggleSelected}) => {

  return (
    <div>
      {data.map((message, i) => <Message
        key={i}
        data={message}
        onSelect={() => toggleSelected(data[i].id)} />)}
      )}
    </div>
  )
}

export default messageList;
