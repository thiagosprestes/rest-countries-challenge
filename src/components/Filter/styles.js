import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 40px 0;
`;

export const Search = styled.div`
    display: flex;
    align-items: center;
    width: 350px;
    box-shadow: 0px 10px 18px rgba(0, 0, 0, 0.03);

    svg {
        position: absolute;
        margin: 20px;
        color: ${(props) => props.theme.colors.text};
    }

    input {
        background: ${(props) => props.theme.colors.elements};
        color: ${(props) => props.theme.colors.text};
        border: 0;
        padding: 20px 20px 20px 50px;
        border-radius: 4px;
        width: 100%;
    }
`;

export const FilterList = styled.div`
    box-shadow: 0px 10px 18px rgba(0, 0, 0, 0.03);

    button {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 200px;
        padding: 20px 30px;
        background: ${(props) => props.theme.colors.elements};
        color: ${(props) => props.theme.colors.text};
    }

    ul {
        list-style: none;
        margin-top: 5px;
        padding: 20px 30px;
        width: 200px;
        border: 0;
        border-radius: 4px;
        background: ${(props) => props.theme.colors.elements};
        color: ${(props) => props.theme.colors.text};

        display: ${(props) => (props.toggleDropdown ? 'block' : 'none')};
        position: absolute;

        box-shadow: 0px 10px 18px rgba(0, 0, 0, 0.03);

        li + li {
            margin-top: 20px;
        }

        li {
            button {
                background: none;
                padding: 0;
                width: 100%;
            }
        }
    }
`;
