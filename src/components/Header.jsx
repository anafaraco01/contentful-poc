import style from '../styles/header.module.scss'
import React from 'react'
import ContentfulImage from './ContentfulImage'

export default function Header({content}) {
 
    const { headingFirstLine, headingSecondLine, headingSize, svg, background } = content.fields;
    const getFontSyze = () => {
        switch (headingSize) {
          case 'Large':
            return { fontSize: '90px' };
          case 'Medium':
            return { fontSize: '65px' };
        }
      };
    return (
    
    <div className={style.container}>
        {background.fields.file.contentType.startsWith('video') ? (
            <video className={style.background} autoPlay loop muted playsInline>
                <source src={background.fields.file.url} type={background.mimeType} />
            </video>     
        ) : (
            <ContentfulImage className={style.background} src={background.fields.file.url} alt={background.fields.title} width={background.fields.file.details.image.width} height={background.fields.file.details.image.height} />
        )}
        <div className={style.content}>
            <h1 className={style.heading} style={getFontSyze()}>{headingFirstLine}</h1>
            {headingSecondLine && (
                    <h1 className={style.heading} style={getFontSyze()}>{headingSecondLine}</h1>
                )}
            <ContentfulImage className={style.svg} src={svg.fields.file.url} width={svg.fields.file.details.image.width} height={svg.fields.file.details.image.height} alt={svg.fields.title} />
        </div>
    </div>
  )
}
