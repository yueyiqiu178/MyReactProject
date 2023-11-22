import React, { useState } from "react";
import MyButton from './MyButton';
import Dialog from './Dialog'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount, init } from '../../redux/winepadSlice';


function Winepad() {

    console.log("Winepad")
    const dispatch = useDispatch()

    const value = useSelector((state) => state.winepad.value)
    const wineList = useSelector((state) => state.winepad.wineList)

    const wineListCount = useSelector(function (state) {
        return state.winepad.wineList.length;
    });

    console.log(value)
    console.log(wineList)
    console.log(wineListCount)

    const [addnew, setAddnew] = useState(false)
    const [count, setCount] = useState(wineListCount)

    console.log(addnew)
    console.log(setAddnew)

    return (
        <div className="Whinepad">
            <div className="WhinepadToolbar">
                <div className="WhinepadToolbarAdd">
                    <MyButton
                        onClick={() => setAddnew(true)}
                        className="WhinepadToolbarAddButton">
                        + add
                    </MyButton>
                </div>
                <div className="WhinepadToolbarSearch">
                    <input
                        placeholder={count === 1
                            ? 'Search 1 record...'
                            : `Search ${count} records...`
                        }
                    //   onChange={CRUDActions.search.bind(CRUDActions)}
                    //   onFocus={CRUDActions.startSearching.bind(CRUDActions)} 
                    />
                </div>
            </div>
            <div className="WhinepadDatagrid">
                {/* <Excel /> */}
            </div>
            {addnew ?
                <input value="JIIII"></input>
                //   ? <Dialog 
                //       modal={true}
                //       header="Add new item"
                //       confirmLabel="Add"
                //       onAction={this._addNew.bind(this)}
                //     >
                //       <Form ref="form" />
                //     </Dialog>
                : null}


            <Dialog
                modal={true}
                header="Add new item"
                confirmLabel="Add"
                //onAction={this._addNew.bind(this)}
            />

        </div>
    )
}

export default Winepad