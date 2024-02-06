import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(null);

  const close = () => {
    setIsOpen(null);
  };

  return (
    <div className="d-flex flex-column gap-5">
      <h1>Anasayfa</h1>

      <h1>Kategoriler</h1>

      <a href="/">Elektronik</a>
      <a href="/">Giyim</a>

      <a href="/">Teknoloji</a>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti quod
        aliquid recusandae perferendis deserunt, at placeat exercitationem.
        Sequi sed et maxime vitae? Obcaecati nulla quibusdam distinctio dicta
        minima tenetur adipisci.
      </p>

      <button onClick={() => setIsOpen("login")} className="btn btn-dark">
        giriş yap
      </button>
      <button onClick={() => setIsOpen("mode")} className="btn btn-dark">
        koyu mod
      </button>
      <button onClick={() => setIsOpen("warn")} className="btn btn-dark">
        uyarı
      </button>

      {isOpen === "login" ? (
        <Modal close={close}>
          <form>
            <input type="text" />
            <input type="text" />
          </form>
        </Modal>
      ) : isOpen === "warn" ? (
        <Modal close={close}>
          <h3>silmek istediğinizden emin misiniz</h3>
        </Modal>
      ) : isOpen === "mode" ? (
        <Modal close={close}>
          <label htmlFor="">koyu mod</label>
          <input type="checkbox" />
        </Modal>
      ) : (
        ""
      )}

      {/* modal bişelen kulanımı */}

      {/* <Modal /> */}

      {/* hoc bileşen kullanımı */}
      {/* <Modal>
        <h2>silmek istediğinizden emin misiniz</h2>
      </Modal>

      <Modal>
        <label>şifre</label>
        <input type="text" />
      </Modal>
      <Modal>
        <label>şifre</label>
        <input type="text" />
      </Modal> */}
    </div>
  );
}

export default App;
