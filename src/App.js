import "./style.css";
function Resume() {
  return (
    <div className="port">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid" style={{ padding: "10px" }}>
          <div className="d-flex justify-content-between align-items-center w-100">
            <a className="navbar-brand px-4 fw-bold" href="#port" style={{ color: "whitesmoke" }}>PORTFOLIO</a>
            <button className="navbar-toggler" style={{ backgroundColor: "whitesmoke" }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" style={{ color: "whitesmoke" }}></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link px-3 fw-bold" aria-current="page" href="#home" style={{ color: "whitesmoke" }}>HOME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3 fw-bold" href="#about" style={{ color: "whitesmoke" }}>ABOUT</a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3 fw-bold" href="#education" style={{ color: "whitesmoke" }}>EDUCATION</a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3 fw-bold" href="#experience" style={{ color: "whitesmoke" }}>EXPERIENCE</a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3 fw-bold" href="#skills" style={{ color: "whitesmoke" }}>SKILLS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3 fw-bold" href="#project" style={{ color: "whitesmoke" }}>PROJECTS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3 fw-bold" href="#contact" style={{ color: "whitesmoke" }}>CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div id="home" className="home" style={{ border: "1px solid #1b1b1b", boxShadow: "2px" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="text-center py-5" style={{ color: "whitesmoke" }}>
                <h2>I'm Deepika R</h2>
                <p className="fw-semibold fs-4 py-2">Intern as a <span className="fw-bold fs-4" style={{ color: "teal" }}> Python Full Stack Developer</span> at <span className="fs-4"><a href="https://gtyde.com/" target="_blank" style={{ textDecoration: "none", color: "rgb(250, 73, 3)" }}>GTyde Technologies Pvt Ltd,Bangalore.</a></span></p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-center img-hover">
                <img src="Deepika.jpg" alt="profile" className="img-fluid"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="about" className="container-fluid about py-4" style={{ border: "1px solid #1b1b1b", boxShadow: "2px" }}>
        <h2 className="fw-bold text-center" style={{ color: "teal"}}>About Me</h2>
        <p className="text-center px-5 py-2 fs-5" style={{ color: "whitesmoke" }}>
          I have over 6 Months of experience working in Python Full stack Developer. Currently, I am working Intern as a Python Full Stack Developer
          at GTyde Technologies Pvt Ltd , where I develop functionalities for web
          applications and building web products for clients. I'm deeply passionate
          about creating loved and trusted products that help people navigate their
          careers and achieve their career goals.
        </p>
      </div>
      <div id="education" className="container-fluid edu py-4" style={{ border: "1px solid #1b1b1b", boxShadow: "2px" }}>
        <h2 style={{ color: "teal" }} className="fw-bold text-center">Education</h2>
        <div className="text-center py-1" style={{ color: "whitesmoke" }}>
          <h4>BE-Bachelor of Engineering | Anna University</h4>
          <p className="fs-5">Government College of Engineering, Dharmapuri, Tamil Nadu [ Jun 2019 - Jul 2023 ]</p>
          <p className="fs-6">CGPA : 8.46 / 10</p>
        </div>
      </div>
      <div id="experience" className="container-fluid exp py-4" style={{ border: "1px solid #1b1b1b", boxShadow: "2px" }}>
        <h2 style={{ color: "teal" }} className="fw-bold text-center">Experience [ Intern ]</h2>
        <div className="text-center py-1" style={{ color: "whitesmoke" }}>
          <h4>Python Full Stack Developer [ Jul 2023 - Present ]</h4>
          <p><i class="fa-solid fa-location-dot" style={{color:"blue"}}></i> Bengaluru , Karnataka</p>
        </div>
        <p className="text-center px-5 py-2 fs-5" style={{ color: "whitesmoke" }}>
        • Develop frontend and backend functionalities to improve responsiveness and
overall performance. Integrate user-facing elements into applications.<br/>
• Test and debug programs and Improve functionality of existing systems.<br/>
• Coordinate with internal teams to understand user requirements and provide
technical solutions.<br/>
• Builds table frames and forms and writes script within the browser to enhance
site functionality.
        </p>
      </div>
      <div id="skills" className="container-fluid skill py-4" style={{ border: "1px solid #1b1b1b", boxShadow: "2px" }}>
      <h2 style={{ color: "teal" }} className="fw-bold text-center">My Skills</h2><br/>
      <div className="row justify-content-center">
        <h3 className="text-center" style={{color:"rgb(250, 73, 3)"}}>Frontend</h3>
            <div className="col-5 col-md-2 py-2 px-1 text-center">
              <img className="image" src="https://logos-download.com/wp-content/uploads/2017/07/HTML5_logo.png"></img>
            </div>
            <div className="col-5 col-md-2 py-2 px-1 text-center">
              <img className="image" src="https://www.logolynx.com/images/logolynx/s_db/dbef5539884535031b032b49dcccf89e.png"></img>
            </div>
            <div className="col-5 col-md-2 py-2 px-1 text-center">
              <img className="image" src="https://ictacademy.com.ng/wp-content/uploads/2020/02/92.-JavaScript-logo.png"></img>
            </div>
            <div className="col-5 col-md-2 py-2 px-1 text-center">
              <img className="image" src="https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png"></img>
            </div>
            <div className="col-5 col-md-2 py-2 px-1 text-center">
              <img className="image" src="http://pluspng.com/img-png/bootstrap-png-bootstrap-512.png"></img>
            </div>
          </div><br/><br/>
          <div className="row d-flex justify-content-center">
          <h3 className="text-center" style={{color:"rgb(250, 73, 3)"}}>Backend</h3>
            <div className="col-6 col-md-2 py-2 px-1 text-center">
              <img className="image" src="https://logodownload.org/wp-content/uploads/2019/10/python-logo-2.png"></img>
            </div>
            <div className="col-6 col-md-2 py-2 px-1 text-center">
              <img className="image" src="https://logospng.org/download/django/django-1536.png"></img>
            </div>
            <div className="col-6 col-md-2 py-2 px-1 text-center">
              <img className="image" src="https://pngimg.com/uploads/mysql/mysql_PNG23.png"></img>
            </div>
          </div>
      </div>
      <div id="project" className="container-fluid pro py-4" style={{ border: "1px solid #1b1b1b", boxShadow: "2px" }}>
      <h2 style={{ color: "teal" }} className="fw-bold text-center">Projects </h2>
      <div className="py-2">
        <h3 className="text-center" style={{color:"rgb(250, 73, 3)"}}>E-Commerce Application [ 09 2023 - 10 2023 ]</h3>
        <h5 className="text-center" style={{ color: "whitesmoke" }} >Website : <a href="https://main--aesthetic-wisp-02764e.netlify.app/" target="_blank"> https://main--aesthetic-wisp-02764e.netlify.app/ </a></h5>
        <p className="text-center" style={{ color: "grey" }} >Skills : HTML/HTML5 , CSS/CSS3 , JavaScript , React JS ,Bootstrap.</p>
        <p className="text-center fs-5 px-3" style={{ color: "whitesmoke" }} >• An e-commerce project is an online platform that allows customers to purchase
products or services through the internet.<br/>
• It is the virtual space where you showcase products, and online customers
make selections.Your website acts as the product shelves, sales staff, and
cash register of your online business channel.</p>
      </div>
      <div className="py-3">
        <h3 className="text-center" style={{color:"rgb(250, 73, 3)"}}>Weather Application [ 10 2023 - 11 2023 ]</h3>
        <h5 className="text-center" style={{ color: "whitesmoke" }} >Website : <a href="https://splendorous-yeot-25af1c.netlify.app/" target="_blank"> https://splendorous-yeot-25af1c.netlify.app/ </a></h5>
        <p className="text-center" style={{ color: "grey" }} >Skills : HTML/HTML5 , CSS/CSS3 , JavaScript , React JS ,Bootstrap.</p>
        <p className="text-center fs-5 px-3" style={{ color: "whitesmoke" }} >• Weather App is the application of science and technology to predict the conditions of the atmosphere for a given location and time. It’s a way of predicting
things like cloud cover, rain, snow, wind speed, and temperature before they
happen.</p>
      </div>
      </div>
      <div id="contact" className="container-fluid con py-4 px-2" style={{ border: "1px solid #1b1b1b", boxShadow: "2px" }}>
      <h2 style={{ color: "teal" }} className="fw-bold text-center">Contact </h2>
      <div className="d-flex flex-column flex-sm-row justify-content-around text-center py-3 fs-4">
            <div className="mb-2 fs-4" style={{cursor: "pointer"}} ><i class="fa-solid fa-envelope" style={{color:" red"}}></i><a href="mailto:deepikaramulu1@gmail.com" style={{textDecoration:"none",color:"whitesmoke"}}>deepikaramulu1@gmail.com</a></div>
            <div className="fs-5 px-2" style={{ color: "whitesmoke" }}><i class="fa-brands fa-github px-1 fs-4" style={{color:"#4078c0"}}></i><a href="https://github.com/Deepika-EC" style={{textDecoration:"none",color:"whitesmoke"}}>Deepika-EC</a></div>
        <div className="fs-5 px-2" style={{ color: "whitesmoke" }}><i class="fa-brands fa-linkedin px-1 fs-4" style={{color:"#0077B5"}}></i><a href="https://linkedin.com/in/deepika-r-605483275" style={{textDecoration:"none",color:"whitesmoke"}}>Deepika R</a></div>
      </div>
      <div className="d-flex flex-column flex-sm-row justify-content-around text-center py-3 fs-4">
      <div className="fs-5 px-2" style={{ color: "whitesmoke" }}><i class="fa-solid fa-location-dot fs-4" style={{color:"blue"}}></i> Bengaluru , Karnataka</div>
      <div className="mb-2 fs-4" style={{cursor: "pointer",color:"whitesmoke"}}><i class="fa-solid fa-phone-flip ms-3" style={{color:" green"}}></i><a href="tel:+916369974087" style={{textDecoration:"none",color:"whitesmoke"}}>+91-6369974087</a></div>
      <div className="mb-2 fs-4" style={{cursor: "pointer",color:"whitesmoke"}}><i class="fa-brands fa-whatsapp ms-3" style={{color:" #075E54"}}></i><a href="https://wa.me/916369974087" style={{textDecoration:"none",color:"whitesmoke"}}>+91-6369974087</a></div>
      </div>
      </div>
    </div>
  )
}
export default Resume;