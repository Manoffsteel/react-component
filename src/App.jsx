export const App =()=>{
  return (<div>

    <img src="IMAGE 2024-06-12 13:58:22.jpg" alt="my photo" width ="30%" />
    <h1>This is a heading 1 </h1>
    <p>this is a para </p>

    <Netflixseries></Netflixseries>
    <Netflixseries></Netflixseries>
    <Netflixseries></Netflixseries>
    <Netflixseries></Netflixseries>
    
    </div>
  ) }

  // return ek he kr skte h esliye div ke andr rakh diye 
  // or jisko khud ka closeing tag nhi hoota uisko close krna prega 


  // power of component
  //  netflix ka phla letter captial ha N MTLB component hua

  // KYA KIYE HAI just like funcn call hua ha 
  // jo kaam ko repeat karna tha usko compnent bana kr
  // baar baar call krdiye bs
    const Netflixseries=()=>{
      return (
        <div>
    <img src="IMAGE 2024-06-12 13:58:22.jpg" alt="my photo" width ="30%" />
    <h1>This is a heading 1 </h1>
    <p>this is a para </p>
    
    </div>

      );
    }