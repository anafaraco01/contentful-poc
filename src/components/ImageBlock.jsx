import React from 'react'
import style from '../styles/imageBlock.module.scss'
import commonStyle from '../styles/common.module.scss'
import ContentfulImage from './ContentfulImage';

export default function ImageBlock({ content }) {
    const {image, imageAlignment, theme} = content.fields;
    const getMarginStyle = () => {
        switch (imageAlignment) {
            case 'Left':
                return { marginRight: '130px' , width: '90%'};
            case 'Right':
                return { marginLeft: '130px', width: '90%' };
            case 'Full Width':
            default:
                return {};
        }
    };
    const getBackgroundStyle = () => {
        switch (theme) {
            case 'Light':
                return { backgroundColor: 'white' };
            case 'Dark':
                return { backgroundColor: 'black' };
            case 'Top Dark & Rest White':
                return {
                    background: 'linear-gradient(to bottom, black 0%, black 33%, white 33%, white 100%)',
                };
            case 'Half Dark & Half White':
                return {
                    background: 'linear-gradient(to bottom, black 0%, black 50%, white 50%, white 100%)',
                };
            case 'Two Thirds Dark & Bottom White':
                return {
                    background: 'linear-gradient(to bottom, black 0%, black 67%, white 67%, white 100%)',
                };
            default:
                return {};
        }
    };
    return (
        <div className={`${commonStyle.container} ${style.container}`} style={getBackgroundStyle()}>
            <div className={commonStyle.subContainer}>
                <ContentfulImage className={commonStyle.image} style={getMarginStyle()} src={image.fields.file.url} width={image.fields.file.details.image.width} height={image.fields.file.details.image.height} alt={image.fields.title} />
            </div>
        </div>
    )
}
