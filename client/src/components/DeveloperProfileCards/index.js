import React from "react";

function DeveloperProfileCards() {
    return (
        <div class="card mb-3">
        
        <div class="card-body">
          

          <div class="album py-5 bg-light">
            <div class="container">
              <div class="row">
                <div class="col-md-4">
                  <div class="card mb-4 shadow-sm">
                    <img
                      class="card-img-top"
                      data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                      alt="Thumbnail [100%x225]"
                      style={
                          ({height: "225px"}, {width: "100%"}, {display: "block"})
                      }
                      src="https://source.unsplash.com/random"
                      data-holder-rendered="true"
                    />
                    <div class="card-body">
                      <h1>Joe Exotic</h1>
                      <p class="card-text">
                        I am a Full Stack Web Developer based off Lenexa Kansas
                      </p>
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                          <button
                            type="button"
                            class="btn btn-sm btn-outline-secondary"
                          >
                            <i class="fa fa-thumbs-up"></i>
                          </button>
                          <button
                            type="button"
                            class="btn btn-sm btn-outline-secondary"
                          >
                            <i class="fa fa-times"></i>
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
           </div>

     
    )
}
export default DeveloperProfileCards