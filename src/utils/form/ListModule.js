import ListItemModule from "./ListItemModule";
import {useReducer} from "react";
import React from 'react';


const listReducer = (state, action) => {
    switch (action.type) {
        case 'OPTION' :
            return ({

            })
        default :
    }
}
const listInitialState = ([data, info, template]) => {

    const layout = template.listLayout;
    switch (info.tagType) {
        case "OPTION" :
            return ({
                htmlReturn:
                    <div>
                        <select>
                            {data.map((datum) => (
                                <ListItemModule key={datum.id} datum={datum} info={info} template={template}/>
                            ))}
                        </select>
                    </div>
            });
        default :
            return ({
                htmlReturn:
                    <div
                        // style={{display:'flex', flexDirection:layout}}
                    >
                        <div>{data.label}</div>
                        <div>
                        {data.map((datum) => (
                            <ListItemModule key={datum.id} datum={datum} info={info} template={template}/>))}
                        </div>
                    </div>

            })
    }
}


const ListModule = (props) => {

    const {data, info, template} = props
    const [state, dispatcher] = useReducer(listReducer,[data,info, template],listInitialState);

    return(
        state.htmlReturn
    );
}
export default React.memo(ListModule);