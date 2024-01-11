import React from "react";

interface Props {
    children?: string;
    appName?: string;
}

const Chat = ({children, appName}: Props) => {
    const name = appName ? appName : 'Chat';

    return (
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
            <div className="shrink-0">
                <img className="h-12 w-12" src="../../assets/images/icon.png" alt="ChitChat Logo"/>
            </div>
            <div>
                <div className="text-xl font-medium text-black">{name}</div>
                <p className="text-slate-500">{children}</p>
            </div>
        </div>
    )
}

export default Chat;