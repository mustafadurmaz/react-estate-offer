import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Form.css";

function Form() {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    tel: "",
    tutar: "",
  });

  return (
    <div className="App">
      <div class="container">
        <button
          type="button"
          class="btn btn-primary float-end rounded-pill"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Teklif Gönder
        </button>

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title text-secondary" id="exampleModalLabel">
                  İletişim Bilgileri
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form className="teklifForm">
                  <div class="mb-3 d-flex justify-content-around">
                    <input
                      class="min-vw-45 p-1 rounded-pill"
                      type="text"
                      class="form-control"
                      name="name"
                      value={form.name}
                      placeholder="Ad"
                    />

                    <input
                      className="min-vw-45 p-1 rounded-pill"
                      type="text"
                      class="form-control"
                      name="surname"
                      value={form.surname}
                      placeholder="Soyad"
                    />
                  </div>
                  <div class="mb-3 d-flex justify-content-around">
                    <input
                      className="min-vw-45 p-1 rounded-pill"
                      type="email"
                      class="form-control"
                      name="email"
                      placeholder="Eposta Adresi"
                    />

                    <input
                      className="min-vw-45 p-1 rounded-pill"
                      type="text"
                      class="form-control"
                      name="tel"
                      placeholder="Cep Telefonu"
                    />
                  </div>
                  <div class="mb-3 d-flex justify-content-around">
                    <input
                      className="min-vw-45 p-1 rounded-pill"
                      type="text"
                      class="form-control"
                      name="tutar"
                      placeholder="Teklif Tutarı"
                    />
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-primary rounded-pill"
                  data-bs-dismiss="modal"
                >
                  Kaydet
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
