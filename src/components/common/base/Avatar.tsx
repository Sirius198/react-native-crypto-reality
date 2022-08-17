import styled from 'styled-components/native'
import Typography from '../typography/Typography';

const Avatar = ({ alt, color = "#019CDE", size = 50, ...rest }) => {
    return (
        <Wrapper color={color} size={size} {...rest}>
            <Typography style={{ color: 'white' }} size={20}>{alt}</Typography>
        </Wrapper>
    )
};

const Wrapper = styled.View`
    align-items: center;
    justify-content: center;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    border-radius: ${props => props.size}px;
    background-color: ${props => props.color};
`;

export default Avatar;