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
      <button className="dialogBtn" onClick={openDialog}>Show more</button>
      <dialog className="popup" ref={dialogRef}>
        <div>
          <h4>{props.name}</h4>
          <p>{props.description}</p>
          <button className="dialogBtn" onClick={closeDialog}>Close</button>
        </div>
      </dialog>
    </>
  );
}
