import React from "react";
import {FaWindowClose} from "react-icons/fa";

const Modal = ({ modalContent, handleModalClose }) => {
  return (
    <div className="modal-container">
      <div className="modal-mask" onClick={handleModalClose}></div>

      <div className="modal">
        <div className="modal-inner-container">
          <div className="modal-header">
            {modalContent.title} <FaWindowClose className="modal-close-icon"  onClick={handleModalClose}/>
          </div>
          <div className="modal-body">
            <div className="modal-banner">
              <img src={modalContent.modalBanner} />
            </div>
            <div className="modal-desc">
            {modalContent.modalDesc}
            </div>
            <div className='modal-extra'>
            {modalContent.extraPic &&
              modalContent.extraPic.map((item) => {
                return (
                  <div className='modal-extrabox'>
                    <img
                      src={item.imgSrc} className="modal-extra-img"/>
                    <span>{item.desc}</span>
                  </div>
                );
              })}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
