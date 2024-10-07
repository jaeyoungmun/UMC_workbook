import styled from "styled-components";

const CustomButton = () => {
    return (
        <>
            <FirstStyledSweetPotato color={'purple'}>
                고구마
            </FirstStyledSweetPotato>
            <FirstStyledSweetPotato >
                고구마
            </FirstStyledSweetPotato>
        </>
    );
};

export default CustomButton;

const FirstStyledSweetPotato = styled.button`
    background-color: ${props => props.color || 'purple'};
    border: none;
    padding: 0;
    cursor: pointer;
    color: white;
`