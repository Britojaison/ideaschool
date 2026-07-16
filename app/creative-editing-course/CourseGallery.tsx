import Image from "next/image";

const row1Images = [
  "/images/gallery1.webp",
  "/images/gallery2.webp",
  "/images/gallery3.webp",
  "/images/gallery4.webp",
  "/images/gallery5.webp",
  "/images/gallery6.webp",
];

const row2Images = [
  "/images/gallery7.webp",
  "/images/gallery8.webp",
  "/images/gallery9.webp",
  "/images/gallery10.webp",
  "/images/gallery11.webp",
  "/images/gallery12.webp",
];

const row3Images = [
  "/images/gallery13.webp",
  "/images/gallery14.webp",
  "/images/gallery15.webp",
  "/images/gallery16.webp",
  "/images/gallery17.webp",
  "/images/gallery18.webp",
];

export default function CourseGallery() {
  return (
    <section className="courseGallerySection" aria-label="Course Gallery">
      <div className="courseGalleryInner">
        <div className="mentorSectionIntro">
          <span className="sectionPill">Gallery</span>
          <h2>A Glimpse Into the Program</h2>
        </div>
        
        <div className="galleryRowContainer">
          <div className="galleryTrack trackRightToLeft">
            {[...row1Images, ...row1Images, ...row1Images].map((src, idx) => (
              <div className="galleryImageWrapper" key={`r1-${idx}`}>
                <Image
                  src={src}
                  alt={`Gallery image ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="galleryImage"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="galleryRowContainer">
          <div className="galleryTrack trackLeftToRight">
            {[...row2Images, ...row2Images, ...row2Images].map((src, idx) => (
              <div className="galleryImageWrapper" key={`r2-${idx}`}>
                <Image
                  src={src}
                  alt={`Gallery image ${idx + 7}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="galleryImage"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="galleryRowContainer">
          <div className="galleryTrack trackRightToLeft">
            {[...row3Images, ...row3Images, ...row3Images].map((src, idx) => (
              <div className="galleryImageWrapper" key={`r3-${idx}`}>
                <Image
                  src={src}
                  alt={`Gallery image ${idx + 13}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="galleryImage"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
