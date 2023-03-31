export default function Loading() {
    return (
        // <div className={`loadingBox${!isLoadingBoxActive ? ' loadingNone' : ''} `}>
        //     <div className="loadingEffect">
        //         <div className="loadingLogo">
        //             <div className="loadingLogo" style={{ backgroundImage: "url(/images/labirent.png)" }}></div>
        //         </div>
        //     </div>
        // </div>

        <div className={"loadingBox"}>
            <div className="loadingEffect">
                <div className="loadingLogo">
                    <div className="loadingLogo" style={{ backgroundImage: "url(/images/labirent.png)" }}></div>
                </div>
            </div>
        </div>
    )
}