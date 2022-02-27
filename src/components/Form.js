import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Form.css";
import axios from "axios";
import { binlik } from "./functions";
// import { init,send } from "../socketApi";

function Form({ params, offerList }) {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    tel: "",
    tutar: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  console.log(offerList);
  const handleSubmit = (e) => {
    const offerObject = {
      id: params.id,
      name: form.name,
      surname: form.surname,
      email: form.email,
      tel: form.tel,
      tutar: form.tutar,
    };

    if (offerObject.tutar <= offerList[0]?.tutar) {
      alert(
        `Lütfen ${binlik(offerList[0].tutar)}₺'den daha büyük bir değer girin`
      );
    } else {
      axios
        .post("http://localhost:3001/createoffer", offerObject)
        .then((res) => {})
        .catch((error) => {
          console.log(error);
        });
      window.location.reload(true);
    }
  };

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
                      onChange={handleChange}
                      required
                    />

                    <input
                      className="min-vw-45 p-1 rounded-pill"
                      type="text"
                      class="form-control"
                      name="surname"
                      value={form.surname}
                      placeholder="Soyad"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div class="mb-3 d-flex justify-content-around">
                    <input
                      className="min-vw-45 p-1 rounded-pill"
                      type="email"
                      class="form-control"
                      name="email"
                      value={form.email}
                      placeholder="Eposta Adresi"
                      onChange={handleChange}
                    />

                    <input
                      className="min-vw-45 p-1 rounded-pill"
                      type="text"
                      class="form-control"
                      name="tel"
                      value={form.tel}
                      placeholder="Cep Telefonu"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div class="mb-3 d-flex justify-content-around">
                    <input
                      className="min-vw-45 p-1 rounded-pill"
                      type="text"
                      class="form-control"
                      name="tutar"
                      value={form.tutar}
                      placeholder="Teklif Tutarı"
                      onChange={handleChange}
                    />
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="submit"
                  class="btn btn-primary rounded-pill"
                  data-bs-dismiss="modal"
                  onClick={handleSubmit}
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
