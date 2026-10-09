import Image from "next/image";

export default function IndustryRecognitionSection() {
  return (
    <section className="industryRecognitionSection" aria-label="Industry Recognition">
      <div className="recognitionInner">
        
        <div className="recognitionHeader">
          <span className="recognitionSubtitle">INDUSTRY RECOGNITION // PRESS &amp; AWARDS</span>
          <h2>THE WORK HAS BEEN RECOGNISED TOO.</h2>
          <p>Press coverage, commercial campaigns, and creative industry recognition.</p>
        </div>

        <div className="recognitionCard">
          <div className="recognitionCardImage">
            <Image 
              src="/images/IMG_7839.jpg" 
              alt="Award-Winning Creative Work" 
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          
          <div className="recognitionCardContent">
            <div className="recognitionBadgeWrap">
              <span className="recognitionBadge">INDUSTRY RECOGNITION</span>
            </div>
            
            <h3>88GB Commercial Creative Recognition</h3>
            <p>Our work has been featured across creative industry publications including Exchange4Media, with commercial campaigns recognized for creative storytelling and visual craft.</p>
            
            <div className="recognitionFooter">
              <div className="rFooterItem">
                <h4>EXCHANGE4MEDIA</h4>
                <p>Industry press coverage</p>
              </div>
              <div className="rFooterItem">
                <h4>COMMERCIAL BRANDS</h4>
                <p>Campaign recognition</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
