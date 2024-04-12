export const Navbar = () =>{
    //const imagePath = require('./img/Header/Subtract.png');
    return (
      <>
        <header>
          <div className="container mx-auto">
              <div className="flex justify-between px-32 py-4 ">
                <div className="flex justify-center items-center">
                    loremsanty
                </div>
                <div className="flex justify-center items-center">
                  <a href="#" className="navbarCustome customColorBlue pr-8">Home</a>
                  <a href="#" className="navbarCustome pr-8">about</a>
                  <a href="#" className="navbarCustome pr-8">packages</a>
                  <a href="#" className="navbarCustome pr-8">FAQ</a>
                  <a href="#" className="navbarCustome pr-8">community</a>
                </div>
                <div className="">
                    <button className="customeBtn customeBtnSing">Sing up</button>
                    <button className="customeBtn customeBtnLogin ml-4">login</button>
                </div>
              </div>
          </div>
        </header>
      </>
    )
  }