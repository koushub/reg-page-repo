import React, { useState } from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";

export default function Carousel() {
    const [activeCardIndex, setActiveCardIndex] = useState(0);
    const Headings = ["Personal Information", "Address", "ID Proof"];

    const handleNext = () => {
        console.log("Next button clicked");
        if (activeCardIndex < 2) {
            setActiveCardIndex(prevIndex => prevIndex + 1);
        }
    };

    console.log("Active card index:", activeCardIndex);

    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className={activeCardIndex === 0 ? "active" : ""} aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className={activeCardIndex === 1 ? "active" : ""} aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className={activeCardIndex === 2 ? "active" : ""} aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className={`carousel-item ${activeCardIndex === 0 ? "active" : ""}`}>
                        <Card1 Heading={Headings[0]} onNext={handleNext} />
                    </div>
                    <div className={`carousel-item ${activeCardIndex === 1 ? "active" : ""}`}>
                        <Card2 Heading={Headings[1]} onNext={handleNext} />
                    </div>
                    <div className={`carousel-item ${activeCardIndex === 2 ? "active" : ""}`}>
                        <Card3 Heading={Headings[2]} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" onClick={handleNext}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}
                                                                                                            