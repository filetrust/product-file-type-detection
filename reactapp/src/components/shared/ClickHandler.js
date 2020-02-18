import React, { useRef, useEffect } from "react";

function ClickHandler(props) {
    const ref = useRef(null);

    var onClick = (event) => {
        if (ref.current && !ref.current.contains(event.target))
            props.onClickOutside(event);
        else
            props.onClickInside(event);
    };

    useEffect(() => {
            document.body.addEventListener("mousedown", onClick, false);

            return () => {
                document.body.removeEventListener("mousedown", onClick, false);
            };
        },
        []);

    return <div ref={ref}>{props.children}</div>;
}

ClickHandler.defaultProps = {
    onClickInside: () => { },
    onClickOutside: () => { }
};

export default ClickHandler;