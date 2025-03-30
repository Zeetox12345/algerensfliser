import React from 'react';

const DIYvsProSection = () => {
  return (
    <section id="diy-vs-pro" className="section bg-gradient-to-b from-gray-50 to-blue-50">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-lg mb-6 text-center">Gør-Det-Selv vs. Professionel Algerens af Fliser</h2>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p className="lead mb-6">
              Er du i tvivl om, hvorvidt du selv skal rense dine fliser for alger, eller om du bør hyre et professionelt firma? Brug vores omfattende tjekliste til at træffe den rette beslutning for dine fliser.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 my-8">
              <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-500">
                <h3 className="text-xl font-semibold mb-4 text-blue-700">Gør-Det-Selv Algerens af Fliser</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Tidsforbrug</h4>
                    <p className="text-sm text-gray-600 mb-2">Har du 2-4 timer til rådighed per 20-30 m² fliseareal?</p>
                    <div className="flex items-center">
                      <div className="h-2 w-full bg-gray-200 rounded-full">
                        <div className="h-2 bg-blue-500 rounded-full" style={{ width: '70%' }}></div>
                      </div>
                      <span className="ml-2 text-sm">Tidskrævende</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">Udstyr til Algerens</h4>
                    <p className="text-sm text-gray-600 mb-2">Har du adgang til eller vil investere i nødvendigt udstyr?</p>
                    <ul className="text-sm space-y-1">
                      <li className="flex items-center">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Højtryksrenser (helst med terrassevasker)</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Skrubbebørster (forskellige hårdheder)</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Algerensemidler og sprøjtedunke</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Beskyttelsesudstyr (briller, handsker)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">Tryghed ved Arbejdsprocessen</h4>
                    <p className="text-sm text-gray-600 mb-2">Føler du dig tryg ved arbejde med vand, kemikalier og eventuelt højtryksrensning?</p>
                    <div className="flex items-center">
                      <div className="h-2 w-full bg-gray-200 rounded-full">
                        <div className="h-2 bg-blue-500 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                      <span className="ml-2 text-sm">Middel kompleksitet</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">Fliseareal til Algerens</h4>
                    <p className="text-sm text-gray-600 mb-2">Er flisearealet relativt lille (under 40-50 m²)?</p>
                    <div className="flex items-center">
                      <div className="h-2 w-full bg-gray-200 rounded-full">
                        <div className="h-2 bg-blue-500 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                      <span className="ml-2 text-sm">Ideelt for DIY</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">Algebegroningens Omfang</h4>
                    <p className="text-sm text-gray-600 mb-2">Er algebegroningen ikke alt for genstridig eller langvarig?</p>
                    <div className="flex items-center">
                      <div className="h-2 w-full bg-gray-200 rounded-full">
                        <div className="h-2 bg-blue-500 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                      <span className="ml-2 text-sm">God chance for succes</span>
                    </div>
                  </div>
                </div>
                
                <h4 className="font-medium mt-6 mb-2">Fordele ved DIY Algerens af Fliser</h4>
                <ul className="text-sm space-y-1">
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Sparede udgifter til professionel hjælp</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Fleksibilitet i forhold til tidspunkt</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Tilfredshed ved at klare opgaven selv</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Kontrol over anvendte produkter og metoder</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-500">
                <h3 className="text-xl font-semibold mb-4 text-green-700">Professionel Algerens af Fliser</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Kvalitet af Resultat</h4>
                    <p className="text-sm text-gray-600 mb-2">Ønsker du et garanteret resultat og længerevarende effekt?</p>
                    <div className="flex items-center">
                      <div className="h-2 w-full bg-gray-200 rounded-full">
                        <div className="h-2 bg-green-500 rounded-full" style={{ width: '95%' }}></div>
                      </div>
                      <span className="ml-2 text-sm">Overlegen kvalitet</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">Flisetyper til Algerens</h4>
                    <p className="text-sm text-gray-600 mb-2">Har du et stort areal eller særligt sarte natursten?</p>
                    <ul className="text-sm space-y-1">
                      <li className="flex items-center">
                        <span className="text-green-600 mr-2">•</span>
                        <span>Store arealer (over 50-60 m²)</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-600 mr-2">•</span>
                        <span>Værdifulde natursten (marmor, travertin, etc.)</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-600 mr-2">•</span>
                        <span>Gamle eller skrøbelige fliser</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-600 mr-2">•</span>
                        <span>Specialfliser med unik finish</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">Undgå Risiko for Skader</h4>
                    <p className="text-sm text-gray-600 mb-2">Vil du undgå risiko for at beskadige fliserne selv?</p>
                    <div className="flex items-center">
                      <div className="h-2 w-full bg-gray-200 rounded-full">
                        <div className="h-2 bg-green-500 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                      <span className="ml-2 text-sm">Minimal risiko</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">Tidsprioritering</h4>
                    <p className="text-sm text-gray-600 mb-2">Værdsætter du din tid mere end besparelsen ved DIY?</p>
                    <div className="flex items-center">
                      <div className="h-2 w-full bg-gray-200 rounded-full">
                        <div className="h-2 bg-green-500 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                      <span className="ml-2 text-sm">Betydelig tidsbesparelse</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">Specialbehandlinger ved Algerens</h4>
                    <p className="text-sm text-gray-600 mb-2">Kræver dine fliser specialbehandlinger?</p>
                    <ul className="text-sm space-y-1">
                      <li className="flex items-center">
                        <span className="text-green-600 mr-2">•</span>
                        <span>Imprægnering efter algerens</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-600 mr-2">•</span>
                        <span>Fugeforsegling for langvarig beskyttelse</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-600 mr-2">•</span>
                        <span>Særlig behandling mod genstridigt mos eller lav</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <h4 className="font-medium mt-6 mb-2">Fordele ved Professionel Algerens af Fliser</h4>
                <ul className="text-sm space-y-1">
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Specialiseret udstyr og professionelle produkter</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Hurtigere udførelse og mindre besvær</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Garanti på arbejdet og resultatet</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Ekspertise til forskellige flisetyper og problemer</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-100 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold mb-4">Cost-Benefit Analyse: Algerens Fliser</h3>
              
              <div className="overflow-x-auto">
                <table className="min-w-full border">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border p-3 text-left">Aspekt</th>
                      <th className="border p-3 text-left">Gør-Det-Selv Algerens</th>
                      <th className="border p-3 text-left">Professionel Algerens</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-3 font-medium">Omkostning</td>
                      <td className="border p-3">400-1.000 kr. for udstyr og midler</td>
                      <td className="border p-3">1.500-3.500 kr. for 40-60 m² fliser</td>
                    </tr>
                    <tr>
                      <td className="border p-3 font-medium">Tidsforbrug</td>
                      <td className="border p-3">4-8 timer for 40-60 m²</td>
                      <td className="border p-3">1-3 timer for samme areal</td>
                    </tr>
                    <tr>
                      <td className="border p-3 font-medium">Effektivitet</td>
                      <td className="border p-3">Variabel, afhængig af erfaring</td>
                      <td className="border p-3">Konsistent høj kvalitet</td>
                    </tr>
                    <tr>
                      <td className="border p-3 font-medium">Holdbarhed</td>
                      <td className="border p-3">6-12 måneder</td>
                      <td className="border p-3">1-2 år med professionel imprægnering</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="bg-purple-50 border-l-4 border-purple-500 p-4 my-8">
              <p className="text-purple-800">
                <strong>Konklusion:</strong> Hvis du svarer "ja" til flest punkter i "Professionel Hjælp," er det værd at overveje en ekspert til algerens af dine fliser. Særligt ved værdifulde natursten, store arealer eller behov for længerevarende resultater kan professionel hjælp være den mest omkostningseffektive løsning på lang sigt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DIYvsProSection; 