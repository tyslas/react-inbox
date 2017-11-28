import React from 'react';

const readUnread = (readProp) => {
  if (readProp === true) {
    return 'row message unread';
  }
  else {
    return 'row message read';
  }
}

// const starNoStar = (starProp) => {
//   if (starProp === true) {
//     console.log('star fa fa-star');
//     return 'star fa fa-star';
//   }
//   else {
//     console.log('star fa fa-star-o');
//     return 'star fa fa-star-o';
//   }
// }

const message = ({data}) => {
  return (
    <div class={readUnread(data.read)}>
      <div class="col-xs-1">
        <div class="row">
          <div class="col-xs-2">
            <input type="checkbox" />
          </div>
          <div class="col-xs-2">
            <i class="star fa fa-star-o"></i>
          </div>
        </div>
      </div>
      <div class="col-xs-11">
        <a href="#">{data.subject}</a>
      </div>
    </div>
  )
}

export default message;
