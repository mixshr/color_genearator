import React, { useState, useEffect } from 'react'
import {toast} from "react-toastify";

const SingleColor = ({color, index}) => {
  const {hex, weight} = color;
  const saveToClipboard = async() => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(`#${hex}`);
      toast.success('Color copied to clipboard');
    } else {
      toast.error('Clipboard access not available');
    }
  };

  return <article
      className={index > 10 ? 'color color-light':'color'}
      style={{background:`#${hex}`}}
      onClick={saveToClipboard}
  >
    <p className='percent-value'>{weight}%</p>
    <p className='color-value'>#{hex}</p>
  </article>
}

export default SingleColor
