import axios from 'axios';


const message = {
  "uID": '',
  "uName": '',
  "password": '',
  "isAdmin": true
};
let i = 1;



const fetchData =  (e) => {
  e.preventDefault();
  message.uID = document.getElementById('uID').value;
  message.uName = document.getElementById('uName').value;
  message.password = document.getElementById('password').value;
  message.isAdmin =  document.getElementById('isAdmin').value === 'true';
  try {
    const res = axios.post('/api/add-user',message);
    console.log(res.data);
  } catch (err) {
    console.error('Error fetching data:', err);
  }
};

const Register = () => {
    return (
      <>
        <div class="container">

<section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

        <div class="card mb-3">

          <div class="card-body">

            <div class="pt-4 pb-2">
              <h5 class="card-title text-center pb-0 fs-4">Create an Account</h5>
              <p class="text-center small">Enter your personal details to create account</p>
            </div>

            <form class="row g-3 needs-validation" onSubmit={fetchData}>
              

              <div class="col-12">
                <label for="yourEmail" class="form-label">User ID</label>
                <input  name="uID" class="form-control" id="uID" required/>
                <div class="invalid-feedback">Please enter a valid Email adddress!</div>
              </div>

              <div class="col-12">
                <label for="yourUsername" class="form-label">Username</label>
                <div class="input-group has-validation">
                  <span class="input-group-text" id="inputGroupPrepend">@</span>
                  <input type="text" name="uName" class="form-control" id="uName" required/>
                  <div class="invalid-feedback">Please choose a username.</div>
                </div>
              </div>

              <div class="col-12">
                <label for="yourPassword" class="form-label">Password</label>
                <input type="password" name="password" class="form-control" id="Password" required/>
                <div class="invalid-feedback">Please enter your password!</div>
              </div>

              <div class="col-12">
                <div class="form-check">
                  <input class="form-check-input" name="isAdmin" type="checkbox" value="false" id="idAdmin" 
                  onClick={()=>{ 
                      i++;
                      if(i%2 === 0){
                        document.getElementById('isAdmin').value = 'true';
                      }
                      else 
                      document.getElementById('isAdmin').value = 'false';
                  }} />
                  <label class="form-check-label" for="acceptTerms">Register as an admin </label>

                </div>
              </div>
              <div class="col-12">
                <button class="btn btn-primary w-100" type='submit'>Create Account</button>
              </div>
              <div class="col-12">
                <p class="small mb-0">Already have an account? <a href="/">Log in</a></p>
              </div>
            </form>

          </div>
        </div>

        

      </div>
    </div>
  </div>

</section>

</div>
      </>
    )
  }
  
  export default Register;