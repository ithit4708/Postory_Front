import ListItemModule from "./ListItemModule";
import React, { useState } from "react";
import styled from "styled-components";

const ListWrapper = styled.div`
  padding: ${({ template }) => template.listPadding};
  margin: ${({ template }) => template.listMargin};
`;

const getListInitialState = (data, info, template) => {
    switch (info.tagType) {
        case "OPTION":
            return (
                <select>
                    {data.map((datum) => (
                        <ListItemModule key={datum.id} datum={datum} info={info} template={template} />
                    ))}
                </select>
            );
        default:
            return (
                <>
                    <div>{data.label}</div>
                    <div>
                        {data.map((datum) => (
                            <ListItemModule key={datum.id} datum={datum} info={info} template={template} />
                        ))}
                    </div>
                </>
            );
    }
};

const ListModule = (props) => {
    const { data, info, template } = props;
    const [htmlContent, setHtmlContent] = useState(() => getListInitialState(data, info, template));

    return (
        <ListWrapper template={template}>
            {htmlContent}
        </ListWrapper>
    );
};

export default React.memo(ListModule);
