import {BiMenu } from "react-icons/bi";
function Home ()
{
    return (
        <div className="main">
            
            <div className="sectionone">
              <div className="header">
              <h1 id="read">SHAPEL</h1>
              <BiMenu size={100}/> 
            </div>
            <div className="center">
            <div className="c1">
            <p>INTERIOR DESIGN</p>
            <p> STUDIO</p> 
            </div>
            <div className="c2">
             <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
             </div>
             <div className="c3">
              <button id="button"><a href="kh" class="none2"> CONTACTUS</a></button></div>
          
            </div>
            </div>
                          
        </div>
        

    )
}
export default Home; 