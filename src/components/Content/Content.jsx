
export const Card  = (props) =>{

    return (
        <div className={`${props.style} mb-8`}>
            <div className="mb-8 mt-8">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore provident nesciunt quis, 
            </div>
            <div className="mb-8">
                <p>An outstanding resource for travel enthusiasts! The website destination reviews and travel advice were spot-on. I now trust their recommendations for all my trips...</p>
            </div>
            <div className="flex gap-x-4">
                <div >
                    <img src="/public/img/Testimonial/01.png" alt="" />
                </div>
                <div>
                    <h1>Hendra Paru Paru</h1>
                    <p>Travel Enthusiast</p>
                </div>
            </div>
        </div>
    )
}


export const Content = () => {

    return (

        <>
            <div className="container mx-auto flex gap-x-8">
                <div className="w-1/3 gap-y-8">
                    <Card style ="p-8 rounded-lg shadow-md h-auto gap-y-8"/>
                    <Card style ="p-8 rounded-lg shadow-md h-auto gap-y-8"/>
                    <Card style ="p-8 rounded-lg shadow-md h-auto gap-y-8"/>        
                </div>
                <div className="w-1/3 gap-y-8 pt-7">
                    <Card style ="p-8 rounded-lg shadow-md h-auto gap-y-8"/>
                    <Card style ="p-8 rounded-lg shadow-md h-auto gap-y-8"/>
                    <Card style ="p-8 rounded-lg shadow-md h-auto gap-y-8"/>        
                </div>
                <div className="w-1/3 gap-y-8">
                    <Card style ="p-8 rounded-lg shadow-md h-auto gap-y-8"/>
                    <Card style ="p-8 rounded-lg shadow-md h-auto gap-y-8"/>
                    <Card style ="p-8 rounded-lg shadow-md h-auto gap-y-8"/>        
                </div>     
            </div>
        </>
   
    )
    

}






