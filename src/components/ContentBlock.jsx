import React from 'react'
import commonStyle from '../styles/common.module.scss'

export default function ContentBlock({content}) {
    const { lightHeading, boldHeading, paragraph1, paragraph2, paragraphAlignment, theme } = content.fields;
    const getMarginStyle = () => {
        switch (paragraphAlignment) {
          case 'Left':
            return { marginRight: '240px' };
          case 'Right':
            return { marginLeft: '240px' };
          case 'Justified':
          default:
            return {};
        }
      };
      return (
        <div className={`${commonStyle.container} ${theme === 'Light' ? commonStyle.whiteBackground : ''}`}>
          <div className={commonStyle.subContainer} style={getMarginStyle()}>
            <div className={commonStyle.headings}>
              <h1 className={commonStyle.lightHeading}>{lightHeading}</h1>
              <h2 className={commonStyle.boldHeading}>{boldHeading}</h2>
            </div>
            <p className={commonStyle.text}>{paragraph1}</p>
            {paragraph2 && (
            <p className={commonStyle.text}>{paragraph2}</p>
          )}
          </div>
        </div>
      )
}
