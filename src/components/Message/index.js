import ReactDOM, {unmountComponentAtNode} from "react-dom";
import React, {useEffect, useMemo} from "react";
import './index.css'

let wrap;
export const createMessage = () => {
    return (content, flag = true) => {
        if (typeof document === "undefined") {
            return;
        }
        if (!wrap) {
            wrap = document.createElement("div");
            wrap.classList.add('message-container');
            if (wrap) {
                document.body && document.body.appendChild(wrap);
            }
        }

        const newDiv = document.createElement("div");
        wrap.appendChild(newDiv);
        ReactDOM.render(
            <Message rootDom={wrap} parentDom={newDiv} content={content} flag={flag}/>,
            newDiv
        );
    };
};


export function Message(props) {
    const {rootDom, parentDom, content, flag} = props;

    const unmount = useMemo(() => {
        return () => {
            if (parentDom && rootDom) {
                unmountComponentAtNode(parentDom);
                rootDom.removeChild(parentDom);
            }
        };
    }, [parentDom, rootDom]);

    useEffect(() => {
        setTimeout(() => {
            unmount();
        }, 2000);
    }, [unmount]);
    return (
        <div className={flag ? "message success" : "message error"}>
            <div className="tips"></div>
            <div className="text">{content}</div>
        </div>
    );
}
