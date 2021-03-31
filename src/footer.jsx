import React from 'react';
include 'fotter.css'

const Footer = () => {
    return(
        <div className "main-footer">
            <div className ="container">
                <div className="row">
             <!--   {/* Column1 */} -->
                    <div className="col">
                        <h1>Food For Fitness</h1>
                        <ul className="list-unstyled">
                            <li><b>About</b></li>
                            <li>How We Operate</li>
                            <li>Stockists</li>
                        </ul>
                    </div>

                     <!--   {/* Column2 */} -->
                    <div className="col">
                        <h1>Meals</h1>
                        <ul className="list-unstyled">
                            <li><b>About</b></li>
                            <li>How We Operate</li>
                            <li>Stockists</li>
                        </ul>
                    </div>

                     <!--   {/* Column3 */} -->
                    <div className="col">
                        <h1>Customer</h1>
                        <ul className="list-unstyled">
                            <li><b>About</b></li>
                            <li>How We Operate</li>
                            <li>Stockists</li>
                        </ul>
                    </div>

                      <!--   {/* Column4 */} -->
                    <div className="col">
                        <h1>News & Deals</h1>
                        <ul className="Customer Service">
                             <form action="action_page.php">
                                      <div class="container">
                                        <h2>Subscribe to our Newsletter</h2>
                                        <p>Lorem ipsum..</p>
                                      </div>

                                      <div class="container" style="background-color:white">
                                        <input type="text" placeholder="Email address" name="mail" required>
                                        
                                          <input type="checkbox" checked="checked" name="subscribe"> Daily Newsletter
                                      </div>

                                      <div class="container">
                                        <input type="submit" value="Subscribe">
                                      </div>
                                    </form> 
                        </ul>
                    </div>
                </div>
                 <footer>
  <p>Author: Hege Refsnes</p>
  <p><a href="mailto:hege@example.com">hege@example.com</a></p>
</footer> 
            </div>
    )

}

export default Footer;