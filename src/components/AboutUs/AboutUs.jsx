import React from 'react'
import useStyles from './styles';



const AboutUs = ( ) => {
    const classes = useStyles();
  

    return (
        
        <div>
            <div className={classes.toolbar}/>
        <title>aboutUs</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inconsolata" />
        <style dangerouslySetInnerHTML={{__html: "\n    body,\n    html {\n      height: 100%;\n      \n    }\n    ul{\n        list-style-type: none;\n    }\n\n    .bgimg {\n      background-position: center;\n      background-size: cover;\n      background-image: url(\"https://i.postimg.cc/hvscz0P0/background-about-us.png\");\n      min-height: 75%;\n    }\n\n    .menu {\n      display: none;\n    }\n  " }} />
        {/* Links (sit on top) */}
        {/* Header with image */}
        <header className="bgimg w3-display-container" id="home">
          <div className="w3-display-bottomleft w3-center w3-padding-large w3-hide-small">
            <span className="w3-tag">Open from #am to #pm</span>
          </div>
        
          <div className="w3-display-bottomright w3-center w3-padding-large">
            <span className="w3-text-white">Address ####</span>
          </div>
        </header>
        {/* Add a background color and large text to the whole page */}
        <div className="w3-sand  w3-large">
          {/* About Container */}
          <div className="w3-container" id="about">
            <div className="w3-content" style={{maxWidth: '700px'}}>
              <h5 className="w3-center w3-padding-64">
                <span className="w3-tag w3-wide">ABOUT US</span>
              </h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum cum
                perferendis, doloremque doloribus, earum aut odio iste dignissimos
                ab deleniti eos quam adipisci mollitia nisi similique obcaecati
                laudantium. Ducimus, corrupti!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                pariatur maxime, tenetur voluptate veritatis ipsam cupiditate
                quisquam dolores veniam laboriosam?
              </p>
              <div className="w3-panel w3-leftbar w3-light-grey">
                <p>
                  <i>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
                    soluta." Lorem ipsum dolor sit amet.</i>
                </p>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <img src="https://i.postimg.cc/hvscz0P0/background-about-us.png" alt="datepic" style={{width: '100%', maxWidth: '1000px'}} className="w3-margin-top" />
              <p><strong>Opening hours:</strong> everyday from #am to #pm.</p>
              <p><strong>Address:</strong> Lorem ipsum dolor sit amet.</p>
              <p><strong>Contact Information:</strong></p>
              <ul>
                <li><strong>Name:</strong> Lorem ipsum.</li>
                <li><strong>Telephone Number:</strong>987667980</li>
                <li><strong>Email:</strong>Loremipsum@gmail.com</li>
              </ul> 
            </div>
          </div>
        </div></div>
    )
}

export default AboutUs