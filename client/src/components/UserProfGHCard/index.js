import React from "react";

function UserProfGHCard() {
  return (
    <div className="card-body">
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img
                  className="card-img-top"
                  data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                  alt="Thumbnail [100%x225]"
                  style={
                    ({ height: "225px" },
                    { width: "100%" },
                    { display: "block" })
                  }
                  src="https://source.unsplash.com/random"
                  data-holder-rendered="true"
                />
                <div className="card-body">
                  <h1>Joe Exotic</h1>
                  <p className="card-text">
                    I am a Full Stack Web Developer based off Lenexa Kansas
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        <i className="fa fa-envelope"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        <i className="fa fa-times"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img
                  className="card-img-top"
                  data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                  alt="Thumbnail [100%x225]"
                  style={
                    ({ height: "225px" },
                    { width: "100%" },
                    { display: "block" })
                  }
                  src="https://source.unsplash.com/random"
                  data-holder-rendered="true"
                />
                <div className="card-body">
                  <h1>Melinda Gates</h1>
                  <p className="card-text">
                    JavaScript Pro!! Developer at Google, Seattle WA
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        <i className="fa fa-envelope"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        <i className="fa fa-times"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img
                  className="card-img-top"
                  data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                  alt="Thumbnail [100%x225]"
                  style={
                    ({ height: "225px" },
                    { width: "100%" },
                    { display: "block" })
                  }
                  src="https://source.unsplash.com/random"
                  data-holder-rendered="true"
                />
                <div className="card-body">
                  <h1>Michael Scott</h1>
                  <p className="card-text">
                    Techlead at Microsoft, Currently based on California
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        <i className="fa fa-envelope"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        <i className="fa fa-times"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfGHCard;
