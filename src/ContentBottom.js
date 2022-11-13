import React from 'react';

const ContentBottom = () => {
    return (
        <div className="bottom-flex-part">
            <div className="first boxTwo">
                <div className="top-content flex">
                    <img src="./images/image-colton.jpg" alt="Colton"/>
                    <div className="column">
                        <div className="name-text">Colton Smith</div>
                        <div className="colored">Verified Buyer</div>
                    </div>
                </div>
            </div>
            <div className="second boxTwo">
                <div className="top-content flex">
                    <img src="./images/image-irene.jpg" alt="Irene"/>
                    <div className="column">
                        <div className="name-text ">Irene Roberts</div>
                        <div className="colored">Verified Buyer</div>
                    </div>
                </div>
            </div>
            <div className="third boxTwo">
                <div className="top-content flex">
                    <img src="./images/image-anne.jpg" alt="Anne"/>
                    <div className="column">
                        <div className="name-text">Anne Wallace</div>
                        <div className="colored">Verified Buyer</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentBottom;