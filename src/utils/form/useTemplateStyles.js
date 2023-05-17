import { css } from "styled-components";
import defaultTemplateStyles from "./defaultTemplate";

const defaultTmpl = defaultTemplateStyles;

const getShapeStyles = (template) => {
    switch (template.shape) {
        case "ROUND":
            return css`
        border-radius: 5px;
      `;
        default:
            return css`
        border-radius: 0;
      `;
    }
};

const getTextStyles = (template) => {
    return css`
    font-weight: ${template.fontStyle === "BOLD" ? "bold" : "normal"};
    font-size: ${template.fontSize === "LARGE" ? "24px" : "16px"};
    text-align: ${template.textAlign};
    font-family: ${template.fontFamily};
    color: ${template.color};
    line-height: ${template.lineHeight};
    letter-spacing: ${template.letterSpacing};
  `;
};

const getBorderStyles = (template) => {
    return css`
    border-color: ${template.borderColor === "LIGHT" ? "#eee" : "#333"};
    border-width: ${template.borderSize === "MEDIUM" ? "1px" : "2px"};
  `;
};

const getBackgroundStyles = (template) => {
    return css`
    background-color: ${template.backgroundColor};
  `;
};

// const getPaddingMarginStyles = (template) => {
//     return css`
//     padding: ${template.padding};
//     margin: ${template.margin};
//   `;
// };

const getBoxShadowStyles = (template) => {
    return css`
    box-shadow: ${template.boxShadow};
  `;
};

const getSizeStyles = (template) => {
    return css`
    width: ${template.width || '100%'};
    height: ${template.height};
    max-width: ${template.maxWidth};
    max-height: ${template.maxHeight};
  `;
};

const getTemplateStyles = (template) => {
    return css`
    ${getShapeStyles(template)}
    ${getTextStyles(template)}
    ${getBorderStyles(template)}
    ${getBackgroundStyles(template)}
    ${getBoxShadowStyles(template)}
    ${getSizeStyles(template)}
  `;
};

export const useTemplateStyles = (template) => {
    const mergedTemplate = {
        ...defaultTmpl,
        ...Object.fromEntries(
            Object.entries(template).filter(
                ([key, value]) => value !== null && value !== undefined && value !== ""
            )
        ),
    };

    const styles = getTemplateStyles(mergedTemplate);

    return {mergedTemplate,styles}
};
