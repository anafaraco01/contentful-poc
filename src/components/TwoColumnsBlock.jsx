import React from 'react'
import style from '../styles/twoColumnsBlock.module.scss'
import commonStyle from '../styles/common.module.scss'
import { PButton } from '@porsche-design-system/components-react/ssr'
import ContentfulImage from './ContentfulImage'


export default function TwoColumnsBlock({ content }) {
  const { lightHeading, boldHeading, paragraph1, paragraph2, image, direction, buttonLabel, buttonLink, icon, theme } = content.fields;
  
  const handleClick = () => {
    window.location.href = `/${buttonLink}`;
  };

  const getMarginStyle = () => {
    switch (direction) {
      case 'Default':
        return { marginRight: '40px' };
      case 'Reverse':
        return { marginLeft: '40px' };
    }
  };
  return (
    <div className={`${commonStyle.container} ${theme === 'Light' ? commonStyle.whiteBackground : ''}`}>
      <div className={`${style.subContainer} ${direction === 'Reverse' ? style.reverse : ''}`}>
        <div className={style.columnOne} style={getMarginStyle()}>
          <div className={commonStyle.headings}>
            {lightHeading && (
              <h1 className={commonStyle.lightHeading}>{lightHeading}</h1>
            )}
            <h2>{boldHeading}</h2>
          </div>
          <p className={commonStyle.text}>{paragraph1}</p>
          <p className={commonStyle.text}>{paragraph2}</p>
          {buttonLabel && (
            <PButton className={style.button} theme={theme === 'Dark' ? "dark" : "light"} variant="secondary" icon={icon === 'None' ? 'none' : 'arrow-head-right'} onClick={handleClick}>{buttonLabel}</PButton>
          )}
        </div>
        <div className={style.columnTwo}>
          <ContentfulImage className={commonStyle.image} src={image.fields.file.url} width={image.fields.file.details.image.width} height={image.fields.file.details.image.height} alt={image.fields.title} />
        </div>
      </div>
    </div>
  )
}
