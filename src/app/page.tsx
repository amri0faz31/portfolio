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
       
            <div className="relative z-0">
                <div>
                <hr className="hr-glow" />
                </div>






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
                <div className="flex flex-col sm:flex-row justify-between p-3 sm:p-4 my-8 gap-6 sm:gap-10 border-0 border-dashed border-green-500 rounded-lg">
               
                  <div className=" flex flex-col gap-2  items-start border-0  border-solid border-green-500 rounded-lg">

                    {/* Container A (now on top) */}
                    <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
                      <div className="w-15 h-9 flex items-left ">
                         <img 
                         src="/react.png" 
                        alt="React Logo" 
                        className="glow-blue-img max-w-full max-h-full object-contain"
                        />
                      </div>
                      <div className="w-20 h-13 flex items-center justify-center">
                        <img 
                        src="/spring.png" 
                        alt="Spring Boot Logo" 
                        className="glow3-img max-w-full max-h-full object-contain"
                        />
                      </div>
                      <div className="w-15 h-13 flex items-center justify-center">
                        <img 
                        src="/net1.png" 
                        alt="Spring Boot Logo" 
                        className="glow1-blue-img max-w-full max-h-full object-contain"
                        />
                    
                      </div>
                    </div>
                 
                 {/* Container B (now below) */}
                 <div className="flex flex-wrap justify-center items-start gap-3 sm:gap-4">
                  <div className="w-9 h-9 flex items-left ">
                     <img 
                       src="/c1.png" 
                       alt="React Logo" 
                       className="glow4-img  max-w-full max-h-full object-contain"
                     />
                   </div>
                   <div className="w-9 h-9 flex items-left ">
                     <img 
                       src="/cpp.png" 
                       alt="React Logo" 
                       className="glow4-img  max-w-full max-h-full object-contain"
                     />
                   </div>
                  <div className="w-9 h-9 flex items-left ">
                     <img 
                       src="/cc.png" 
                       alt="React Logo" 
                       className="glow4-img  max-w-full max-h-full object-contain"
                     />
                   </div>
                      <div className="w-6 h-9 flex items-center justify-center">
                     <img 
                       src="/java.png" 
                       alt="React Logo" 
                       className="glow4-img  max-w-full max-h-full object-contain"
                     />
                   </div>
                   
                   <div className="w-9 h-9 flex items-left ">
                     <img 
                       src="/html.png" 
                       alt="React Logo" 
                       className="glow4-img  max-w-full max-h-full object-contain"
                     />
                   </div>
                   <div className="w-9 h-9 flex items-left ">
                     <img 
                       src="/css.png" 
                       alt="React Logo" 
                       className="glow4-img  max-w-full max-h-full object-contain"
                     />
                   </div>
                   <div className="w-7 h-9 flex  items-left item-center justify-center">
                     <img 
                       src="/js.png" 
                       alt="React Logo" 
                       className="glow4-img  max-w-full max-h-full object-contain"
                     />
                   </div>
                
                   <p className="text-m text-slate-300 glow4 font-roboto-mono">
                    
                    </p>
                 </div>
                 
                 </div>
                

               </div>
               
               
              
               
               
             </div>
         
          <div>
                <hr className="hr-glow" />
                </div>
          
       
          
        </main>
      </div>
    </div>
  );
}