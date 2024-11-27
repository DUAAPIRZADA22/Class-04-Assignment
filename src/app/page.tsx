import Image from "next/image";
import sectionImage from "../../public/images/Profile Photo.png"


import React from 'react'

function Home() {
  return (
    <div className="flex justify-center bg-gray-50 mt-[100px]">
      <div className="flex items-start bg-gray-50 w-[1120px] gap-[40px]">
        
        <div className="flex-1">
          <h1 className="text-[36px] font-bold leading-[1.2]">
            Hi, I&apos;m Mehmet <br /> Akif Karasu, 3D
            <br />artist & sculptor.
          </h1>

          <p className="mt-[20px] text-[18px] leading-[1.6] max-w-[600px]">
            My work is mainly focused on <br /> third-dimension modeling, texturing, and rendering. <br />
            I like exploring the creatures with a touch of dark surrealism <br />
            for characters and production.
          </p>
          <br />

          <p className="mt-[10px] text-[18px] leading-[1.6] max-w-[600px]">
            Now I&apos;m an interactive media design student in Istanbul —<br />
            currently freelancing and seeking internship opportunities.
          </p>
          <br/>
          <br />
         
          <div className="mt-[40px] space-y-[30px]">
            <div className="flex justify-between">
              <h2 className="text-[23px] font-bold underline decoration-black decoration-[2px] w-[160px]">
                Main Software
              </h2>
              <p className="text-[18px] max-w-[450px]">
                Pixologic ZBrush, Autodesk Maya, The Foundry Mari, Arnold Renderer, Blender, Forger
                <br /><br />
                Adobe CC, Figma, Ableton
              </p>
            </div>

            <div className="flex justify-between">
              <h2 className="text-[23px] font-bold underline decoration-black decoration-[2px] w-[160px]">
                Main Skills
              </h2>
              <p className="text-[18px] max-w-[450px]">
                Organic and Polygonal Modeling, UV Layout, Texturing, Retopology, Illustration, Sound Design
              </p>
            </div>
          </div>
        </div>


        <div className="flex-shrink-0 w-[330px] border-black h-[800px] overflow-hidden">
        <Image
            src ={sectionImage}
            alt="profile pic"
           className="mt-[-40px] h-[400px]"
          />
        </div> </div>
    </div>
  );
}

export default Home;

