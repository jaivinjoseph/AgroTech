import React from "react";
import "./Home.css";
import img1 from "../../images/h1.jpg";
import img3 from "../../images/m1.jpg";
import img4 from "../../images/m3.jpg";
import fr from "../../images/fru.jpeg";
import sp from "../../images/spc.jpg";
import vg from "../../images/veg.jpg";
import car from "../../images/cart1.png";
import far from "../../images/farm.jpg";
import per from "../../images/per.png";
import pub from "../../images/pub.png";
import pho from "../../images/pho.png";
import {Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/Account">MY ACCOUNT</Link>
          </li>
          <li>
            <a href="#footer">CONTACT US</a>
          </li>
        </ul>
      </nav>
      <nav className="nav2">
        <ul>
          <li>
            <a href="#shop" className="sh">
              SHOP
            </a>
          </li>
          <li className="ccc">
            <img src={car} alt="ca" className="ca"></img>
              <Link to="/Cart" className="cc">CART</Link>
          </li>
          <li>
           <Link to="/Login">LOGIN/SIGNUP</Link>
          </li>
        </ul>
      </nav>
      <div className="h">
        <img src={img1} alt="hello" className="imgg" />
        <div className="agro">
          <h className="aa">Agro-Tech</h>
        </div>
      </div>
      <div className="n">
        <div className="M">BUY AGRICULUTRAL PRODUCE ONLINE</div>
      </div>
      <div className="pa">
        <p>
          Welcome to <h className="gr"> ‘Agro-Tech’</h>
        </p>
      </div>
      <div className="bx">
        <div className="bb-1">
        <p className="paa">
          Buy Agric produce online (Buyers meet Farmers) -
          <br></br>
          farmers sell their produce directly to buyers without middlemen and <br></br>
          make more money from your farm produce.It's evident that <br></br>
          India has one of the largest agricultural markets around the <br></br>
          world, which is why it becomes important to have a service,<br></br>
          which can connect the farmers all over the country. This<br></br>
          would help them in maximizing their profits by selling their <br></br>
          farm produce at a better price by selling locally or where <br></br>
          farmer get maximum price.
        </p>
        </div>
        <div className="box">
          
          <div className="bx2">
            <div className="im">
              <img src={img3} alt="hello" className="img3" />
            </div>
            <div className="bx12" id="shopp">
              <a href="shopp" className="by">
                <h3>Buy Agri Produce</h3>
              </a>
              <h>
                Now Farmers can sell their produce directly to end consumers
                there are no more mediator.
              </h>
            </div>
          </div>
          <div className="bx3">
            <div className="imm">
              <img src={img4} alt="hello" classname="img3" />
            </div>
            <div className="bx13">
              <h3 className="by133">Anywhere, Anytime</h3>
              <h>
                Indias no 1 Marketplace for farmers can buy and sell their
                agriculture produce.
              </h>
            </div>
          </div>
        </div>
      </div>
      <div className="buy" id="buy">
        <div className="buy1">
          <h className="by1">Buy the produce</h>
        </div>
        <h className="by2">
          Here you can Buy  agriculture produce online
        </h>
      </div>
      <div className="bas" id="shop">
        <div className="vgg">
          <img src={vg} alt="veg" className="vegg"></img>
          <div className="veggg">
            <Link to="/vegetables" className="veeg">Vegetables</Link>
          </div>
        </div>
        <div className="fruu">
          <img src={fr} alt="fru" className="fruu"></img>
          <div className="fruuu">
            <Link to="/fruit" className="frut">Fruits</Link>
          </div>
        </div>
      </div>
      <div className="b2">
        <div className="spp">
          <img src={sp} alt="sp " className="spp"></img>
          <a href="/" className="sppp">
            <h>Spice</h>
          </a>
        </div>
      </div>
      <div className="farm">
        <h className="ho">How it works</h>
        <div className="all">
          <div className="farr">
            <img src={far} alt="farmer" className="far"></img>
          </div>
          <div className="wr">
            <div className="work">
              <div className="re">
                <div className="pe">
                  <img src={per} alt="hello" className="perr" />
                </div>
              </div>
              <div className="r">
                <h className="rr">Register Your Account</h>
                <h>
                  Users need to register their contact details to create an
                  account.
                </h>
              </div>
            </div>
            <div className="ppp">
              <div className="pu">
                <div className="puu">
                  <img src={pub} alt="pub" className="pub" />
                </div>
              </div>
              <div className="p">
                <h className="pp">Publish Listing</h>
                <h>farmers publish their produce.</h>
              </div>
            </div>
            <div className="ph">
              <div className="phh">
                <div className="phoo">
                  <img src={pho} alt="pub" className="pph" />
                </div>
              </div>
              <div className="z">
                <h className="zz">Waiting for a call</h>
                <h>
                  Anybody required particular produce they will contact directly
                  through your available contacts.
                </h>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="G-1">
        <div className="G-2">
        <Link to="/get-help"  className="gttt"> <h  className="get">
            Get-help?
          </h></Link>

        </div>

      </div>
      {/* footer */}
      <footer id="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section about">
              <h3>About Us</h3>
              <p> Grow with Agro-Tech </p>
            </div>
            <div className="footer-section contact">
              <h3>Contact Us</h3>
              <p>Irinjalakuda</p>
              <p>christ college of engineering</p>
              <p>Email: Agro-tech@example.com</p>
            </div>
            <div className="footer-section links">
              <h3>Links</h3>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">About Us</a>
                </li>
                <li>
                  <a href="/">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="fof">
        <h className="ffo">
          Copyright © Team4Progress 2022, All right reserved
        </h>
      </div>
    </>
  );
};
export default Home;
