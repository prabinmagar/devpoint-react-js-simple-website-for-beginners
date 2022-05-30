import React, {useState} from "react";
import data from "../../constants/data";
import images from "../../constants/images";
import "./Work.css";
import {FaTimesCircle} from "react-icons/fa";

const Work = () => {

    const [imageModal, setImageModal] = useState(false);
    const [imageSrc, setImageSrc] = useState("");

    const setImageOnModal = (src) => {
        setImageSrc(src);
        setImageModal(true);
    }

    return (
        <div className="work">
            <div className={imageModal ? "image__modal image__modal__show" : "image__modal"}>
                <div className="image__modal--content">
                    <FaTimesCircle className="modal__close--btn text__light bg__blue" size = {30} onClick = {() => setImageModal(false)} />
                    <img src = {imageSrc} alt = "" />
                </div>
            </div>

            <div className="work__content grid">
                {
                    data.works.map((work, index) => {
                        return (
                            <div className="work__content--item" key = {index} onClick = {() => setImageOnModal(work.img)}>
                                <img src = {work.img} alt = "" className="img" />
                                <div className="icon">
                                    <img src = {images.icon_eye} alt = "" />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Work;