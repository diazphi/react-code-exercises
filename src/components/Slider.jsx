import React, { useEffect, useState } from "react";
import { Slide, SlideBtn } from "./Elements";
export const Slider = () => {
    const [slideIndex, setslideIndex] = useState(0);
    const dataSlider = [
        {
            id: 20230209153022,
            title: 'Slider 1',
            sub: 'Sub Title 1'
        },
        {
            id: 20230209153029,
            title: 'Slider 2',
            sub: 'Sub Title 2'
        },
        {
            id: 20230209153054,
            title: 'Slider 3',
            sub: 'Sub Title 3'
        },
        {
            id: 20230209153056,
            title: 'Slider 4',
            sub: 'Sub Title 4'
        },
        {
            id: 20230209153232,
            title: 'Slider 5',
            sub: 'Sub Title 5'
        }
    ]
    const onClickNext = () => {
        setslideIndex((cindex) => {
            if(cindex < dataSlider.length - 1) {
                return cindex+1;
            } else {
                return cindex=0;
            }
        })
    }
    const onClickPrev = () => {
        setslideIndex((cindex) => {
            if(cindex > 0) {
                return cindex-1;
            } else {
                return cindex=dataSlider.length - 1;
            }
        })
    }
    useEffect(() => {
        console.log('index'+slideIndex);
        console.log('length'+dataSlider.length);
    })
    return (
        <div className="slider block max-w-lm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h2>Slider</h2>
            {dataSlider.map((slide,index) => (
                <Slide key={index} id={slide.id} active={slideIndex} title={slide.title} index={index}/>
            ))}           
             <SlideBtn label={'<<'} action={'prev'} onClick={onClickPrev} />
             <SlideBtn label={'>>'} action={'next'} onClick={onClickNext} />
        </div>
    )
}