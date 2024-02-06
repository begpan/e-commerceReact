const Modal = ({ children, close }) => {
  return (
    <div className="modal d-block bg-black bg-opacity-50">
      <div className="modal-dialog-centered">
        <div className="modal-content p-2">
          {/* modal içeriği */}
          <div className="d-flex justify-content-end">
            <button onClick={close}>X</button>
          </div>

          {/* ana içerik */}

          <div>{children}</div>

          {/* butonlar */}
          <div className="d-flex justify-content-end gap-3 mt-5">
            <button>İptal</button>
            <button className="btn btn-success">Onayla</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
