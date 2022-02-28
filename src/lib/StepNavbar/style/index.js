import styled from 'styled-components';
import { StepNavbarItemBase } from '../../StepNavbarItem/style';

const StepNavbarBase = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
    gap: ${props => props.theme.line};
    
    & > :first-child {
        &,
        ${StepNavbarItemBase} {
            &::before,
            &::after {
                border-radius: ${props => props.theme.navbar};
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
            }
        }
    }

    & > :last-child {
        &,
        ${StepNavbarItemBase} {
            &::before {
                border-radius: ${props => props.theme.navbar};
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
            }
        }
    }
`;

export { StepNavbarBase };
