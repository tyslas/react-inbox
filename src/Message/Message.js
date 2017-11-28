import React from 'react';

// readUnread = (readProp) => {
//   if (readProp === true) {
//     console.log('read');
//     return 'read';
//   }
//   else {
//     console.log('unread');
//     return 'unread';
//   }
// }
//
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
    <div class="row message unread">
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
