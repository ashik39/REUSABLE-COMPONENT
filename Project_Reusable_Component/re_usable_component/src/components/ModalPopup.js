// import React, { useState, useEffect } from 'react';
// function ModalPopup(props) {
//   const [message] = useState(props.message);
//   //const [show, setShow] = useState(props.show);
//   //   useEffect(() => {
//   //     setTimeout(() => {
//   //       setShow(false);
//   //     }, 3000);
//   //   });
//   return (
//     <div>
//       <h2>Hi hello vanakkam</h2>
//       <div className="modal">
//         <h2 className="modal-content">Modal here</h2>
//         <section className="modal-content">{message}</section>
//       </div>
//     </div>
//   );
// }
// export default ModalPopup;

import React from 'react';

function ModalPopup(props) {
  if (props.state) {
    return (
      <div className="Modal-wrapper">
        <div className="popup">
          <div className="popup_inner">{props.children}</div>
        </div>
      </div>
    );
  }
  return null;
}

export default ModalPopup;
