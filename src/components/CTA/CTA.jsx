

export const CTA  = () => {

    return (
        <>
            <div className=" bg-blue-400 flex items-center gap-x-8">
                <div className="ml-6">
                    <svg width="238" height="224" viewBox="0 0 238 224" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M233.933 64.6668C219.933 3.06683 166.2 -24.6665 119 -24.6665C119 -24.6665 119 -24.6665 118.867 -24.6665C71.8 -24.6665 17.9334 2.93349 3.93338 64.5335C-11.6666 133.333 30.4667 191.6 68.6001 228.267C82.7334 241.867 100.867 248.667 119 248.667C137.133 248.667 155.267 241.867 169.267 228.267C207.4 191.6 249.533 133.467 233.933 64.6668ZM119 131.467C95.8 131.467 77.0001 112.667 77.0001 89.4668C77.0001 66.2668 95.8 47.4668 119 47.4668C142.2 47.4668 161 66.2668 161 89.4668C161 112.667 142.2 131.467 119 131.467Z" fill="white" fill-opacity="0.8"/>
                    </svg>
                </div>
                <div className="">
                    <div className="text-white">
                        <h1 className="text-lg">Join our newsletter to stay up to date </h1>
                        <p className="text-sm">Stay connected with our brand</p>
                    </div>
                </div>

                <div className="flex py-10 gap-x-3 mx-auto">
                    <input type="text" placeholder="Enter your email" className="pl-11 py-3 rounded-lg pr-10"/>
                    <button className="bg-gray-900 rounded-lg py-3 px-6 text-white">Subscribe</button>
                </div>

            </div>
        </>
    )

}