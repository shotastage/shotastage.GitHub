import styled from 'styled-components';

interface ContainerProps {
    debug?: string;
}
  
export const Container = styled.div<ContainerProps>`
    margin-left: 50px;
    margin-right: 50px;
    width: auto;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
    @media screen and (max-width: 480px ){
        margin-left: 8px;
        margin-right: 8px;
    }
    background: ${ props => props.debug ? "red" : "transparent"};
`;

interface RowProps {
    right?: string;
    debug?: string;
}

export const Row = styled.div<RowProps>`
    display: flex;
	flex-direction: row;
	justify-content: center;
    background: ${ props => props.debug ? "blue" : "transparent"};

    * {
        box-sizing: border-box;
    }
`;

interface ColProps {
    no?: number;
}

export const Col = styled.div<ColProps>`
    padding: 5px 10px;
    width: 100%;
`;

export const MarginSparcer = styled.div`
    height: 10px;
`;


export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-auto-rows: 1fr;
    grid-gap: 2em;
    padding: 2em;
    margin: 0 0 1em;
    margin-left: 50px;
    margin-right: 50px;
    > div {
        overflow: auto;
        min-width: 0;
        padding: 1.1em;
    }
    @media screen and (max-width: 480px ) {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        margin-left: 8px;
        margin-right: 8px;
    }
`;
