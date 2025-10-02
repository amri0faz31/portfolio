// src/app/page.tsx
import Sidebar from "./components/Sidebar";
import Header from "./components/Header"; // Import the Header component

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col ml-80  text-white">
      
      <Header />

      <div className="flex flex-1">
        <Sidebar />
        {/* removed VHS overlay scope marker */}
        
        <main className="flex-1 p-10 pt-34 overflow-y-auto relative ">
          <h1 className="text-4xl font-bold mb-4 font-press-start"></h1>
          <p className="text-lg text-green-500 glow3 font-roboto-mono mb-7">
            
          </p>
          <p className="text-lg glow4 text-blue-100 font-roboto-mono text-center">
            
          </p>

            <div className="relative z-0">
               <hr className="hr-glow " />

               <p className="text-lg text-green-500 glow3 font-roboto-mono text-center text-justify ml-20 mr-20 mt-10">
                 I am a 3rd year computer science undergraduate
                 asdfasd
                 at the University of Illinois Urbana-Champaign (UIUC). My interests lie in the fields of databases, operating systems, distributed systems, and cloud computing. I am passionate about building scalable and efficient software solutions that can handle large-scale data processing and storage.
               </p>
               
               <p className="text-lg text-green-500 glow3 font-roboto-mono text-center text-justify ml-20 mr-20 mt-5">
                 
               </p>
             </div>
         
          
          
       
          
        </main>
      </div>
    </div>
  );
}