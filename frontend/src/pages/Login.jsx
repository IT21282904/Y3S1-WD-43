import Swal from 'sweetalert2';

const message = {
  "uName":" ",
  "password":" "
}
const login = async(e) =>{
  e.preventDefault();
  try{
    message.uName = document.getElementById('uName').value;
    message.password = document.getElementById('password').value;


  
     let response = await fetch('http://localhost:5000/log-in', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify(message)
     });
 
     let data = await response.json();
     if(response.status == 200) {Swal.fire({
       title: 'loged!',
       text: 'The user has been loged successfully.',
       icon: 'success',
       confirmButtonText: 'Okay'
     })}
     else{
       Swal.fire('Oops!', "login unsuccessfull", 'error');
     }
 
 }
 catch(error){
   console.log(error);
 }
}
const Login = () => {
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
              <h5 class="card-title text-center pb-0 fs-4" style={{margin: '20%', marginBottom: '10%'}}>Login to Your Account</h5>
              <p class="text-center small">Enter your username & password to login</p>
            </div>

            <form class="row g-3 needs-validation" novalidate>

              <div class="col-12">
                <label for="uName" class="form-label">Username</label>
                <div class="input-group has-validation">
                  <span class="input-group-text" id="inputGroupPrepend">@</span>
                  <input type="text" name="uName" class="form-control" id="uName" required/>
                  <div class="invalid-feedback">Please enter your username.</div>
                </div>
              </div>

              <div class="col-12">
                <label for="yourPassword" class="form-label">Password</label>
                <input type="password" name="password" class="form-control" id="password" required/>
                <div class="invalid-feedback">Please enter your password!</div>
              </div>

              
              <div class="col-12">
                <button class="btn btn-primary w-100" type="submit" onClick={login}>Login</button>
              </div>
              <div class="col-12">
                <p class="small mb-0">Don't have account? <a href="/register">Create an account</a></p>
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
  };
  
  export default Login;