import ListModule from "./ListModule";
import React from "react";
import styled, { css } from "styled-components";
import { useTemplateStyles } from "./useTemplateStyles";

const Container = styled.div`
  /* Default template styles */

  ${({ template }) => useTemplateStyles(template).styles}
`;

const ContentWrapper = styled.div`
  padding: ${({ template }) => template.containerPadding};
  margin: ${({ template }) => template.containerMargin};
`;

const ContainerModule = (props) => {
    const { info, data, template } = props;
    const { mergedTemplate } = useTemplateStyles(template);

    console.dir(mergedTemplate);
    return (
        <Container template={mergedTemplate}>
            <ContentWrapper template={mergedTemplate}>
                <ListModule info={info} data={data} template={mergedTemplate} />
            </ContentWrapper>
        </Container>
    );
};

export default React.memo(ContainerModule);
