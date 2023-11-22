import React, { useState } from "react";
import { decrement, increment, incrementByAmount, init } from '../../redux/winepadSlice';
import { useDispatch, useSelector } from 'react-redux';

function Dialog(props) {

  console.log("Dialog")
  console.log(props)


  const dispatch = useDispatch()

  const value = useSelector((state) => state.winepad.value)


  return (
    <div>
      789
    </div>
  )
}

export default Dialog