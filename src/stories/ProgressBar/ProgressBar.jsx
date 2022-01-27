import styled from "styled-components";

const StyledProgressBar = styled.div`

// Animation =============================================
// Edit these at random intervals to change the animation.
@keyframes loader {

	0% {
		width: ${props => props.startFill};
	}

	100% {
		width: ${props => props.endFill};
	}

}

// Bar ============================================

	border-radius: 60px;
	overflow: hidden;
    width: 100%;

	& span {
		display: block;
	}

& .bar {
  background-color: ${props => props.backgroundColor || '#f5f5f5'};
}

& .progress {
  animation: loader ${props => props.duration || '1s'} ease-in-out forwards;
  // Change the animation fill mode 'infinite' to 'forwards' to stop the animation from repeating.
  background: ${props => props.color || "#6c6c6c"};
  color: #fff;
  padding: 5px;
  width: 0;
}

// Vertical Centering ==============================
// You don't need this to make it work on your site.


    
`
export default function ProgressBar(props) {
    return (
        <StyledProgressBar
         color={props.color} duration={props.duration} className={props.className} backgroundColor={props.backgroundColor} startFill={props.startFill} endFill={props.endFill}>
            <span className="bar">
                <span className="progress"></span>
            </span>
        </StyledProgressBar>
    )
}