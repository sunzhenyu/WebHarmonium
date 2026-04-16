export default function PedalOrganPost() {
  return (
    <div className="prose max-w-none">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">What is a Harmonium Pedal Organ? (History & Guide)</h1>
      <p>Have you ever seen an antique wooden keyboard instrument with foot pedals and wondered what it was? You might be looking at a <strong>harmonium pedal organ</strong>. If you are familiar with the modern Indian harmonium, the harmonium pedal organ might look like a giant version of it. In this blog, we will delve into what this instrument is, how it works, and why it is so rare today.</p>

      <h2>The Harmonium Pedal Organ: A Western Ancestor</h2>
      <p>A <strong>harmonium pedal organ</strong> is an acoustic, free-reed keyboard instrument. It is also known as a <strong>pump organ</strong> or <strong>parlor organ</strong>. While the Indian harmonium sits on the floor and is pumped by hand, the harmonium pedal organ is a large, upright piece of furniture. The musician sits on a bench or stool and uses two foot pedals to supply air to the bellows.</p>

      <h3>How Does the Mechanism Work?</h3>
      <p>The core mechanism is similar in both the harmonium pedal organ and the Indian harmonium:</p>
      <ul>
        <li><strong>Air Supply:</strong> When the player alternately pumps the two large foot pedals, air is either blown (pressure system, popular in Europe) or sucked (suction system, popular in the USA) into an internal reservoir.</li>
        <li><strong>The Reeds:</strong> The air is forced past a series of tuned brass or bronze reeds. The vibration of these free reeds creates a continuous, sustaining sound.</li>
        <li><strong>Polyphony:</strong> Because the feet are doing the pumping, the musician has both hands free to play complex chords, counterpoint, and melodies on the keyboard.</li>
      </ul>

      <h2>The Golden Age of the Harmonium Pedal Organ</h2>
      <p>During the late 19th and early 20th centuries, before the advent of electricity and the widespread availability of the acoustic piano, the <strong>harmonium pedal organ</strong> was arguably the most popular keyboard instrument in the Western world.</p>
      <p>It was much cheaper and lighter than a piano or a church pipe organ, making it perfect for small chapels, schools, and middle-class homes (hence the name "parlor organ"). Famous companies like Estey, Mason & Hamlin, and Alexandre Debain produced hundreds of thousands of these instruments.</p>
      <p>However, the harmonium pedal organ fell out of favor as pianos became more affordable and eventually electronic organs and synthesizers took their place.</p>

      <h2>Comparing the Indian Harmonium and Pedal Organ</h2>
      <div className="overflow-x-auto my-6">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="py-3 px-4 text-left font-semibold text-gray-700">Feature</th>
              <th className="py-3 px-4 text-left font-semibold text-gray-700">Harmonium Pedal Organ</th>
              <th className="py-3 px-4 text-left font-semibold text-gray-700">Indian Harmonium</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="py-3 px-4 font-medium text-gray-900">Playing Position</td>
              <td className="py-3 px-4 text-gray-600">Seated on a chair/bench</td>
              <td className="py-3 px-4 text-gray-600">Seated cross-legged on the floor</td>
            </tr>
            <tr className="border-b border-gray-100 bg-gray-50">
              <td className="py-3 px-4 font-medium text-gray-900">Bellows Control</td>
              <td className="py-3 px-4 text-gray-600">Two foot pedals</td>
              <td className="py-3 px-4 text-gray-600">One hand pushing/pulling a back panel</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-3 px-4 font-medium text-gray-900">Keyboard Use</td>
              <td className="py-3 px-4 text-gray-600">Two hands for chords & melody</td>
              <td className="py-3 px-4 text-gray-600">One hand for melody</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="py-3 px-4 font-medium text-gray-900">Drone/Shruti</td>
              <td className="py-3 px-4 text-gray-600">None (Focus on Western harmony)</td>
              <td className="py-3 px-4 text-gray-600">Built-in drone stops for Indian tuning</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
        <h3 className="text-xl font-bold mt-0 mb-2 text-gray-800">Can't Find an Antique? Try Digital!</h3>
        <p className="mb-0">While finding a working harmonium pedal organ today is a challenge, you can easily play its modern descendant right now. <a href="/harmonium" className="text-orange-600 font-bold hover:underline">Experience our Virtual Harmonium Online</a> for free!</p>
      </div>
    </div>
  );
}
