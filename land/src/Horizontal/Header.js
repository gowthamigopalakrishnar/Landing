import React, { Component } from 'react'
import HSLogo from '../assests/img/HSLogo.svg'
import './header.css'

export default class Header extends Component {
  render() {
    return (
      <div>
        <section class="hsg-comarketing-header" data-background="white">
          
        


            <div id="myDIV">

                                                        <div id="mymain">
                                                        <div><img src={HSLogo} alt="HSLogo_color"/></div>
                                                        <div class='content'></div>
                                                        <div > <img src="https://offers.hubspot.com/hubfs/cincopa_logo.png" alt="cincopa_logo" width='141px'  height='40' />
                                                         </div>
                                                       
                                                        </div>

                                                        </div>
        </section>
    </div>
        )
  }
}
