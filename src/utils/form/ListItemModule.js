import React, { useReducer, useEffect } from 'react';
import styled, {css} from "styled-components";


const getTemplateStyle = (template) => {
    const labelStyles = css`
      font-weight: ${template.labelFontStyle === 'BOLD' ? 'bold' : 'normal'};
      text-align: ${template.labelTextAlign};
    `;

    const textStyles = css`
      font-weight: ${template.textFontStyle === 'BOLD' ? 'bold' : 'normal'};
      text-align: ${template.textTextAlign};
    `;

    const layout = template.itemLayout === 'column' ? 'column' : 'row';

    return css`
      display: flex;
      flex-direction: ${layout};
      justify-content: space-between;
      align-items: ${template.alignItems};
      margin-bottom: 10px;

      & > div:first-child {
        ${labelStyles}
      }

      & > div:last-child {
        ${textStyles}
      }
    `;
};

const ListItem = styled.div`
  ${({ template }) => getTemplateStyle(template)}
`;
const initialState = ([datum, info])=>{
    switch (info.tagType) {
        case 'TEXTAREA':
            return ({
                tagHtml: '',
                label: datum.label,
                tagType: info.tagType,
            })
        default :
            return ({
                tagHtml: '',
                label: datum.label,
                tagType: info.tagType,
            })
    }
};
const changeHandler = (event, dispatch, info, datum) => {
    const { value } = event.target;
    dispatch({ type: 'UPDATE_VALUE', payload: { value, info, datum } });
};

const renderTagReducer = (state, action) => {
    const { datum, info, dispatch } = action.payload;

    switch (info.tagType) {
        case 'TEXTAREA':
            return {
                ...state,
                tagHtml: (
                    <textarea
                        value={state.value}
                        onChange={(event) => changeHandler(event, dispatch, info, datum)}
                    />
                ),
                label: <div>{datum.label}</div>,
                tagType: info.tagType,
            };
        case 'CHECKBOX':
            return {
                ...state,
                tagType: 'CHECKBOX',
                tagHtml: (
                    <label>
                        <input type="checkbox" value={datum.text} />
                        <span>{datum.text}</span>
                    </label>
                ),
                label: <div>{datum.label}</div>,
            };
        case 'OPTION':
            return {
                ...state,
                tagType: 'OPTION',
                tagHtml: <option value={datum.text} label={datum.text} />,
                label: '',
            };
        case 'VIEW':
            return{
                ...state,
                tagType: 'VIEW',
                tagHtml:<div>{datum.text}</div>,
                label:<div>{datum.label}</div>
            }
        default:
            return state;
    }
};

const valueChangeReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_VALUE':
            return { ...state, value: action.payload };
        default:
            return state;
    }
};

const combinedReducer = (state, action) => {
    switch (action.type) {
        case'INIT':
            return renderTagReducer(state, action);
        case 'UPDATE_VALUE':
            return valueChangeReducer(state, action);
        default:
            return state;
    }
};

const ListItemModule = (props) => {
    const { datum, info,template } = props;
    const [state, dispatch] = useReducer(combinedReducer ,[datum,info],initialState);


    useEffect(() => {
        dispatch({ type: 'INIT', payload: { datum, info, dispatch } });
    }, [datum,info]);

    const { tagHtml, label, tagType } = state;

    return tagType === 'OPTION' ? tagHtml : <ListItem template={template}> {label} {tagHtml} </ListItem>;
};

export default React.memo(ListItemModule);
