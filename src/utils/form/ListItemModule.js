import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

const getTemplateStyle = (template) => {
    const labelStyles = css`
      font-weight: ${template.labelFontStyle === "BOLD" ? "bold" : "normal"} !important;
      text-align: ${template.labelTextAlign};
    `;

    const textStyles = css`
      font-weight: ${template.textFontStyle === "BOLD" ? "bold" : "normal"};
      text-align: ${template.textTextAlign};
    `;

    const layout = template.itemLayout === "column" ? "column" : "row";

    return css`
      display: flex;
      flex-direction: ${layout};
      justify-content: space-between;
      align-items: ${template.alignItems};
      margin: ${template.listItemMargin};
      padding: ${template.listItemPadding};

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

const ListItemModule = (props) => {
    const { datum, info, template } = props;
    const [value, setValue] = useState(datum.text);
    const [label, setLabel] = useState("");
    const [tagHtml, setTagHtml] = useState(null);
    const [tagType, setTagType] = useState(null);

    const changeHandler = (event) => {
        const { value } = event.target;
        setValue(value);
    };

    useEffect(() => {
        if (info.tagType === "TEXTAREA" || info.tagType === "CHECKBOX") {
            setLabel(<div style={{ fontWeight: "bold" }}>{datum.label}</div>);
        } else {
            setLabel(datum.label);
        }
        setTagType(info.tagType);

        switch (info.tagType) {
            case "TEXTAREA":
                setTagHtml(
                    <textarea
                        value={value}
                        onChange={(event) => changeHandler(event)}
                    />
                );
                break;
            case "CHECKBOX":
                setTagHtml(
                    <label>
                        <input type="checkbox" value={datum.text} />
                        <span>{datum.text}</span>
                    </label>
                );
                break;
            case "OPTION":
                setTagHtml(<option value={datum.text} label={datum.text} />);
                setLabel("");
                break;
            case "VIEW":
                setTagHtml(<div>{datum.text}</div>);
                setLabel(<div>{datum.label}</div>);
                break;
            default:
                break;
        }
    }, [datum, info, setValue, datum.text]);

    return tagType === "OPTION" ? (
        tagHtml
    ) : (
        <ListItem template={template}>
            {label} {tagHtml}
        </ListItem>
    );
};

export default React.memo(ListItemModule);
