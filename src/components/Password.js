import { useState } from "react"


function Password({labelTitle, labelStyle, type, containerStyle, defaultValue, placeholder, updateFormValue, updateType}){

    const [value, setValue] = useState(defaultValue)

    const updateInputValue = (val) => {
        setValue(val)
        updateFormValue({updateType, value : val})
    }

    return(
        <div className={`form-control ${containerStyle}`}>
            <label className="label">
                <span className="label">{labelTitle}</span>
            </label>
            <input type={type || "password"} value={value} placeholder={placeholder || ""} onChange={(e) => updateInputValue(e.target.value)}className="form-control" />
        </div>
    )
}


export default Password