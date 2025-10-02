export default function AlgorithmsPage() {
  return (
    
    <div className="flex min-h-screen flex-col ">
      
      
      
      {/* Main content - appears on the right */}
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-4">Algorithms</h1>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <a className="text-blue-600 underline" href="https://www.khanacademy.org/computing/computer-science/algorithms">
              Khan Academy – Algorithms
            </a>
          </li>
          <li>
            <a className="text-blue-600 underline" href="https://cs50.harvard.edu/x/2024/">
              Harvard CS50 (Week on Algorithms)
            </a>
          </li>
          <li>
            <a className="text-blue-600 underline" href="https://www.geeksforgeeks.org/fundamentals-of-algorithms/">
              GeeksForGeeks – Fundamentals of Algorithms
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}