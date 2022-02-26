import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Form.css";
import axios from 'axios';

function Form() {
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
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = async() => {
    // store the states in the form data
    const formData = new FormData();
    formData.append("id", 1)
    formData.append("name", form.name)
    formData.append("surname", form.surname)
    formData.append("email", form.email)
    formData.append("tel", form.tel)
    formData.append("tutar", form.tutar)
  
    try {
      // make axios post request
      const response = await axios({
        method: "post",
        url: "http://localhost:5000/posts",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch(error) {
      console.log(error)
    }
  }

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
                <form className="teklifForm" onSubmit={handleSubmit}> 
                  <div class="mb-3 d-flex justify-content-around">
                    <input
                      class="min-vw-45 p-1 rounded-pill"
                      type="text"
                      class="form-control"
                      name="name"
                      value={form.name}
                      placeholder="Ad"
                      onChange={handleChange}
                    />

                    <input
                      className="min-vw-45 p-1 rounded-pill"
                      type="text"
                      class="form-control"
                      name="surname"
                      value={form.surname}
                      placeholder="Soyad"
                      onChange={handleChange}
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
