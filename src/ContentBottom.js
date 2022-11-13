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
                <div className="bottom-content">
                    <p>
                        "We needed the same printed design as the one we had ordered a week prior.
                        Not only did they find the original order, but we also received it in time.
                        Excellent!"
                    </p>
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
                <div className="bottom-content">
                    <p>
                        "Customer service is always excellent and very quick turn around. Completely
                        delighted with the simplicity of the purchase and the speed of delivery."
                    </p>
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
                <div className="bottom-content">
                    <p>
                        "Put an order with this company and can only praise them for the very high
                        standard. Will definitely use them again and recommend them to everyone!"
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContentBottom;