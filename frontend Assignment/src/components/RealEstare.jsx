import "./realE.css";
import home from "../assets/home.png";
import M from "../assets/M.png";

const RealEstare = () => {
  return (
    <>
    <div className="realE">
      <h2>Elevate <span style={{color:"#0078FF",lineHeight:"72px"}}>Real Estate Success</span> with Osumare's Digital Expertise</h2>
      <p>Tailored Solutions for Thriving in the Digital Real Estate Landscape</p>
      <button>Get Started</button>
      <img style={{width:"500px",display:"flex",marginLeft:"auto",marginRight:"auto"}} src={home} alt="home" />
      <h2 style={{marginTop:"80px",fontWeight:"bold",fontSize:"22px"}}>Real Estate-Focused Digital Mastery</h2>
      <div style={{display:"flex"}}>
        <div className="left">
            <img  src={M} alt="M" />
        </div>
        <div className="right">
            <h1>Unlock the Potential of Digital Real Estate Excellence</h1>
            <p>At Osumare, we understand that the real estate landscape demands a digital presence that aligns with the intricacies of property marketing. Our range of specialized services is meticulously designed to catapult your brand's success in the ever-evolving digital property market.</p>
            <button>Get Started</button>
        </div>
    </div> 
    </div>
   


    </>
  )
}

export default RealEstare
