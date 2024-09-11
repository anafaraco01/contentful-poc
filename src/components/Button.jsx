import React from 'react'
import commonStyle from '../styles/common.module.scss'
import style from '../styles/button.module.scss'
import { PButton } from '@porsche-design-system/components-react/ssr'

export default function Button({content}) {
  const { buttonLabel, buttonLink, icon, alignment, theme } = content.fields;

    const handleClick = () => {
        window.location.href = `/${buttonLink}`;
    };

    const getMarginStyle = () => {
        switch (alignment) {
          case 'Left':
            return { marginRight: '240px' };
          case 'Right':
            return { marginLeft: '240px' };
        }
      };
  return (
    <div className={`${style.container} ${theme === 'Light' ? style.whiteBackground : ''}`}>
            <div className={commonStyle.subContainer} style={getMarginStyle()}>
            <PButton theme={theme === 'Dark' ? "dark" : "light"} variant="secondary" icon={icon === 'None' ? 'none' : 'arrow-head-right'} onClick={handleClick}>{buttonLabel}</PButton>
        </div>
    </div>
  )
}
