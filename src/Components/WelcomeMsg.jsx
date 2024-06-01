const WelcomeMsg = () =>{
  return <center className="welcome-msg">
             {/* <h1 className="welcome-msg">There are no post available...</h1> */}
             <div className="px-4 py-5 my-5 text-center">
    
    <h1 className="display-5 fw-bold text-body-emphasis">There are no post available</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">#CreateAndDelete #ExpressYourself #SocialMediaFreedom</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        {/* <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Primary button</button> */}
        {/* <button type="button" className="btn btn-outline-secondary btn-lg px-4"
        onClick={onGetPostClick}>Get Post From Server</button> */}
      </div>
    </div>
  </div>
          </center>  
}

export default WelcomeMsg;