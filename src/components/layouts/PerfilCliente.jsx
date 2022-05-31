import React from "react";
import "./css/profile.css";
import "./css/calificacion.css";

export const PerfilCliente = () => {
  return (
    <div className="container">
      <div className="main-body">
        <div className="row cardsP gutters-sm">
          <div className="col-md-4 mb-3">
            <div className="cardP cardP-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150" />
                  <div className="mt-3">
                    <h4>John Doe</h4>
                    <p className="text-secondary mb-1">Estilista</p>
                    <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                    <div className="btnActivateM">
                      <label class="switch">
                        <input type="checkbox"/>
                        <span class="sliderP"></span>
                      </label>
                      <button className="btn btnM btn-outline-primary">
                        Mensaje
                      </button>
                    </div>
                  </div>
              </div>
            </div>
            <div className="card mt-3">
              <ul className="list-group list-group-flush" id="cambioCard">{/*Aqui hay algo innecesario   wh*/}
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bibi-whatsapp iconsM" viewBox="0 0 16 16">
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                    </svg>
                    WhatsApp
                  </h6>
                  <span className="text-secondary">https://bootdey.com</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-instagram mr-2 icon-inline text-danger"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    Instagram
                  </h6>
                  <span className="text-secondary">bootdey</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-facebook mr-2 icon-inline text-primary"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                    Facebook
                  </h6>
                  <span className="text-secondary">bootdey</span>
                </li>
                {/* <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <form className="clasificacionF">
                    <p className="clasificacion">
                      <input id="radio1" type="radio" name="estrellas" value="5" />
                      <label for="radio1">★</label>
                      <input id="radio2" type="radio" name="estrellas" value="4" />
                      <label for="radio2">★</label>
                      <input id="radio3" type="radio" name="estrellas" value="3" />
                      <label for="radio3">★</label>
                      <input id="radio4" type="radio" name="estrellas" value="2" />
                      <label for="radio4">★</label>
                      <input id="radio5" type="radio" name="estrellas" value="1" />
                      <label for="radio5">★</label>
                    </p>
                    <h6 className="mb-0">4.5</h6>
                  </form>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card mb-3">
              <div className="card-body">
              <div className="row">
                  <h6 className="col-sm-3 mb-0">Nombre Completo</h6>
                  <p className="col-sm-9 text-secondary">Kenneth Valdez</p>
                  {/* <input type="text" className="form-control col-sm-9" placeholder="Kenneth Valdez" /> */}
                </div>
                <hr />
                <div className="row">
                  <h6 className="col-sm-3 mb-0">E-mail</h6>
                  <p className="col-sm-9 text-secondary">fip@jukmuh.al</p>
                  {/* <input type="text" className="form-control col-sm-9" placeholder="fip@jukmuh.al" /> */}
                </div>
                <hr />
                <div className="row">
                  <h6 className="col-sm-3 mb-0">Número de Celular</h6>
                  <p className="col-sm-9 text-secondary">(239) 816-9029</p>
                  {/* <input type="text" className="form-control col-sm-9" placeholder="(239) 816-9029" /> */}
                </div>
                <hr />
                <div className="row">
                  <h6 className="col-sm-3 mb-0">Nombre de local</h6>
                  <p className="col-sm-9 text-secondary">Barber Server</p>
                  {/* <input type="text" className="form-control col-sm-9" placeholder="Barber Server" /> */}
                </div>
                <hr />
                <div className="row">
                  <h4 className="col-sm-3 mb-0">Dirección</h4>
                  <p className="col-sm-9 text-secondary">Bay Area, San Francisco, CA</p>
                  {/* <input type="text" className="form-control col-sm-9" placeholder="Bay Area, San Francisco, CA" /> */}
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-12">
                    <a
                      className="btn btn-info "
                      target="__blank"
                      href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills"
                    >
                      Edit
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-14 col-xl-14">
              <div class="cardP-box">
                <div class="tab-content"> {/*Puede no importar*/}
                  <div class="tab-pane show active" id="about-me">  
                    <ul class="list-unstyled timeline-sm">
                      <li class="timeline-sm-item">
                        <span class="timeline-sm-date">2015 - 19</span>
                        <h5 class="mt-0 mb-1">Lead designer / Developer</h5>
                        <p>websitename.com</p>
                        <p class="text-muted mt-2">Everyone realizes why a new common language
                          would be desirable: one could refuse to pay expensive translators.
                          To achieve this, it would be necessary to have uniform grammar,
                          pronunciation and more common words.</p>
                      </li> 
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
