import React from "react";
import "./Spinner.css";

export default function LoadingSpinner(props) {
    return (
        <div className="spinner-container animate-spin" style={{ display: props.loading ? 'flex' : 'none' }}>
            <div className="border-4 border-[#f3f3f3] border-t-[#383636] rounded-full" style={{ width: props.size, height: props.size, borderColor: props.borderColor, borderTopColor: props.borderTopColor }}>
            </div>
        </div>
    );
}