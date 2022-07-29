import React from "react";

function Cart() {

  const handleCheckOut = (e) => {
    e.preventDefault()
    alert("Congratulations for your Purchase!!!")
  }

  return (
    <div className="underTheNavbar">
      <div className="cartContainer d-flex justify-content-between align-items-center">
        <div className="cartImage">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="A shoe"
            style={{ width: "600px" }}
            className="img-fluid"
          />
        </div>
        <form>
          <div class="row mb-4">
            <div class="col">
              <div class="form-outline">
                <input type="text" id="form6Example1" class="form-control" />
                <label class="form-label" for="form6Example1">
                  First name
                </label>
              </div>
            </div>
            <div class="col">
              <div class="form-outline">
                <input type="text" id="form6Example2" class="form-control" />
                <label class="form-label" for="form6Example2">
                  Last name
                </label>
              </div>
            </div>
          </div>

          <div class="form-outline mb-4">
            <input type="text" id="form6Example4" class="form-control" />
            <label class="form-label" for="form6Example4">
              Address
            </label>
          </div>

          <div class="form-outline mb-4">
            <input type="email" id="form6Example5" class="form-control" />
            <label class="form-label" for="form6Example5">
              Email
            </label>
          </div>

          <div class="form-outline mb-4">
            <input type="number" id="form6Example6" class="form-control" />
            <label class="form-label" for="form6Example6">
              Phone
            </label>
          </div>

          <button type="submit" onClick={handleCheckOut} class="btn btn-primary btn-block mb-4">
            Place order
          </button>
        </form>
      </div>
    </div>
  );
}

export default Cart;
