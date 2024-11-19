import ModalPopupProps from "../types/ModalPopupProps";
import { useRef } from "react";

export default function ModalPopup(props: ModalPopupProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  return (
    <>
      <button className="dialogBtn" onClick={openDialog}>
        Show more
      </button>
      <dialog className="popup" ref={dialogRef}>
        <div className="container">
          <div>
            <h4>{props.name}</h4>
            <img className="popupImgSize" src={props.img} alt="" />
          </div>
          <p>{props.description}</p>
        </div>
          <button className="dialogBtn" onClick={closeDialog}>
            Close
          </button>
      </dialog>
    </>
  );
}
