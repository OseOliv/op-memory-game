import styled from "styled-components";

type ContaiinerProps = {
    shownBackground: boolean
}

type IconProps = {
    opacity?: number
}

export const Container = styled.div<ContaiinerProps>`
background-color: ${props => props.shownBackground ? 'transparent' : '#E2E3E3'};
height: 162px;
border-radius: 7px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
`
export const Icon = styled.img<IconProps>`
width: 130px;
height: 160px;
border-radius: 7px;
opacity: ${props => props.opacity ? props.opacity : 1};
`