// src/app/page.tsx
import Sidebar from "./components/Sidebar";
import Header from "./components/Header"; // Import the Header component

export default function HomePage() {
  return (
  <div className="flex min-h-screen flex-col md:ml-60 text-white" style={{ backgroundColor: "rgba(5, 11, 7, 1)" }}>
      
      <Header />

      <div className="flex flex-1">
        <Sidebar />
        {/* removed VHS overlay scope marker */}
        
  <main className="flex-1 p-4 sm:p-6 md:p-10 pt-24 sm:pt-28 md:pt-32 lg:pt-28 overflow-y-auto relative ">
       
                <hr className="hr-glow" />






            <div className="flex justify-between border-0 border-solid border-green-500 rounded-lg">
              <div className="p-2 sm:p-3 md:p-4 border-0 border-solid border-green-500 rounded-lg">
                   <div>
                     <h1 className="text-2xl text-green-600 glow32  font-serif New font-bold tracking-wide">AMRI FAZLUL</h1>
                     <h1 className="text-sm text-green-600 glow3  font-roboto-mono font-bold tracking-wide">BSc Computer Science</h1>
                      <div className="">
                        <h2 className="text-sm text-green-600 glow3  font-roboto-mono font-bold tracking-wide">SLIIT</h2>
                      </div>
                   </div>
              </div>

            </div>








              <div className="border-0 border-solid border-green-500 rounded-lg">
               <p className="text-sm text-green-600 glow3 font-roboto-mono text-center sm:text-justify border-0 p-3 sm:p-4 ">
                 I am a 3rd year computer science undergraduate
                 asdfasd
                 at the University of Illinois Urbana-Champaign (UIUC). My interests lie in the fields of databases, operating systems, distributed systems, and cloud computing. I am passionate about building scalable and efficient software solutions that can handle large-scale data processing and storage.
               </p>
               </div>
               
               {/* Mother container with VHS overlay */}
                {/* Tech stack section (simplified and balanced) */}
                <section aria-label="Tech stack" className="p-3 sm:p-4 my-8 border-0 border-dashed border-green-500 rounded-lg">
                  <div className="flex flex-wrap justify-start items-center gap-3 sm:gap-4">
                    <div className="w-15 h-9 flex items-left ">
                      <img src="/react.png" alt="React Logo" className="glow-blue-img max-w-full max-h-full object-contain" />
                    </div>
                    <div className="w-20 h-13 flex items-center justify-center">
                      <img src="/spring.png" alt="Spring Boot Logo" className="glow3-img max-w-full max-h-full object-contain" />
                    </div>
                    <div className="w-15 h-13 flex items-center justify-center">
                      <img src="/net1.png" alt=".NET Logo" className="glow1-blue-img max-w-full max-h-full object-contain" />
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap justify-start items-start gap-3 sm:gap-4">
                    <div className="w-9 h-9 flex items-left "><img src="/c1.png" alt="C" className="glow4-img max-w-full max-h-full object-contain" /></div>
                    <div className="w-9 h-9 flex items-left "><img src="/cpp.png" alt="C++" className="glow4-img max-w-full max-h-full object-contain" /></div>
                    <div className="w-9 h-9 flex items-left "><img src="/cc.png" alt="C#" className="glow4-img max-w-full max-h-full object-contain" /></div>
                    <div className="w-6 h-9 flex items-center justify-center"><img src="/java.png" alt="Java" className="glow4-img max-w-full max-h-full object-contain" /></div>
                    <div className="w-9 h-9 flex items-left "><img src="/html.png" alt="HTML" className="glow4-img max-w-full max-h-full object-contain" /></div>
                    <div className="w-9 h-9 flex items-left "><img src="/css.png" alt="CSS" className="glow4-img max-w-full max-h-full object-contain" /></div>
                    <div className="w-7 h-9 flex items-left item-center justify-center"><img src="/js.png" alt="JavaScript" className="glow4-img max-w-full max-h-full object-contain" /></div>
                  </div>
                </section>
        
                <div>
                  <hr className="hr-glow" />
                </div>

                {/* Projects section background between hr lines */}
                <section
                  className="relative my-1 rounded-lg overflow-hidden "
                  aria-label="Projects section"
                >
                  {/* Background: fixed image + gradient overlay */}
                  <div
                    className="absolute inset-0 bg-black bg-fixed bg-top bg-no-repeat bg-cover lg:bg-[length:90%_auto] xl:bg-[length:85%_auto]"
                    style={{ backgroundImage: "url('/b1.jpeg')" }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(14, 14, 14, 0.22), rgba(0, 0, 0, 0.4))",
                    }}
                  />
                  <div className="relative min-h-64 sm:min-h-72 md:min-h-80 p-4 sm:p-6 md:p-8">
                    <h2 className="text-green-600 glow3 font-roboto-mono text-xl md:text-2xl font-bold mt-0 sm:mt-1 ">
                      Projects section (coming soon)
                    </h2>
                    

                    {/* Left-to-right rectangles that wrap and grow the section vertically */}
                    <div className="mt-23 sm:mt-25 md:mt-27 grid grid-cols-1 gap-15">
          <div className="w-full h-44 sm:h-52 md:h-60 lg:h-64 rounded-md border-2 border-black bg-black/80 shadow-inner p-3"> 
                        <div className="flex h-full gap-4">
                          {/* Left column: image on top + extra container below */}
                          
                            <div className="relative overflow-hidden border-3 border-black/20 rounded h-32 sm:h-36 md:h-40 lg:h-44 self-center">
                              <img
                                src="/p11.jpeg"
                                alt="Project 1 thumbnail"
                                className="w-full h-full object-cover"
                              />
                            </div>
                         

                          {/* Right column: description aligned from top to bottom */}
                          <div className="flex-1 h-full flex flex-col justify-start items-start">
                            <h3 className="text-sm sm:text-base font-semibold text-green-500 glow3">Project 1</h3>
                            <p className="mt-1 text-sm sm:text-sm text-green-500 glow3 leading-snug">
                              Brief description of the project goes here. Highlight the tech stack and a
                              one-line value proposition.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="w-full h-28 sm:h-32 md:h-36 lg:h-40 rounded-md border border-white/10 bg-black/40 shadow-inner p-3"> 
                        <span className="text-xs text-slate-300">Card 2</span>
                      </div>
                      <div className="w-full h-28 sm:h-32 md:h-36 lg:h-40 rounded-md border border-white/10 bg-black/40 shadow-inner p-3"> 
                        <span className="text-xs text-slate-300">Card 3</span>
                      </div>
                      <div className="w-full h-28 sm:h-32 md:h-36 lg:h-40 rounded-md border border-white/10 bg-black/40 shadow-inner p-3"> 
                        <span className="text-xs text-slate-300">Card 4</span>
                      </div>
                     
                      
                       
                    </div>
                  </div>
                </section>

                <div>
                  <hr className="hr-glow" />
                </div>
       
          
        </main>
      </div>
    </div>
  );
}